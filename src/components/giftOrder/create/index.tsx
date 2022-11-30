import { Box, Typography } from "@material-ui/core";
import "../../../styles/create.css";
import {
  Create,
  required,
  SimpleForm,
  TextInput,
  AutocompleteInput,
} from "react-admin";

export const CreateGiftOrder = (props: any) => {
  const choices: { id: string; name: string }[] = [
    { id: "complete", name: "COMPLETE" },
    { id: "pending", name: "PENDING" },
  ];

  return (
    <div className="create_category_container">
      <Typography className="form_heading" variant="h5">
        Create a Gift Order
      </Typography>

      <Create title=" " {...props} redirect="list">
        <SimpleForm>
          <Box className="offer_form_wrapper">
            <AutocompleteInput
              className="textInput"
              source="status"
              label="Order status"
              variant="outlined"
              optionValue="name"
              choices={choices}
              validate={required()}
            />
            <TextInput
              className="textInput"
              variant="outlined"
              label="Reward Name"
              validate={required()}
              source="rewardName"
            />
          </Box>
          <Box className="offer_form_wrapper">
            <TextInput
              className="textInput"
              variant="outlined"
              label="User email"
              validate={required()}
              source="userEmail"
            />
            <TextInput
              variant="outlined"
              validate={required()}
              label="Amount"
              source="amount"
            />
          </Box>
          <Box className="offer_form_wrapper">
            <TextInput
              className="textInput"
              variant="outlined"
              label="External Reference ID"
              validate={required()}
              source="externalRefId"
            />
            <TextInput
              className="textInput"
              variant="outlined"
              label="UTID"
              source="utId"
            />
          </Box>

          <Box className="offer_form_wrapper">
            <TextInput
              className="textInput"
              variant="outlined"
              label="ENID"
              source="enId"
            />

            <TextInput
              className="textInput"
              variant="outlined"
              label="Reference order ID"
              source="referenceOrderId"
            />
          </Box>
          <TextInput
            variant="outlined"
            label="Image URL"
            source="image"
            validate={required()}
            fullWidth
          />
        </SimpleForm>
      </Create>
    </div>
  );
};
