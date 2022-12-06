import { Box, Typography } from "@material-ui/core";
import { RichTextInput } from "ra-input-rich-text";

import {
  Create,
  required,
  SimpleForm,
  TextInput,
  ImageInput,
  ImageField,
  BooleanInput,
  ReferenceInput,
  AutocompleteInput,
  ReferenceArrayInput,
  AutocompleteArrayInput,
  useNotify,
} from "react-admin";

const choices: { id: string; name: string }[] = [
  { id: "inr", name: "inr" },
  { id: "cuelink", name: "cuelink" },
];

export const CreateOffer = (props: any) => {
  const notify = useNotify();

  const onError = (error: any) => {
    notify(`Could not create offer: ${error.message}`, { type: "error" });
  };

  return (
    <div className="create_category_container">
      <Typography className="form_heading" variant="h5">
        Create a offer
      </Typography>

      <Create
        title=" "
        {...props}
        redirect="list"
        mutationOptions={{ onError }}
      >
        <SimpleForm mode="onBlur" reValidateMode="onBlur">
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

            <AutocompleteInput
              source="network"
              validate={required()}
              variant="outlined"
              choices={choices}
            />
          </Box>
          <Box className="offer_form_wrapper">
            <TextInput
              variant="outlined"
              validate={required()}
              source="subtitle"
            />
            <TextInput
              variant="outlined"
              validate={required()}
              source="merchantName"
            />
          </Box>
          <Box className="offer_form_wrapper">
            <ReferenceArrayInput
              variant="outlined"
              source="tags"
              reference="offers/tags"
            >
              <AutocompleteArrayInput
                variant="outlined"
                optionText="tag"
                optionValue="tag"
                label="Tags"
              />
            </ReferenceArrayInput>

            <TextInput
              type="color"
              variant="outlined"
              source="color"
              label="Color"
              id="colorInput"
            />
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
            <ImageInput className="textInput" source="icon" label="Icon">
              <ImageField source="src" title="title" />
            </ImageInput>
          </Box>

          <RichTextInput variant="outlined" source="cashbackRate" fullWidth />

          <RichTextInput variant="outlined" source="cashbackTerms" fullWidth />
          <RichTextInput variant="outlined" source="offerDetails" fullWidth />

          <BooleanInput source="isActive" />
        </SimpleForm>
      </Create>
    </div>
  );
};
