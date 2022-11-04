import { Box, Typography } from '@material-ui/core';
import {required,Edit, SimpleForm,TextInput,BooleanInput,ReferenceInput,AutocompleteInput} from 'react-admin';
import "./edit.css"

export const EditCategory = (props:any) =>{


    return(
        <div className='edit_container'>
            <Typography className='form_heading'  variant="h6">Edit a Category</Typography>
            <Edit title=' ' {...props} > 
                <SimpleForm >
                    <TextInput source="name" validate={required()} style={{minWidth:'100%'}}/>
                    <TextInput source="imageUrl" validate={required()} style={{minWidth:'100%'}}/>
                    <BooleanInput  source="isActive" />
                </SimpleForm>
        </Edit>
        </div>
    )
}

export const EditSubCategory = (props:any) =>{
    return(
        <div className='edit_container'>
            <Typography className='form_heading'  variant="h6">Edit a sub category</Typography>

            <Edit title=' ' {...props} >
                <SimpleForm>
                    <ReferenceInput source="categoryId" reference="categories" recordRepresentation='name'   >
                        <AutocompleteInput label="category id" style={{width:'100%'}} />
                    </ReferenceInput>
     
                    <TextInput source="name" validate={required()} style={{width:'100%'}} />
                    <TextInput source="imageUrl" validate={required()} style={{width:'100%'}}/>
                    <BooleanInput  source="isActive" />
                </SimpleForm>
        
            </Edit>
        </div>
    )
}


export const EditOffer = (props:any) =>{
    return(
        <div>
            <Typography className='form_heading'  variant="h6">Edit Offer</Typography>

            <Edit title=' ' {...props} >
            <SimpleForm>
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
       </Edit>
        </div>
    )
}


{/* <ReferenceInput  source="subCategoryId" validate={required()} reference="sub-categories" recordRepresentation='name' >
<AutocompleteInput label="Sub Category ID" validate={required()} style={{width:'100%'}} />
</ReferenceInput>
<TextInput source="title" validate={required()} style={{width:'100%'}}/>
<TextInput multiline source="description" validate={required()} style={{width:'100%'}}/>
<TextInput  source="imageUrl" validate={required()} style={{width:'100%'}}/>
<TextInput source="profit" validate={required()} style={{width:'100%'}}/>
<TextInput source="baseReferalLink" validate={required()} style={{width:'100%'}}/>
<TextInput source="network" validate={required()} style={{width:'100%'}}/>

<BooleanInput source="isActive"/> */}