import { Typography } from "@material-ui/core";
import {
  List,
  Datagrid,
  DateField,
  TextField,
  EditButton,
  TextInput,
} from "react-admin";

import "../../list/list.css";

const filters = [
  <TextInput
    className="search_form"
    source="q"
    variant="outlined"
    label="Search"
    alwaysOn
  />,
];

const Transactions = (props: any) => {
  return (
    <div className="list_wapper">
      <Typography className="List_header" variant="h5">
        {" "}
        Transaction
      </Typography>

      <List title={"Transaction"} {...props} filters={filters}>
        <Datagrid rowClick="edit">
          <TextField source="storeName" />
          <TextField source="saleAmount" />
          <TextField source="commission" />
          <DateField source="date" />
          <TextField source="status" />
          <EditButton />
        </Datagrid>
      </List>
    </div>
  );
};

export default Transactions;
