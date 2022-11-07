import { Typography } from "@material-ui/core";
import React from "react";
import {
  List,
  Datagrid,
  DateField,
  TextField,
  EditButton,
  ShowButton,
  ReferenceField,
  ImageField,
  BooleanField,
  TextInput,
  Labeled,
} from "react-admin";
import { Empty } from "../empty/Empty";

import "./list.css";

const filters = [
  <TextInput
    className="search_form"
    source="q"
    variant="outlined"
    label="Search"
    alwaysOn
  />,
];
export const Categories = (props: any) => {
  return (
    <div className="list_wapper">
      <Typography className="List_header" variant="h5">
        {" "}
        Categories
      </Typography>
      <List {...props} filters={filters}>
        <Datagrid rowClick="edit" empty={<Empty label="Category" />}>
          <ImageField
            className="imgaes"
            source="imageUrl"
            title="image"
            label="Image"
            sx={{
              "& img": { maxWidth: 50, maxHeight: 60, objectFit: "cover" },
            }}
          />
          <TextField source="name" />
          <BooleanField
            source="isActive"
            label="Status"
            valueLabelTrue="Active"
            valueLabelFalse="inActive"
          />

          <Labeled label="actions">
            <>
              <EditButton label=' '/>
            </>
          </Labeled>
        </Datagrid>
      </List>
    </div>
  );
};

export const SubCategories = (props: any) => {
  return (
    <div>
      <Typography className="List_header" variant="h5">
        {" "}
        Sub Categories
      </Typography>

      <List {...props} filters={filters}>
        <Datagrid rowClick="edit" empty={<Empty label="Sub Category" />}>
          {/* <TextField source="categoryId" /> */}
          <ReferenceField
            label="category"
            source="categoryId"
            reference="categories"
          />
          <ImageField
            className="imgaes"
            source="imageUrl"
            title="title"
            sx={{
              "& img": { maxWidth: 50, maxHeight: 60, objectFit: "cover" },
            }}
          />

          <TextField source="name" />
          <BooleanField source="isActive" label="Status" />
          <EditButton />
        </Datagrid>
      </List>
    </div>
  );
};

export const Offers = (props: any) => {
  return (
    <div>
      <Typography className="List_header" variant="h5">
        {" "}
        All Offers
      </Typography>

      <List title={"Offer"} {...props} filters={filters}>
        <Datagrid rowClick="edit" empty={<Empty label="Offer" />}>
          <ImageField
            className="imgaes"
            source="imageUrl"
            title="title"
            sx={{
              "& img": { maxWidth: 50, maxHeight: 60, objectFit: "cover" },
            }}
          />
          <TextField source="title" />
          <ReferenceField
            label="Subcategory"
            source="subCategoryId"
            reference="sub-categories"
          />

          <TextField source="profit" />
          {/* <TextField source="baseReferalLink" /> */}
          <TextField source="network" />

          <BooleanField source="isActive" label="Status" />
          <DateField source="createdAt" />
          <DateField source="updatedAt" />
          <EditButton label="Action" />
          <ShowButton />
        </Datagrid>
      </List>
    </div>
  );
};
