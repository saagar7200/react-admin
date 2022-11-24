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
} from "react-admin";
import "../../../styles/edit.css";
import { RichTextInput } from "ra-input-rich-text";

const choices: { id: string; name: string }[] = [
  { id: "inr", name: "inr" },
  { id: "cuelink", name: "cuelink" },
];

export const EditOffer = (props: any) => {
  return (
    <div>
      <Typography className="form_heading" variant="h5">
        Edit Offer
      </Typography>

      <Edit title=" " {...props}>
        <SimpleForm>
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

          <RichTextInput
            variant="outlined"
            validate={required()}
            source="cashbackRate"
            fullWidth
          />
          <RichTextInput
            variant="outlined"
            validate={required()}
            source="offerDetails"
            fullWidth
          />

          <RichTextInput
            variant="outlined"
            validate={required()}
            source="cashbackTerms"
            fullWidth
          />
          <BooleanInput source="isActive" />
        </SimpleForm>
      </Edit>
    </div>
  );
};
