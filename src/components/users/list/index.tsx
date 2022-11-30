import { Typography } from "@material-ui/core";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ShowButton,
  TextInput,
  ImageField,
} from "react-admin";

import "../../../styles/list.css";
import { PostPagination } from "../../../utils/pagination/index";

const filters = [
  <TextInput
    className="search_form"
    source="q"
    variant="outlined"
    label="Search By Name"
    alwaysOn
    resettable
  />,
];

const Users = (props: any) => {
  return (
    <div className="list_wapper">
      <Typography className="List_header" variant="h5">
        {" "}
        Users
      </Typography>

      <List
        title={"Users"}
        {...props}
        filters={filters}
        pagination={<PostPagination limit={null} />}
      >
        <Datagrid
          rowClick="edit"
          empty={
            <Typography className="empty_text" variant="h6">
              No Users !!
            </Typography>
          }
        >
          <ImageField
            sx={{
              "& img": { maxWidth: 50, maxHeight: 60, objectFit: "cover" },
            }}
            source="image"
            title="name"
          />
          <TextField source="name" />

          <TextField source="commissionSumPend" label="Pending Commission " />
          <TextField
            source="commissionSumApproved"
            label="Approved Commission"
          />
          <TextField source="salesAmountSumPend" label="Pending Sales" />
          <TextField source="salesAmountSumApproved" label="Approved Sales " />
          <TextField source="commissionAmountSum" label="Total Commission" />
          <TextField source="salesAmountSum" label="Total Sales" />
          <EditButton />
          <ShowButton />
        </Datagrid>
      </List>
    </div>
  );
};

export default Users;
