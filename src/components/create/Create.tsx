import { Box, Typography } from '@material-ui/core';
// import Grid from '@mui/material/Grid';
import "./create.css"
import {Create,required, SimpleForm,TextInput,BooleanInput,ReferenceInput,AutocompleteInput,} from 'react-admin';
export const CreateCategory = (props:any) => {
   return(
<div className="create_category_container">
    <Typography className='form_heading'  variant="h6">Create a Category</Typography>
     
    <Create title=' ' {...props} >
        <SimpleForm  >
          

        <TextInput source="name"  variant="standard" validate={required()} style={{width:'100%'}} />
        <TextInput source="imageUrl" validate={required()} variant="standard"  style={{width:'100%'}}/>
        <BooleanInput defaultChecked source="isActive" />
        </SimpleForm>
    </Create>
   
    
</div>
   )
};
export const CreateSubCategory = (props:any) => {
    return(
        <div className="create_category_container">
            <Typography className='form_heading'  variant="h6">Create a Subategory</Typography>
                
                <Create title=' ' >
                <SimpleForm  >
                <Box className='offer_form_wrapper'>
                    <ReferenceInput  variant="standard"  source="categoryId" reference="categories" recordRepresentation='name'   >
                        <AutocompleteInput  variant="standard" validate={required()} label="Category " style={{width:'100%'}} />
                    </ReferenceInput>
                    <TextInput  variant="standard" validate={required()} source="description"   style={{width:'100%'}}/>            
                </Box>
                <Box className='offer_form_wrapper'>
                  <TextInput  variant="standard" validate={required()} source="name"   style={{width:'100%'}}/>

                    <TextInput  variant="standard" validate={required()} source="imageUrl"  style={{width:'100%'}} />
                 </Box>
               
                <TextInput  variant="standard" validate={required()} source="title"   style={{width:'100%'}}/>
                <BooleanInput  source="isActive" />

                </SimpleForm>
                    
                </Create>
     </div>
    )
 };

 export const CreateOffer = (props:any) => {
    return(
     <div className="create_category_container">
    <Typography className='form_heading'  variant="h6">Create a offer</Typography>

    <Create title=' ' {...props} >
     <SimpleForm >
        <Box className='offer_form_wrapper'>
            <ReferenceInput  variant="standard" source="subCategoryId" reference="sub-categories" recordRepresentation='name' >
                <AutocompleteInput  variant="standard" validate={required()} label="Sub Category ID" />
            </ReferenceInput>
            <TextInput  variant="standard" validate={required()} source="title" />
        </Box>
        <Box className='offer_form_wrapper'>
            <TextInput  variant="standard" validate={required()} source="profit" />
            <TextInput  variant="standard" validate={required()} source="imageUrl" />
        </Box>
        <Box className='offer_form_wrapper'>
            <TextInput  variant="standard" validate={required()} multiline source="description" />
            <TextInput  variant="standard" validate={required()} source="baseReferalLink" />
        </Box>
        <Box className='offer_form_wrapper'>
            <TextInput  variant="standard" validate={required()} source="network" />
            <BooleanInput  source="isActive"/>

        </Box>
         </SimpleForm>  
     </Create>
     </div>
    )
 };