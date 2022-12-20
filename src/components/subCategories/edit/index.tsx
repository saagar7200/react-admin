import { Box, Typography } from "@material-ui/core";
import {
  required,
  Edit,
  SimpleForm,
  TextInput,
  ImageInput,
  ImageField,
  BooleanInput,
  ReferenceInput,
  AutocompleteInput,
  AutocompleteArrayInput,
  ReferenceArrayInput,
  useNotify,
} from "react-admin";
import "../../../styles/edit.css";

export const EditSubCategory = (props: any) => {
  const notify = useNotify();

  const onError = (error: any) => {
    notify(`Could not edit sub category: ${error.message}`, {
      type: "error",
    });
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
      <Typography className="form_heading" variant="h5">
        Edit a sub category
      </Typography>

      <Edit
        title=" "
        {...props}
        mutationOptions={{ onError }}
        transform={transform}
      >
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
            <ReferenceArrayInput
              variant="outlined"
              source="childSubCategoryId"
              reference="sub-categories"
              recordRepresentation="name"
            >
              <AutocompleteArrayInput
                variant="outlined"
                label="Related Sub Categories"
              />
            </ReferenceArrayInput>
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
              label="Sub Category Title"
              source="title"
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
              multiline
              variant="outlined"
              validate={required()}
              source="description"
              style={{ width: "100%" }}
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
          <BooleanInput source="isActive" />
        </SimpleForm>
      </Edit>
    </div>
  );
};
