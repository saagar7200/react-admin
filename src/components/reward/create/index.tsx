import { Box, Typography } from "@material-ui/core";
import "../../../styles/create.css";
import { Create, required, SimpleForm, TextInput, number } from "react-admin";

const validateNumber = [required(), number()];

export const CreateReward = (props: any) => {
  return (
    <div className="create_category_container">
      <Typography className="form_heading" variant="h5">
        Create a Reward
      </Typography>

      <Create title=" " {...props} redirect="list">
        <SimpleForm mode="onBlur" reValidateMode="onBlur">
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
              source="maxValue"
              validate={validateNumber}
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
