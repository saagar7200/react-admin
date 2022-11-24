import { Box, Typography } from "@material-ui/core";
import {
  Create,
  required,
  SimpleForm,
  ImageInput,
  ImageField,
  AutocompleteInput,
  NumberInput,
  ReferenceInput,
} from "react-admin";

const choices: { id: string; name: string }[] = [
  { id: "offer", name: "Offer" },
  { id: "jackpot", name: "Jackpot" },
];

export const CreateDeals = (props: any) => {
  return (
    <div className="create_category_container">
      <Typography className="form_heading" variant="h5">
        Create a deal
      </Typography>

      <Create title=" " {...props} redirect="list">
        <SimpleForm>
          <Box className="offer_form_wrapper">
            <AutocompleteInput
              source="type"
              validate={required()}
              variant="outlined"
              choices={choices}
            />
            <ReferenceInput
              variant="outlined"
              source="offerId"
              reference="offers"
              recordRepresentation="name"
            >
              <AutocompleteInput variant="outlined" label="Deal Offer" />
            </ReferenceInput>
          </Box>

          <Box className="offer_form_wrapper">
            <ImageInput className="textInput" source="image" label="Image">
              <ImageField source="src" title="carousel" />
            </ImageInput>
            <NumberInput
              variant="outlined"
              validate={required()}
              label="Priority"
              source="priority"
            />
          </Box>
        </SimpleForm>
      </Create>
    </div>
  );
};
