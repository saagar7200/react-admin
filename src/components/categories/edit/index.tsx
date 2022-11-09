import { Typography } from "@material-ui/core";
import {
  required,
  Edit,
  SimpleForm,
  TextInput,
  BooleanInput,
} from "react-admin";
import "../../../styles/edit.css";


export const EditCategory = (props: any) => {
  return (
    <div className="edit_container">
      <Typography className="form_heading" variant="h5">
        Edit a Category
      </Typography>
      <Edit title=" " {...props}>
        <SimpleForm>
          <TextInput
            variant="outlined"
            source="name"
            validate={required()}
            style={{ minWidth: "100%" }}
          />
          <TextInput
            className="textInput"
            source="imageUrl"
            variant="outlined"
            validate={required()}
          /> 
          <BooleanInput source="isActive" />
          {/* <Box className="offer_form_wrapper">
            <ImageInput className="textInput" source="pictures" label="Image">
              <ImageField source="src" title="title" />
            </ImageInput>
            
            <div className="textInput"></div>
          </Box> */}
        </SimpleForm>
      </Edit>
    </div>
  );
};