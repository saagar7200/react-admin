import {Box,Typography } from "@material-ui/core";
import "../../../styles/create.css";
import {
  Create,
  required,
  SimpleForm,
  TextInput,
  BooleanInput,
  ImageInput,
  ImageField,
  useNotify
} from "react-admin";



export const CreateCategory = (props: any) => {

  const notify = useNotify();

  const onError = (error:any) => {
    notify(`Could not create post: ${error.message}`);
};

  return (
    <div className="create_category_container">
      <Typography className="form_heading" variant="h5">
        Create a Category
      </Typography>

      <Create mutationOptions={{ onError }}  title=" " {...props} redirect="list">
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

