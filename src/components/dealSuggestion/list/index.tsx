import { Typography } from "@material-ui/core";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ImageField,
  ReferenceField,
  AutocompleteInput,
  useListController,
  Loading,
} from "react-admin";
import { Empty } from "../../empty/Empty";

import "../../../styles/list.css";
import { PostPagination } from "../../../utils/pagination/index";

const filters = [
  <AutocompleteInput
    className="search_form"
    source="q"
    variant="outlined"
    label="Search By Type"
    alwaysOn
    choices={[
      { id: "offer", name: "offer" },
      { id: "coupon", name: "coupon" },
    ]}
  />,
];
export const DealSuggestion = (props: any) => {
  const { isLoading } = useListController();

  if (isLoading) return <Loading loadingSecondary="" />;

  return (
    <div className="list_wapper">
      <Typography className="List_header" variant="h5">
        {" "}
        Deal Suggestions
      </Typography>
      <List
        {...props}
        emptyWhileLoading
        filters={filters}
        pagination={<PostPagination limit={null} />}
      >
        <Datagrid rowClick="edit" empty={<Empty label="Deal Suggestions" />}>
          <ImageField
            className="imgaes"
            source="image"
            title="type"
            label="Image"
            sx={{
              "& img": { maxWidth: 50, maxHeight: 60, objectFit: "cover" },
            }}
          />
          <TextField source="type" emptyText="━" />
          <ReferenceField
            label="Offer"
            source="offerId"
            reference="offers"
            emptyText="━"
          />

          <TextField source="coupon" emptyText="━" />

          <EditButton />
        </Datagrid>
      </List>
    </div>
  );
};
