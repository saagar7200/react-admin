import { Typography } from "@material-ui/core";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ImageField,
  TextInput,
  EmailField,
  ChipField,
  Loading,
  useListController,
} from "react-admin";
import { Empty } from "../../empty/Empty";

import "../../../styles/list.css";
import { PostPagination } from "../../../utils/pagination/index";

const filters = [
  <TextInput
    className="search_form"
    source="q"
    variant="outlined"
    label="Search By Reward Name"
    alwaysOn
    resettable
  />,
];
export const GiftOrder = (props: any) => {
  const { isLoading } = useListController();

  if (isLoading) return <Loading loadingSecondary="" />;

  return (
    <div className="list_wapper">
      <Typography className="List_header" variant="h5">
        {" "}
        Gift Orders
      </Typography>
      <List
        {...props}
        emptyWhileLoading
        filters={filters}
        pagination={<PostPagination limit={null} />}
      >
        <Datagrid rowClick="edit" empty={<Empty label="Gift Order" />}>
          <ImageField
            className="imgaes"
            source="image"
            title="rewardName"
            label="Image"
            sx={{
              "& img": { maxWidth: 50, maxHeight: 60, objectFit: "cover" },
            }}
          />
          <EmailField label="User Email" source="userEmail" emptyText="━" />
          <TextField label="Reward Name" source="rewardName" emptyText="━" />
          <TextField label="Amount" source="amount" emptyText="━" />
          <ChipField source="status" emptyText="━" />
          <TextField
            label="External Ref ID"
            source="externalRefId"
            emptyText="━"
          />
          <TextField
            label="Reference order ID "
            source="referenceOrderId"
            emptyText="━"
          />
          <TextField label="UTID" source="utId" emptyText="━" />
          <TextField label="ENID" source="enId" emptyText="━" />

          <EditButton />
        </Datagrid>
      </List>
    </div>
  );
};
