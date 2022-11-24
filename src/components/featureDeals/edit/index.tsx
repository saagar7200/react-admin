import { Box, Typography } from "@material-ui/core";
import {
  required,
  Edit,
  SimpleForm,
  ImageInput,
  ImageField,
  AutocompleteInput,
  NumberInput,
} from "react-admin";
import "../../../styles/edit.css";

const choices: { id: string; name: string }[] = [
  { id: "offer", name: "Offer" },
  { id: "jackpot", name: "Jackpot" },
];

export const EditDeal = (props: any) => {
  return (
    <div>
      <Typography className="form_heading" variant="h5">
        Edit deal
      </Typography>

      <Edit title=" " {...props}>
        <SimpleForm>
          <Box className="offer_form_wrapper">
            <AutocompleteInput
              source="type"
              validate={required()}
              variant="outlined"
              choices={choices}
            />
            <NumberInput
              variant="outlined"
              validate={required()}
              label="Priority"
              source="priority"
            />
          </Box>

          <Box className="offer_form_wrapper">
            <ImageInput className="textInput" source="image" label="Image">
              <>
                <ImageField source="src" title="carousel" />
                <ImageField source="imageUrl" />
              </>
            </ImageInput>
            <div className="textInput"></div>
          </Box>
        </SimpleForm>
      </Edit>
    </div>
  );
};
