import { Box, Typography } from "@material-ui/core";

import {
  Create,
  required,
  SimpleForm,
  TextInput,
  BooleanInput,
  ImageInput,
  ImageField,
  ReferenceInput,
  AutocompleteInput,
  ReferenceArrayInput,
  AutocompleteArrayInput,
  useNotify,
} from "react-admin";

export const CreateSubCategory = (props: any) => {
  const notify = useNotify();

  const onError = (error: any) => {
    notify(`Could not create sub category: ${error.message}`, {
      type: "error",
    });
  };

  return (
    <div className="create_category_container">
      <Typography className="form_heading" variant="h5">
        Create a Subcategory
      </Typography>

      <Create title=" " redirect="list" mutationOptions={{ onError }}>
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
      </Create>
    </div>
  );
};
