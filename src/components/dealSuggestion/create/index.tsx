import { Box, Typography } from "@material-ui/core";
import { FC, useState } from "react";

import { validateDeal } from "../validaton/index";
import {
  Create,
  SimpleForm,
  TextInput,
  // ImageInput,
  // ImageField,
  ReferenceInput,
  AutocompleteInput,
  SelectInput,
} from "react-admin";

export const CreateDealSuggestion: FC = (props: any) => {
  const [isOffer, setIsOffer] = useState(false);

  const handlechange = (e: any) => {
    if (e.target.value === "offer") {
      return setIsOffer((prev) => true);
    }

    setIsOffer(false);
  };

  return (
    <div className="create_category_container">
      <Typography className="form_heading" variant="h5">
        Create a Deal Suggestion
      </Typography>

      <Create title=" " redirect="list">
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
              defaultValue="coupon"
            />

            {isOffer ? (
              <ReferenceInput
                variant="outlined"
                source="offerId"
                reference="offers"
                recordRepresentation="name"
              >
                <AutocompleteInput variant="outlined" label="Deal Offer" />
              </ReferenceInput>
            ) : (
              <TextInput
                variant="outlined"
                source="coupon"
                label="Coupon Code"
                style={{ width: "100%" }}
              />
            )}
          </Box>

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
      </Create>
    </div>
  );
};