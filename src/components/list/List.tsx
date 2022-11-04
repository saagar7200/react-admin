import  React from "react";
import { List, Datagrid, DateField, TextField, EditButton, DeleteButton,ReferenceField } from 'react-admin';
import { SearchInput, TextInput } from 'react-admin';

const postFilters = [
    <SearchInput variant="standard" source="q" alwaysOn />
]
export const Categories = (props:any) => {


    return  <List {...props} filters={postFilters}>

        
                <Datagrid rowClick="edit">
                    <TextField source="id" />
                    <TextField source="name" />
                    <TextField source="imageUrl" />
                    <TextField source="isActive" />
                    <EditButton  />

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
        
                
            </Datagrid>
          
   
 </List>
};

export const Offers = (props:any) => {




    return  <List {...props}  >

                <Datagrid rowClick="edit">
                <TextField source="id" />
        
                <TextField source="title" />
              
                <TextField source="profit"/>
                <TextField source="baseReferalLink" />
                <TextField source="network" />
                <TextField source="isActive" />
                <DateField source="createdAt" />
                <DateField source="updatedAt" />
                <EditButton  />
        
        
            </Datagrid>

 </List>
};