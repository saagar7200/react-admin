import {Create,required, SimpleForm,TextInput,BooleanInput,ReferenceInput,AutocompleteInput,} from 'react-admin';

export const CreateCategory = (props:any) => {
   return(
    <Create title='Create a category' {...props} sx={{minWidth:'300px',alignItems:'center',paddingLeft:'20%',paddingRight:'20%'}}>
        <SimpleForm >

        <TextInput source="name" validate={required()} style={{width:'100%'}} />
        <TextInput source="imageUrl" validate={required()} style={{width:'100%'}}/>
        <BooleanInput defaultChecked source="isActive" />
        </SimpleForm>
        
    </Create>
   )
};
export const CreateSubCategory = (props:any) => {
    return(
     <Create title='Create a sub category' {...props} sx={{minWidth:'300px',alignItems:'center',paddingLeft:'20%',paddingRight:'20%'}}>
     <SimpleForm  >
     <ReferenceInput  source="categoryId" reference="categories" recordRepresentation='name'   >
     <AutocompleteInput validate={required()} label="Category id" style={{width:'100%'}} />
     </ReferenceInput>
         <TextInput validate={required()} source="name"   style={{width:'100%'}}/>
         <TextInput validate={required()} source="imageUrl" style={{width:'100%'}}/>
         <BooleanInput  source="isActive" />

         </SimpleForm>
         
     </Create>
    )
 };

 export const CreateOffer = (props:any) => {
    return(
     <Create title='Create a offer' {...props} sx={{minWidth:'300px',alignItems:'center',paddingLeft:'20%',paddingRight:'20%'}}>
     <SimpleForm >
    
     <ReferenceInput  source="subCategoryId" reference="sub-categories" recordRepresentation='name' >
     <AutocompleteInput validate={required()} label="Sub Category ID" style={{width:'100%'}} />
     </ReferenceInput>
      {/* <ReferenceArrayInput source="subCategoryId" reference="sub-categories">
          <AutocompleteArrayInput  style={{width:'100%'}} />
        </ReferenceArrayInput> */}
     
        <TextInput validate={required()} source="title" style={{width:'100%'}} />
        <TextInput validate={required()} source="imageUrl" style={{width:'100%'}}/>
        <TextInput validate={required()} multiline source="description" style={{width:'100%'}}/>
        <TextInput validate={required()} source="profit" style={{width:'100%'}}/>
        <TextInput validate={required()} source="baseReferalLink" style={{width:'100%'}} />
        <TextInput validate={required()} source="network" style={{width:'100%'}} />

        <BooleanInput source="isActive"/>

         </SimpleForm>
         
     </Create>
    )
 };