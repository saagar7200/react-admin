import { Typography } from "@material-ui/core";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ImageField,
  TextInput,
  ReferenceField,
} from "react-admin";
import { Empty } from "../../empty/Empty";

import "../../../styles/list.css";
import { PostPagination } from "../../../utils/pagination/index";

const filters = [
  <TextInput
    className="search_form"
    source="q"
    variant="outlined"
    label="Search By Type"
    alwaysOn
  />,
];

export const FeatureDeals = (props: any) => {
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
          <TextField source="priority" />
          <EditButton />
        </Datagrid>
      </List>
    </div>
  );
};
