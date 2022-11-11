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
import { validateOffer } from "../../../inputValidation/validateOffer";


const choices: { id: string; name: string }[] = [
  { id: "INR", name: "INR" },
  { id: "cuelink", name: "Cuelink" },
];


export const EditOffer = (props: any) => {
  return (
    <div>
      <Typography className="form_heading" variant="h5">
        Edit Offer
      </Typography>

      <Edit title=" " {...props}>
      <SimpleForm validate={validateOffer}>
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
            {/* <TextInput
              variant="outlined"
              validate={required()}
              source="network"
            /> */}


            <AutocompleteInput
              source="network"
              validate={required()}
              variant="outlined"
              choices={choices}
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
              <ImageField source="imageUrl" title="title" />
            </ImageInput>
            <div className="textInput"></div>
          </Box>
            <BooleanInput source="isActive" />

        </SimpleForm>
      </Edit>
    </div>
  );
};
