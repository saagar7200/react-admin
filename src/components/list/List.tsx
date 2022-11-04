import { Typography } from "@material-ui/core";
import React from "react";
import {
  List,
  Datagrid,
  DateField,
  TextField,
  EditButton,
  ReferenceField,
  ImageField
} from "react-admin";
import { SearchInput, TextInput } from "react-admin";
import "./list.css"

const filters = [
  <SearchInput  variant="outlined" source="name" alwaysOn />  
];
export const Categories = (props: any) => {
  return (
    <List {...props} filters={filters}>
      <Datagrid rowClick="edit">
        <TextField source="name" />
        <ImageField className="imgaes" source="imageUrl" title="title"
        sx={{ '& img': { maxWidth: 50, maxHeight: 60, objectFit:'cover' } }}
        
        />
        {/* <TextField source="imageUrl" /> */}
        <TextField source="isActive" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export const SubCategories = (props: any) => {
  return (
    <List {...props} filters={filters}>
      <Datagrid rowClick="edit">
        {/* <TextField source="categoryId" /> */}
        <ReferenceField
          label="category"
          source="categoryId"
          reference="categories"
           />
        <TextField source="name" />
        <ImageField className="imgaes" source="imageUrl" title="title"
        sx={{ '& img': { maxWidth: 50, maxHeight: 60, objectFit:'cover' } }}
        
        />

        {/* <TextField source="imageUrl" /> */}
        <TextField source="isActive" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export const Offers = (props: any) => {
  return (
   <div>
    <List title={"Offer"} {...props} filters={filters}>
      <Datagrid rowClick="edit">
        <TextField source="title" />
        <ReferenceField
          label="Subcategory"
          source="subCategoryId"
          reference="sub-categories"
           />

        <TextField source="profit" />
        {/* <TextField source="baseReferalLink" /> */}
        <TextField source="network" />
        <TextField source="isActive" />
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
        <EditButton />
      </Datagrid>
    </List>
   </div>
  );
};
