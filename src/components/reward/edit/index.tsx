import { Box, Typography } from "@material-ui/core";
import { required, Edit, SimpleForm, TextInput, number } from "react-admin";

import "../../../styles/edit.css";

const validateNumber = [required(), number()];

export const EditReward = (props: any) => {
  return (
    <div className="edit_container">
      <Typography className="form_heading" variant="h5">
        Edit a Reward
      </Typography>
      <Edit title=" " {...props}>
        <SimpleForm>
          <Box className="offer_form_wrapper">
            <TextInput
              className="textInput"
              variant="outlined"
              label="Reward Name"
              validate={required()}
              source="rewardName"
            />
            <TextInput
              className="textInput"
              variant="outlined"
              label="Type"
              validate={required()}
              source="type"
            />
          </Box>
          <Box className="offer_form_wrapper">
            <TextInput
              className="textInput"
              variant="outlined"
              label="Provider"
              validate={required()}
              source="provider"
            />
            <TextInput
              variant="outlined"
              validate={validateNumber}
              label="Amount"
              source="amount"
            />
          </Box>
          <Box className="offer_form_wrapper">
            <TextInput
              className="textInput"
              variant="outlined"
              label="Face Value"
              source="faceValue"
              validate={number()}
            />
            <TextInput
              className="textInput"
              variant="outlined"
              label="Max Value"
              validate={validateNumber}
              source="maxValue"
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
      </Edit>
    </div>
  );
};
