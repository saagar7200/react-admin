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
  useNotify,
} from "react-admin";
import "../../../styles/edit.css";
import { useState } from "react";

const ShowInput = (props: any) => {
  const { record } = useEditContext();
  const { type } = props;
  props.setType(type || record?.type);
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

export const EditDeal = (props: any) => {
  const [type, setType] = useState("");
  const notify = useNotify();

  const onError = (error: any) => {
    notify(`Could not edit deal: ${error.message}`, { type: "error" });
  };

  const handleSelect = (e: any) => {
    e.preventDefault();
    setType(e.target.value);
  };

  const transform = (data: any) => {
    let { image, icon, ...others } = data;
    if (data.image.rawFile) {
      others.image = image;
      others.imageUrl = null;
    } else {
      others.imageUrl = data.image.src;
    }

    if (data.type === "offer")
      return {
        ...others,
        categoryId: null,
        subCategoryId: null,
        subCategory: null,
        category: null,
      };
    if (data.type === "category")
      return {
        ...others,
        offerId: null,
        subCategoryId: null,
        offer: null,
        subCategory: null,
      };
    if (data.type === "subCategory")
      return {
        ...others,
        offerId: null,
        categoryId: null,
        offer: null,
        category: null,
      };
  };

  return (
    <div>
      <Typography className="form_heading" variant="h5">
        Edit deal
      </Typography>

      <Edit
        title=" "
        {...props}
        transform={transform}
        redirect="list"
        mutationOptions={{ onError }}
      >
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
                defaultValue="category"
                fullWidth
              />
            </ReferenceInput>

            {type !== " " ? (
              <ShowInput type={type} setType={setType} />
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
