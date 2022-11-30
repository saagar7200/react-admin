import { Box, Typography } from "@material-ui/core";
import {
  required,
  Edit,
  SimpleForm,
  TextInput,
  ImageInput,
  BooleanInput,
  ImageField,
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
          <Box className="offer_form_wrapper">
            <TextInput
              className="textInput"
              source="name"
              label="Category name"
              variant="outlined"
              validate={required()}
            />
            <TextInput
              className="textInput"
              variant="outlined"
              label="Subtitle"
              validate={required()}
              source="subTitle"
            />
          </Box>
          <Box className="offer_form_wrapper">
            <TextInput
              className="textInput"
              variant="outlined"
              label="Title"
              validate={required()}
              source="title"
            />
            <TextInput
              className="textInput"
              variant="outlined"
              label="Description"
              validate={required()}
              source="description"
            />
          </Box>
          <Box className="offer_form_wrapper">
            <ImageInput className="textInput" source="image" label="Image">
              <ImageField source="src" title="title" />
            </ImageInput>
            <ImageInput className="textInput" source="icon" label="Icon">
              <ImageField source="src" title="title" />
            </ImageInput>
          </Box>

          <BooleanInput defaultChecked source="isActive" />
        </SimpleForm>
      </Edit>
    </div>
  );
};
