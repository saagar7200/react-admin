import { Box, Typography } from "@material-ui/core";
import "../../../styles/create.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Create,
  required,
  SimpleForm,
  TextInput,
  BooleanInput,
  ImageInput,
  ImageField,
  useNotify,
  number,
  useResourceContext,
} from "react-admin";
// import { useNavigate } from "react-router-dom";
import Title from "../../../utils/title/Title";

export const CreateCategory = (props: any) => {
  const notify = useNotify();
  const resource = useResourceContext();
  // const navigate = useNavigate();

  const onError = (error: any) => {
    notify(`Could not create category: ${error.message}`, { type: "error" });
  };

  return (
    <div className="create_category_container">
      <Title title="Create a Category" resource={resource} />

      <Create
        title=" "
        {...props}
        redirect="list"
        mutationOptions={{ onError }}
      >
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
              label="priority"
              validate={[required(), number()]}
              source="priority"
            />
          </Box>
          <Box className="offer_form_wrapper">
            <TextInput
              className="textInput"
              variant="outlined"
              label="Carousel subtitle"
              validate={required()}
              source="carouselProp"
            />
            <TextInput
              className="textInput"
              variant="outlined"
              label="Description"
              validate={required()}
              source="description"
              multiline
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
