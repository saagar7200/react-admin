import { Box } from "@material-ui/core";
import {
  required,
  Edit,
  SimpleForm,
  TextInput,
  number,
  ReferenceInput,
  AutocompleteInput,
  useResourceContext,
} from "react-admin";

import "../../../styles/edit.css";
import Title from "../../../utils/title/Title";

const validateNumber = [required("Max value is required."), number()];

export const EditReward = (props: any) => {
  const resource = useResourceContext();

  return (
    <div className="edit_container">
      <Title title="Edit a Reward" resource={resource} />

      <Edit title=" " {...props}>
        <SimpleForm mode="onBlur" reValidateMode="onBlur">
          <Box className="offer_form_wrapper">
            <TextInput
              className="textInput"
              variant="outlined"
              label="Reward Name"
              validate={required("Reward Name is required.")}
              source="rewardName"
            />
            <ReferenceInput
              variant="outlined"
              source="type"
              reference="gift/type"
              recordRepresentation="name"
            >
              <AutocompleteInput
                variant="outlined"
                validate={required("Type is required.")}
                label="Type"
                optionText="type"
                optionValue="type"
              />
            </ReferenceInput>
          </Box>
          <Box className="offer_form_wrapper">
            <ReferenceInput
              variant="outlined"
              source="provider"
              reference="gift/provider"
              recordRepresentation="name"
            >
              <AutocompleteInput
                variant="outlined"
                validate={required("Provider is required.")}
                label="Provider"
                optionText="provider"
                optionValue="provider"
              />
            </ReferenceInput>

            <TextInput
              className="textInput"
              variant="outlined"
              label="Max Value"
              source="maxValue"
              validate={validateNumber}
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
            <TextInput variant="outlined" label="ETID" source="etId" />
          </Box>

          <TextInput
            variant="outlined"
            label="Image URL"
            source="image.src"
            validate={required("Image is required.")}
            fullWidth
          />
        </SimpleForm>
      </Edit>
    </div>
  );
};
