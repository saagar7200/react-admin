import  React from "react";

import { List, Datagrid, DateField, TextField, EditButton, DeleteButton,ReferenceField } from 'react-admin';


export const Categories = (props:any) => {


    return  <List {...props}>

        
                <Datagrid rowClick="edit">
                    <TextField source="id" />
                    <TextField source="name" />
                    <TextField source="imageUrl" />
                    <TextField source="isActive" />
                    <EditButton/>
                    <DeleteButton />

                </Datagrid>

    
 </List>
};





export const SubCategories = (props:any) => {



    return  <List {...props}>


                <Datagrid rowClick="edit">
                <TextField source="id" />
                {/* <TextField source="categoryId" /> */}
                <ReferenceField label="category" source="categoryId" reference="categories"  />
                <TextField source="name" />
                <TextField source="imageUrl" />
        
                <TextField source="isActive" />
                <EditButton/>
                <DeleteButton/>
        
                
            </Datagrid>
          
   
 </List>
};

export const Offers = (props:any) => {




    return  <List {...props}  >

                <Datagrid rowClick="edit">
                <TextField source="id" />
                {/* <TextField source="subCategoryId" /> */}
        
                <TextField source="title" />
              
                <TextField source="profit"/>
                <TextField source="baseReferalLink" />
                <TextField source="network" />
                <TextField source="isActive" />
                <DateField source="createdAt" />
                <DateField source="updatedAt" />
                {/* <DateField source="startsAt" /> */}
                <EditButton/>
                <DeleteButton/>
        
        
            </Datagrid>

 </List>
};