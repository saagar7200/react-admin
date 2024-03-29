import { Typography } from "@material-ui/core";
import {
  List,
  Datagrid,
  TextField,
  TextInput,
  AutocompleteInput,
  Loading,
  useListController,
  FunctionField,
} from "react-admin";
import { PostPagination } from "../../../utils/pagination";

import "../ledger.css";

const filters = [
  <TextInput
    className="search_form"
    source="q"
    variant="outlined"
    label="Search By User Name"
    alwaysOn
    resettable
  />,
  <AutocompleteInput
    source="network"
    variant="outlined"
    className="network-search-form"
    label="Search By Network"
    alwaysOn
    choices={[
      { id: "inr", name: "inr" },
      { id: "cuelink", name: "cuelink" },
    ]}
  />,
];

const Ledger = (props: any) => {
  const { isLoading } = useListController();

  if (isLoading) return <Loading loadingSecondary="" />;

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
        {isLoading ? (
          <Loading loadingSecondary="" />
        ) : (
          <Datagrid
            empty={
              <Typography className="empty_text" variant="h6">
                Ledger data not available !!
              </Typography>
            }
            bulkActionButtons={false}
          >
            <FunctionField
              label="User"
              sortBy={`${"name" || "email"}`}
              render={(record: any) =>
                `${
                  record.user.name
                    ? record.user.name
                    : record.user.email
                    ? record.user.email
                    : record.user.phone
                    ? record.user.phone
                    : record.userId
                } `
              }
            />
            <TextField source="transactionType" emptyText="━" />
            <TextField source="network" emptyText="━" />
            <TextField source="rewardPoint" emptyText="━" />
            <TextField source="amount" emptyText="━" />
          </Datagrid>
        )}
      </List>
    </div>
  );
};

export default Ledger;
