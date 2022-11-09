import { Box, Typography } from "@material-ui/core";
import {
  required,
  Edit,
  SimpleForm,
  TextInput,
  BooleanInput,
  ReferenceInput,
  AutocompleteInput,
} from "react-admin";
import "../../../styles/edit.css";



export const EditSubCategory = (props: any) => {
  return (
    <div className="edit_container">
      <Typography className="form_heading" variant="h5">
        Edit a sub category
      </Typography>

      <Edit title=" " {...props}>
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
             <TextInput
            variant="outlined"
            validate={required()}
            source="imageUrl"
            style={{ width: "100%" }}
          />
          </Box>
          <TextInput
            multiline
            variant="outlined"
            validate={required()}
            source="description"
            style={{ width: "100%" }}
          />
          {/* <Box className="offer_form_wrapper">
           <ImageInput className="textInput" source="imageUrl" label="Image">
                <ImageField source="src" title="title" />
            </ImageInput> 
           
            <div className="textInput"></div>
          </Box> */}
          <BooleanInput source="isActive" />

        </SimpleForm>
      </Edit>
    </div>
  );
};

