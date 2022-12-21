// @ts-nocheck
import { stringify } from "query-string";
import simpleRestProvider from "ra-data-simple-rest";
import { fetchUtils } from "react-admin";

export const servicesHost = "https://rayyapi.tk";

const countHeader: string = "Content-Range";

const objectToFormData = (obj, form, namespace) => {
  const fd = form || new FormData();
  let formKey;
  for (const property in obj) {
    if (obj.hasOwnProperty(property) && obj[property]) {
      if (namespace) {
        formKey = namespace + "[" + property + "]";
      } else {
        formKey = property;
      }
      // if the property is an object, but not a File,
      // use recursivity.
      if (
        typeof obj[property] === "object" &&
        !(obj[property] instanceof File)
      ) {
        objectToFormData(obj[property], fd, property);
      } else {
        // if it's a string or a File object
        fd.append(formKey, obj[property]);
      }
    }
  }
  return fd;
};

const httpClient = (url, options) => {
  // if (!options.headers) {
  //     options.headers = new Headers({ Accept: 'application/json' });
  // }
  const { accessToken } = JSON.parse(localStorage.getItem("user"));
  if (accessToken) {
    if (typeof options == "undefined") {
      options = {
        headers: new Headers({ Authorization: `Bearer ${accessToken}` }),
      };
    } else {
      if (typeof options.headers == "undefined") {
        options.headers = new Headers({
          Authorization: `Bearer ${accessToken}`,
        });
      } else {
        options.headers.set("Authorization", `Bearer ${accessToken}`);
      }
    }
  }
  return fetchUtils.fetchJson(url, options);
};

export const dataProvider = simpleRestProvider(servicesHost, httpClient);

export const myDataProvider = {
  ...dataProvider,

  getList: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;

    const rangeStart = (page - 1) * perPage;
    const rangeEnd = page * perPage - 1;
    const { startDate, endDate, ...others } = params.filter;

    const date = [startDate ? startDate : null, endDate ? endDate : null];

    let filter = others;

    if (startDate && endDate) {
      filter = {
        ...others,
        date,
      };
    }

    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([rangeStart, rangeEnd]),
      filter: JSON.stringify(filter),
    };
    const url = `${servicesHost}/${resource}?${stringify(query)}`;
    const options =
      countHeader === "Content-Range"
        ? {
            // Chrome doesn't return `Content-Range` header if no `Range` is provided in the request.
            headers: new Headers({
              Range: `${resource}=${rangeStart}-${rangeEnd}`,
            }),
          }
        : {};

    return httpClient(url, options).then(({ headers, json }) => {
      if (!headers.has(countHeader)) {
        throw new Error(
          `The ${countHeader} header is missing in the HTTP Response. The simple REST data provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare ${countHeader} in the Access-Control-Expose-Headers header?`
        );
      }
      return {
        data: json,
        total:
          countHeader === "Content-Range"
            ? parseInt(headers.get("content-range").split("/").pop(), 10)
            : parseInt(headers.get(countHeader.toLowerCase())),
      };
    });
  },

  create: (resource: any, params: any) => {
    const objectFromForm = params.data;
    let isFormWithFile = false;
    //go through each value in object, and if a value has rawFile property, then it is a file
    const transformed = {};
    for (const [key, value] of Object.entries(objectFromForm)) {
      //does value have rawFile property and is it instance of File
      if (value?.rawFile instanceof File) {
        isFormWithFile = true;
        transformed[key] = value.rawFile;
      } else {
        transformed[key] = value;
      }
    }
    return httpClient(`${servicesHost}/${resource}`, {
      method: "POST",
      body: isFormWithFile
        ? objectToFormData(transformed)
        : JSON.stringify(transformed),
    }).then(({ json }) => ({ data: json }));
  },
  update: (resource: any, params: any) => {
    const objectFromForm = params.data;

    let isFormWithFile = false;
    //go through each value in object, and if a value has rawFile property, then it is a file
    const transformed = {};
    for (const [key, value] of Object.entries(objectFromForm)) {
      //does value have rawFile property and is it instance of File
      if (value?.rawFile instanceof File) {
        isFormWithFile = true;
        transformed[key] = value.rawFile;
      } else {
        transformed[key] = value;
      }
    }
    return httpClient(`${servicesHost}/${resource}/${params.data.id}`, {
      method: "PUT",
      body: isFormWithFile
        ? objectToFormData(transformed)
        : JSON.stringify(transformed),
    }).then(({ json }) => ({ data: json }));
  },
  getOne: (resource, params) =>
    httpClient(`${servicesHost}/${resource}/${params.id}`).then(({ json }) => {
      let newData: any = {
        ...json,
        image: { src: json?.imageUrl ? json?.imageUrl : json?.image },
        icon: { src: json.icon },
      };

      return {
        data: newData,
      };
    }),
};
