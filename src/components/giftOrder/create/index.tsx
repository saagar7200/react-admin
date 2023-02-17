import { Box } from "@material-ui/core";
import "../../../styles/create.css";
import Title from "../../../utils/title/Title";
import {
  Create,
  required,
  SimpleForm,
  TextInput,
  AutocompleteInput,
  number,
  useResourceContext,
} from "react-admin";

export const CreateGiftOrder = (props: any) => {
  const choices: { id: string; name: string }[] = [
    { id: "complete", name: "COMPLETE" },
    { id: "pending", name: "PENDING" },
  ];

  const resource = useResourceContext();
  return (
    <div className="create_category_container">
      <Title title="Create a Gift Order" resource={resource} />

      <Create title=" " {...props} redirect="list">
        <SimpleForm mode="onBlur" reValidateMode="onBlur">
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
              validate={[required(), number()]}
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
