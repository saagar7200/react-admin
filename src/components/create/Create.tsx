import { Box, Typography } from "@material-ui/core";
// import Grid from '@mui/material/Grid';
import "./create.css";
import {
  Create,
  required,
  SimpleForm,
  TextInput,
  BooleanInput,
  ReferenceInput,
  AutocompleteInput,
  ImageInput,
  ImageField,
} from "react-admin";

const choices: { id: string; name: string }[] = [
  { id: "INR", name: "INR" },
  { id: "cuelink", name: "Cuelink" },
];

export const CreateCategory = (props: any) => {
  return (
    <div className="create_category_container">
      <Typography className="form_heading" variant="h5">
        Create a Category
      </Typography>

      <Create title=" " {...props}>
        <SimpleForm>
          <TextInput
            className="textInput"
            source="name"
            label="Category name"
            variant="outlined"
            validate={required()}
          />
          {/* <TextInput
            className="textInput"
            source="imageUrl"
            variant="outlined"
            validate={required()}
          /> */}
           {/* <Box className="offer_form_wrapper">
             <ImageInput className="textInput" source="image" label="Image"> */}
          <Box className="offer_form_wrapper">
            <ImageInput className="textInput" source="image" label="Image">
              <ImageField source="src" title="title" />
            </ImageInput>
             
            <div className="textInput"></div>
          </Box>
          <BooleanInput defaultChecked source="isActive" />
        </SimpleForm>
      </Create>
    </div>
  );
};
export const CreateSubCategory = (props: any) => {
  return (
    <div className="create_category_container">
      <Typography className="form_heading" variant="h5">
        Create a Subcategory
      </Typography>

      <Create title=" ">
        <SimpleForm>
          <Box className="offer_form_wrapper">
              <ReferenceInput
              variant="outlined"
              source="categoryId"
              reference="categories"
              recordRepresentation="name"
            >
              <AutocompleteInput
                variant="outlined"
                validate={required()}
                label="Category"
              />
            </ReferenceInput>
            <TextInput
              variant="outlined"
              validate={required()}
              source="title"
              style={{ width: "100%" }}
            />
          </Box>
          <Box className="offer_form_wrapper">
            <TextInput
              variant="outlined"
              validate={required()}
              source="name"
              label="Sub Category Name"
              style={{ width: "100%" }}
            />
             {/* <TextInput
            variant="outlined"
            validate={required()}
            source="imageUrl"
            style={{ width: "100%" }}
          /> */}
          </Box>
          <TextInput
            multiline
            variant="outlined"
            validate={required()}
            source="description"
            style={{ width: "100%" }}
          />
          <Box className="offer_form_wrapper">
           <ImageInput className="textInput" source="image" label="Image">
                <ImageField source="src" title="title" />
            </ImageInput> 
           
            <div className="textInput"></div>
          </Box>
          <BooleanInput source="isActive" />

        </SimpleForm>
      </Create>
    </div>
  );
};

export const CreateOffer = (props: any) => {
  return (
    <div className="create_category_container">
      <Typography className="form_heading" variant="h5">
        Create a offer
      </Typography>

      <Create title=" " {...props}>
        <SimpleForm>
          <Box className="offer_form_wrapper">
            <ReferenceInput
              variant="outlined"
              source="subCategoryId"
              reference="sub-categories"
              recordRepresentation="name"
            >
              <AutocompleteInput
                variant="outlined"
                validate={required()}
                label="Sub Category"
              />
            </ReferenceInput>
            <TextInput
              variant="outlined"
              validate={required()}
              label="Offer Title"
              source="title"
            />
          </Box>
          <Box className="offer_form_wrapper">
            <TextInput
              variant="outlined"
              validate={required()}
              source="profit"
            />
            <TextInput
              variant="outlined"
              validate={required()}
              source="baseReferalLink"
              label="Base Referal Link"
            />
          </Box>
          <Box className="offer_form_wrapper">
            <TextInput
              variant="outlined"
              validate={required()}
              source="rating"
            />
            {/* <TextInput
              variant="outlined"
              validate={required()}
              source="network"
            /> */}


            <AutocompleteInput
              source="network"
              validate={required()}
              variant="outlined"
              choices={choices}
            />
          </Box>

          <Box className="offer_form_wrapper">
          {/* <TextInput
            className='textInput'
              variant="outlined"
              validate={required()}
              multiline
              source="imageUrl"
            /> */}
            <BooleanInput source="isActive" />
          </Box>
          
          <TextInput
            className="textInput"
            variant="outlined"
            validate={required()}
            multiline
            source="description"
          />
        
          <Box className="offer_form_wrapper">
            <ImageInput className="textInput" source="image" label="Image">
              <ImageField source="src" title="title" />
            </ImageInput>
            <div className="textInput"></div>
          </Box>
        </SimpleForm>
      </Create>
    </div>
  );
};
