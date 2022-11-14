// @ts-nocheck
import simpleRestProvider from "ra-data-simple-rest";
import { fetchUtils } from "react-admin";
import { stringify } from "query-string";

const servicesHost = "https://daaf-103-10-31-95.in.ngrok.io";
const  countHeader: string = 'Content-Range';

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
  // const token = localStorage.getItem('token');
  // options.headers.set('Authorization', `Bearer ${token}`);
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

    const query = {
        sort: JSON.stringify([field, order]),
        range: JSON.stringify([rangeStart, rangeEnd]),
        filter: JSON.stringify(params.filter),
    };
    const url = `${servicesHost}/${resource}?${stringify(query)}`;
    const options =
        countHeader === 'Content-Range'
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
        console.log(json,"<------------------------------getList")

        return {
          data: json.data,
            // data: json,
            total:
                countHeader === 'Content-Range'
                    ? parseInt(
                          headers.get('content-range').split('/').pop(),
                          10
                      )
                    : parseInt(headers.get(countHeader.toLowerCase())),
        };
    });
},


  getMany: (resource, params) => {
    const query = {
        filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${servicesHost}/${resource}?${stringify(query)}`;
    return httpClient(url).then(({ json }) => {
      console.log(json,"<------------------------------getMany")
     return { data: json.data}});
    // return { data: json}});

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
    console.log({params})
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

};
