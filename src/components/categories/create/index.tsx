import { Box, Typography } from "@material-ui/core";
import "../../../styles/create.css";
import {
  Create,
  required,
  SimpleForm,
  TextInput,
  BooleanInput,
  ImageInput,
  ImageField,
} from "react-admin";

export const CreateCategory = (props: any) => {
  return (
    <div className="create_category_container">
      <Typography className="form_heading" variant="h5">
        Create a Category
      </Typography>

      <Create title=" " {...props} redirect="list">
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
      </Create>
    </div>
  );
};
