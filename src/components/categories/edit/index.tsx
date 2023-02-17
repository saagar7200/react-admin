import { Box, Typography } from "@material-ui/core";
import {
  required,
  Edit,
  SimpleForm,
  TextInput,
  ImageInput,
  BooleanInput,
  ImageField,
  useNotify,
  number,
  useResourceContext,
} from "react-admin";

import "../../../styles/edit.css";
import Title from "../../../utils/title/Title";

export const EditCategory = (props: any) => {
  const notify = useNotify();
  const resource = useResourceContext();

  const onError = (error: any) => {
    notify(`Could not edit category: ${error.message}`, { type: "error" });
  };

  const transform = (data: any) => {
    let { image, icon, ...others } = data;
    if (data.image.rawFile) {
      others.image = image;
      others.imageUrl = null;
    } else {
      others.imageUrl = data.image.src;
    }
    if (data.icon.rawFile) {
      others.icon = icon;
    } else {
      others.icon = data.icon.src;
    }
    return others;
  };

  return (
    <div className="edit_container">
      <Title title="Edit a Category" resource={resource} />

      <Edit
        title=" "
        transform={transform}
        {...props}
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
      </Edit>
    </div>
  );
};
