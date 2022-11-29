import { Box, Typography } from "@material-ui/core";
import {
  required,
  Edit,
  SimpleForm,
  ImageInput,
  ImageField,
  AutocompleteInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  useEditContext,
} from "react-admin";
import "../../../styles/edit.css";
import { useState } from "react";

export const EditDeal = (props: any) => {
  const [type, setType] = useState("");

  const handleSelect = (e: any) => {
    e.preventDefault();
    setType(e.target.value);
  };

  const transform = (data: any) => {
    if (data.type === "offer")
      return {
        ...data,
        categoryId: null,
        subCategoryId: null,
        subCategory: null,
        category: null,
      };
    if (data.type === "category")
      return {
        ...data,
        offerId: null,
        subCategoryId: null,
        offer: null,
        subCategory: null,
      };
    if (data.type === "subCategory")
      return {
        ...data,
        offerId: null,
        categoryId: null,
        offer: null,
        category: null,
      };
  };

  const ShowInput = () => {
    const { record } = useEditContext();
    setType(type || record?.type);
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
    if (type === "category") {
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
    }

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
  };

  return (
    <div>
      <Typography className="form_heading" variant="h5">
        Edit deal
      </Typography>

      <Edit title=" " {...props} transform={transform}>
        <SimpleForm>
          <Box className="offer_form_wrapper">
            <ReferenceInput
              variant="outlined"
              source="type"
              reference="carousel/type"
              recordRepresentation="name"
            >
              <SelectInput
                variant="outlined"
                validate={required()}
                label=" Deal Type"
                optionText="type"
                source="type"
                optionValue="type"
                onChange={handleSelect}
                defaultValue="sub-category"
                fullWidth
              />
            </ReferenceInput>

            {type !== " " ? (
              <ShowInput />
            ) : (
              <ReferenceInput
                variant="outlined"
                source="subCategoryId"
                reference="sub-categories"
                recordRepresentation="name"
              >
                <AutocompleteInput variant="outlined" label="Sub Category" />
              </ReferenceInput>
            )}
          </Box>

          <Box className="offer_form_wrapper">
            <ImageInput className="textInput" source="image" label="Image">
              <>
                <ImageField source="src" title="carousel" />
                <ImageField source="imageUrl" />
              </>
            </ImageInput>
            <NumberInput
              className="margin-top"
              variant="outlined"
              validate={required()}
              label="Priority"
              source="priority"
              min={0}
            />
          </Box>
        </SimpleForm>
      </Edit>
    </div>
  );
};
