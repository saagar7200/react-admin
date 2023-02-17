import { Box } from "@material-ui/core";
import { FC, useState } from "react";

import { validateDeal } from "../validaton/index";
import Title from "../../../utils/title/Title";
import {
  Create,
  SimpleForm,
  TextInput,
  ImageInput,
  ImageField,
  ReferenceInput,
  AutocompleteInput,
  SelectInput,
  useNotify,
  useResourceContext,
} from "react-admin";

export const CreateDealSuggestion: FC = (props: any) => {
  const [isOffer, setIsOffer] = useState(false);

  const notify = useNotify();
  const resource = useResourceContext();

  const onError = (error: any) => {
    notify(`Could not create deal suggestion: ${error.message}`);
  };

  const handlechange = (e: any) => {
    if (e.target.value === "offer") {
      return setIsOffer((prev) => true);
    }

    setIsOffer(false);
  };

  const transform = (data: any) => {
    if (data.type === "offer") {
      return { ...data, coupon: null };
    }

    return { ...data, offerId: null, offer: null };
  };

  return (
    <div className="create_category_container">
      <Title title="Create a Deal Suggestion" resource={resource} />

      <Create
        title=" "
        mutationOptions={{ onError }}
        transform={transform}
        redirect="list"
      >
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
            <ImageInput className="textInput" source="image" label="Image">
              <ImageField source="src" title="title" />
            </ImageInput>
            <div className="textInput"></div>
          </Box>
        </SimpleForm>
      </Create>
    </div>
  );
};
