import { useState } from "react";
import { Box, Typography } from "@material-ui/core";
import {
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
  SelectInput,
} from "react-admin";
import "../../../styles/edit.css";
import { validateDeal } from "../validaton/index";

export const EditDealSuggestion = (props: any) => {
  const [isOffer, setIsOffer] = useState(false);

  const handlechange = (e: any) => {
    if (e.target.value === "offer") {
      return setIsOffer((prev) => true);
    }

    setIsOffer(false);
  };

  return (
    <div className="edit_container">
      <Typography className="form_heading" variant="h5">
        Edit a Deal Suggestion
      </Typography>
      <Edit title=" " {...props}>
        <SimpleForm
          mode="onBlur"
          reValidateMode="onBlur"
          validate={validateDeal}
        >
          <Box className="offer_form_wrapper">
            <SelectInput
              source="type"
              variant="outlined"
              label="Deal Type"
              choices={[
                { id: "coupon", name: "coupon" },
                { id: "offer", name: "offer" },
              ]}
              onChange={handlechange}
            />
            <TextInput
              variant="outlined"
              source="coupon"
              label="Coupon Code"
              style={{ width: "100%" }}
              defaultValue="-"
            />
          </Box>

          <ReferenceInput
            variant="outlined"
            source="offerId"
            reference="offers"
            recordRepresentation="name"
          >
            <AutocompleteInput
              variant="outlined"
              label="Deal Offer"
              fullWidth
            />
          </ReferenceInput>

          <Box className="offer_form_wrapper">
            {/* <ImageInput className="textInput" source="image" label="Image">
              <ImageField source="src" title="title" />
            </ImageInput> */}
            <TextInput
              variant="outlined"
              source="image"
              label="Image URL"
              onChange={handlechange}
            />
            {/* <div className="textInput"></div> */}
          </Box>
        </SimpleForm>
      </Edit>
    </div>
  );
};
