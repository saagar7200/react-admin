import { Box, Typography } from "@material-ui/core";
import { useState } from "react";
import { validate } from "../validaton/index";
import {
  Create,
  required,
  SimpleForm,
  ImageInput,
  ImageField,
  AutocompleteInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  useNotify,
  useRedirect,
  useRefresh,
} from "react-admin";

export const CreateDeals = (props: any) => {
  const [type, setType] = useState("");
  const notify = useNotify();
  const redirect = useRedirect();
  const refresh = useRefresh();
  const handleSelect = (e: any) => {
    setType(e.target.value);
  };

  const onError = (error: any) => {
    notify(`Could not create deal: ${error.message}`, { type: "error" });
  };
  const onSuccess = (data: any) => {
    notify(`Deal Created.`, { type: "success" });
    refresh();
    redirect(`/carousel`);
  };

  const transform = (data: any) => {
    if (data.type === "offer")
      return { ...data, categoryId: null, subCategoryId: null };
    if (data.type === "category")
      return { ...data, offerId: null, subCategoryId: null };
    if (data.type === "subCategory")
      return { ...data, offerId: null, categoryId: null };
  };

  const showInput = () => {
    if (type === "offer") {
      return (
        <ReferenceInput
          variant="outlined"
          source="offerId"
          reference="offers"
          recordRepresentation="name"
        >
          <AutocompleteInput variant="outlined" label="Deal Offer" />
        </ReferenceInput>
      );
    }
    if (type === "subCategory") {
      return (
        <ReferenceInput
          variant="outlined"
          source="subCategoryId"
          reference="sub-categories"
          recordRepresentation="name"
        >
          <AutocompleteInput variant="outlined" label="Sub Category" />
        </ReferenceInput>
      );
    }
    return (
      <ReferenceInput
        variant="outlined"
        source="categoryId"
        reference="categories"
        recordRepresentation="name"
      >
        <AutocompleteInput variant="outlined" label="Category" />
      </ReferenceInput>
    );
  };

  return (
    <div className="create_category_container">
      <Typography className="form_heading" variant="h5">
        Create a deal
      </Typography>

      <Create
        title=" "
        {...props}
        redirect="list"
        mutationOptions={{ onError, onSuccess }}
        transform={transform}
      >
        <SimpleForm validate={validate} mode="onBlur" reValidateMode="onBlur">
          <Box className="offer_form_wrapper">
            <ReferenceInput
              variant="outlined"
              source="type"
              reference="carousel/type"
            >
              <SelectInput
                variant="outlined"
                validate={required()}
                label=" Deal Type"
                optionText="type"
                source="type"
                optionValue="type"
                onChange={handleSelect}
                defaultValue="category"
                fullWidth
              />
            </ReferenceInput>

            {showInput()}
          </Box>
          <Box className="offer_form_wrapper">
            <ImageInput className="textInput" source="image" label="Image">
              <ImageField source="src" title="carousel" />
            </ImageInput>
            <NumberInput
              className="margin-top"
              variant="outlined"
              label="Priority"
              source="priority"
              min={0}
            />
          </Box>
        </SimpleForm>
      </Create>
    </div>
  );
};
