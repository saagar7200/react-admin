import {required,Edit, SimpleForm,TextInput,BooleanInput,ReferenceInput, SelectInput, AutocompleteInput} from 'react-admin';

export const EditCategory = (props:any) =>{


    return(
        <Edit title='Edit a category' {...props} sx={{minWidth:'300px',alignItems:'center',paddingLeft:'20%',paddingRight:'20%'}} >
            
                <SimpleForm >
        
                 <TextInput source="name" validate={required()} style={{minWidth:'100%'}}/>
                <TextInput source="imageUrl" validate={required()} style={{minWidth:'100%'}}/>
                <BooleanInput  source="isActive" />
                </SimpleForm>
    
    </Edit>
    )
}

export const EditSubCategory = (props:any) =>{
    return(
        <Edit title='Edit a sub category' {...props} sx={{minWidth:'300px',alignItems:'center',paddingLeft:'20%',paddingRight:'20%'}}>
        <SimpleForm>
        <ReferenceInput source="categoryId" reference="categories" recordRepresentation='name'   >
     <AutocompleteInput label="category id" style={{width:'100%'}} />
     </ReferenceInput>
     
        <TextInput source="name" validate={required()} style={{width:'100%'}} />
        <TextInput source="imageUrl" validate={required()} style={{width:'100%'}}/>
        <BooleanInput  source="isActive" />
        </SimpleForm>
        
    </Edit>
    )
}


export const EditOffer = (props:any) =>{
    return(
        <Edit title='Edit Offer' {...props} sx={{minWidth:'300px',alignItems:'center',paddingLeft:'20%',paddingRight:'20%'}} >
        <SimpleForm>
        
        <ReferenceInput  source="subCategoryId" validate={required()} reference="sub-categories" recordRepresentation='name' >
     <AutocompleteInput label="Sub Category ID" validate={required()} style={{width:'100%'}} />
     </ReferenceInput>
     {/* <ReferenceInput  source="subCategoryId" reference="sub-categories" recordRepresentation='name' >
     <AutocompleteInput label="Sub Category ID" style={{width:'100%'}} />
     </ReferenceInput> */}

      
        <TextInput source="title" validate={required()} style={{width:'100%'}}/>
        <TextInput multiline source="description" validate={required()} style={{width:'100%'}}/>
        <TextInput  source="imageUrl" validate={required()} style={{width:'100%'}}/>
        <TextInput source="profit" validate={required()} style={{width:'100%'}}/>
        <TextInput source="baseReferalLink" validate={required()} style={{width:'100%'}}/>
        <TextInput source="network" validate={required()} style={{width:'100%'}}/>

        <BooleanInput source="isActive"/>
        </SimpleForm>
        
    </Edit>
    )
}