import { Typography } from "@material-ui/core";
import { List, Datagrid, TextField, TextInput } from "react-admin";
import { PostPagination } from "../../../utils/pagination";

import "../ledger.css";

const filters = [
  <TextInput
    className="search_form"
    source="q"
    variant="outlined"
    label="Search"
    alwaysOn
  />,
];

const Ledger = (props: any) => {
  return (
    <div className="list_wapper">
      <Typography className="List_header" variant="h5">
        {" "}
        Ledger
      </Typography>

      <List
        title={"Ledgers"}
        {...props}
        filters={filters}
        pagination={<PostPagination limit={null} />}
      >
        <Datagrid
          empty={
            <Typography className="empty_text" variant="h6">
              Ledger data not available !!
            </Typography>
          }
          bulkActionButtons={false}
        >
          <TextField source="transactionType" />
          <TextField source="rewardPoint" />
          <TextField source="network" />
          <TextField source="amount" />
        </Datagrid>
      </List>
    </div>
  );
};

export default Ledger;