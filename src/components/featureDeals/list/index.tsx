import { Typography } from "@material-ui/core";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ImageField,
  ReferenceField,
  ReferenceInput,
  AutocompleteInput,
  useListController,
  Loading,
  WrapperField,
} from "react-admin";
import { Empty } from "../../empty/Empty";

import "../../../styles/list.css";
import { PostPagination } from "../../../utils/pagination/index";

const filters = [
  <ReferenceInput source="type" reference="carousel/type" alwaysOn>
    <AutocompleteInput
      className="select-search"
      variant="outlined"
      label="Filter By Deal Type"
      optionText="type"
      optionValue="type"
      fullWidth
      alwaysOn
    />
  </ReferenceInput>,
];

export const FeatureDeals = (props: any) => {
  const { isLoading } = useListController();

  if (isLoading) return <Loading loadingSecondary="" />;

  return (
    <div className="list_wapper">
      <Typography className="List_header" variant="h5">
        Feature Deals
      </Typography>

      <List
        {...props}
        emptyWhileLoading
        filters={filters}
        pagination={<PostPagination limit={null} />}
      >
        <Datagrid rowClick="edit" empty={<Empty label="Carousel" />}>
          <ImageField
            className="imgaes"
            source="imageUrl"
            title="carousel"
            label="Image"
            sx={{
              "& img": { maxWidth: 50, maxHeight: 60, objectFit: "cover" },
            }}
          />
          <TextField source="type" />
          <ReferenceField
            label="Offer"
            source="offerId"
            reference="offers"
            emptyText="━"
          />
          <ReferenceField
            label="Category"
            source="categoryId"
            reference="categories"
            emptyText="━"
          />
          <ReferenceField
            label="Sub Category"
            source="subCategoryId"
            reference="sub-categories"
            emptyText="━"
          />
          <TextField source="priority" />
          <WrapperField label="Action">
            <EditButton label="" />
          </WrapperField>
        </Datagrid>
      </List>
    </div>
  );
};
