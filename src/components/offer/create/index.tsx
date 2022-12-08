import React, { useContext, useState } from "react";
import { Box, Typography, Button } from "@material-ui/core";
import { RichTextInput } from "ra-input-rich-text";
import "../offer.css";
import {
  Create,
  required,
  SimpleForm,
  TextInput,
  ImageInput,
  ImageField,
  BooleanInput,
  ReferenceInput,
  AutocompleteInput,
  ReferenceArrayInput,
  AutocompleteArrayInput,
  DataProviderContext,
  useRefresh,
  number,
  useNotify,
} from "react-admin";

const choices: { id: string; name: string }[] = [
  { id: "inr", name: "inr" },
  { id: "cuelink", name: "cuelink" },
];

export const CreateOffer = (props: any) => {
  const [filledData, setFilledData] = useState({
    trackingTime: "12-24",
    verificationTime: "12",
    cashbackPercent: "10",
    cashbackDays: "10",
  });
  const [isUsableDiscount, setIsUsableDiscount] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isAppTracking, setIsAppTracking] = useState(false);
  const [isTermUpdated, setIsTermUpdated] = useState(false);
  const [cashbackTerms, setTerms] = useState("");
  const dataProvider = useContext(DataProviderContext);

  const notify = useNotify();
  const refresh = useRefresh();

  //handle input change for term generation
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerms("");
    setFilledData((filledData: any) => ({
      ...filledData,
      [e.target.name]: e.target.value,
    }));
  };

  //click handling
  const handleAppTracking = () => {
    setIsAppTracking((prev) => !prev);
  };
  const handleDiscount = () => {
    setIsUsableDiscount((prev) => !prev);
  };

  //generating terms

  const handleGenerate = () => {
    setIsTermUpdated(false);
    setTerms("");

    if (!filledData.trackingTime) {
      return notify("Tracking time required.", { type: "error" });
    }
    if (!filledData.verificationTime) {
      return notify("Verification time required.", { type: "error" });
    }
    if (!filledData.cashbackPercent) {
      return notify("Cashback Rate required.", { type: "error" });
    }
    if (!filledData.cashbackDays) {
      return notify("Cashback Days required.", { type: "error" });
    }
    setLoading(true);

    dataProvider
      .create(`offers/terms`, {
        data: { ...filledData, isUsableDiscount, isAppTracking },
      })
      .then(({ data }) => {
        setTerms(data.data);
        setLoading(false);
        setIsTermUpdated(true);
        refresh();
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  const transform = (data: any) => ({
    ...data,
    cashbackTerms: data.cashbackTerms || cashbackTerms,
  });

  return (
    <div className="create_category_container">
      <Typography className="form_heading" variant="h5">
        Create a offer
      </Typography>

      <Create title=" " {...props} redirect="list" transform={transform}>
        <SimpleForm>
          <Box className="offer_form_wrapper">
            <ReferenceInput
              variant="outlined"
              source="subCategoryId"
              reference="sub-categories"
              recordRepresentation="name"
            >
              <AutocompleteInput
                variant="outlined"
                validate={required()}
                label="Sub Category"
              />
            </ReferenceInput>

            <TextInput
              variant="outlined"
              validate={required()}
              label="Offer Title"
              source="title"
            />
          </Box>
          <Box className="offer_form_wrapper">
            <TextInput
              variant="outlined"
              validate={[required(), number()]}
              source="profit"
            />
            <TextInput
              variant="outlined"
              validate={required()}
              source="baseReferalLink"
              label="Base Referal Link"
            />
          </Box>
          <Box className="offer_form_wrapper">
            <TextInput
              variant="outlined"
              validate={[required(), number()]}
              source="rating"
            />

            <AutocompleteInput
              source="network"
              validate={required()}
              variant="outlined"
              choices={choices}
            />
          </Box>
          <Box className="offer_form_wrapper">
            <TextInput
              variant="outlined"
              validate={required()}
              source="subTitle"
              label="Subtitle"
            />
            <TextInput
              variant="outlined"
              validate={required()}
              source="merchantName"
            />
          </Box>
          <Box className="offer_form_wrapper">
            <ReferenceArrayInput
              variant="outlined"
              source="tags"
              reference="offers/tags"
            >
              <AutocompleteArrayInput
                variant="outlined"
                optionText="tag"
                optionValue="tag"
                label="Tags"
              />
            </ReferenceArrayInput>

            <TextInput
              type="color"
              variant="outlined"
              source="color"
              label="Color"
              id="colorInput"
            />
          </Box>
          <TextInput
            className="textInput"
            variant="outlined"
            validate={required()}
            multiline
            source="description"
          />

          <Box className="offer_form_wrapper">
            <ImageInput className="textInput" source="image" label="Image">
              <ImageField source="src" title="title" />
            </ImageInput>
            <ImageInput className="textInput" source="icon" label="Icon">
              <ImageField source="src" title="title" />
            </ImageInput>
          </Box>

          <Box className="generate_cashback_trem_wrapper">
            <fieldset>
              <legend>Generate Cashback Terms</legend>
              <Box className="offer_form_wrapper">
                <TextInput
                  className={`textInput `}
                  placeholder="trackingTime"
                  variant="outlined"
                  source="trackingTime"
                  label="Tracking Time"
                  defaultValue={filledData?.trackingTime}
                  onChange={handleChange}
                />

                <TextInput
                  className="textInput"
                  label="Verification Time"
                  variant="outlined"
                  source="verificationTime"
                  onChange={handleChange}
                  defaultValue={filledData?.verificationTime}
                />
              </Box>
              <Box className="offer_form_wrapper">
                <TextInput
                  className="textInput"
                  label="Cashback Days"
                  variant="outlined"
                  source="cashbackDays"
                  onChange={handleChange}
                  defaultValue={filledData?.cashbackDays}
                />
                <TextInput
                  className="textInput"
                  variant="outlined"
                  label="Cashback Rate"
                  source="cashbackPercent"
                  onChange={handleChange}
                  defaultValue={filledData?.cashbackPercent}
                />
              </Box>
              <Box className="term_bool_wrapper ">
                <BooleanInput
                  source="isAppTracking"
                  label="App Tracking."
                  className="term_bool_input"
                  onClick={handleAppTracking}
                />
                <BooleanInput
                  source="isUsableDiscount"
                  onClick={handleDiscount}
                  className="term_bool_input"
                  label="Do not use discount."
                />

                <Button
                  variant="contained"
                  className="generate_button"
                  disableElevation
                  onClick={handleGenerate}
                  disabled={loading}
                >
                  Generate
                </Button>
              </Box>
            </fieldset>
          </Box>
          <RichTextInput variant="outlined" source="cashbackRate" fullWidth />

          {!loading && isTermUpdated ? (
            <RichTextInput
              variant="outlined"
              source="cashbackTerms"
              defaultValue={cashbackTerms}
              format={(v) => {
                return cashbackTerms;
              }}
              fullWidth
            />
          ) : (
            ""
          )}
          <RichTextInput variant="outlined" source="offerDetails" fullWidth />

          <BooleanInput source="isActive" />
        </SimpleForm>
      </Create>
    </div>
  );
};
