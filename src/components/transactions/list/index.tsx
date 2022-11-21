import { Typography } from "@material-ui/core";
import {
  List,
  Datagrid,
  DateField,
  TextField,
  EditButton,
  TextInput,
  ChipField,
  DateInput,
  useRefresh,
  FilterButton,
  FilterForm,
  ListBase,
  AutocompleteInput,
} from "react-admin";

import "../../../styles/list.css";
import { useLocation } from "react-router-dom";
import { servicesHost } from "../../../utils/data-provider";
import "../transaction.css";
import { Stack } from "@mui/material";
import { PostPagination } from "../../../utils/pagination/index";

const Transactions = (props: any) => {
  let userSearch = false;

  const location = useLocation();

  const refresh = useRefresh();
  const getData = async () => {
    const res = await fetch(
      `${servicesHost}/affiliate/transactions?network=inr&persist=true`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          start_date: "2022-09-19",
          end_date: "2022-11-19",
        }),
      }
    );
    if (res.status >= 200 && res.status < 300) {
      refresh();
    }
  };

  if (location.search !== "") {
    var search = location.search.substring(1);

    if (
      search.split("=")[1] === "%7B%22user.name%22%3Atrue%7D&filter" ||
      search.split("=")[1] ===
        "%7B%22user.name%22%3Atrue%2C%22q%22%3Atrue%7D&filter" ||
      search.split("=")[1] ===
        "%7B%22q%22%3Atrue%2C%22user.name%22%3Atrue%7D&filter"
    ) {
      userSearch = true;
    }
  }

  const filters = [
    <TextInput
      className="search_form"
      source="q"
      variant="outlined"
      label="Search By Store"
      placeholder="Search"
      alwaysOn={!userSearch && true}
      hidden={userSearch}
    />,
    <TextInput
      className="search_form"
      source="user.name"
      variant="outlined"
      label="Search By User"
      placeholder="Search"
      hidden={!userSearch}
    />,

    <DateInput label="From" source="startDate" variant="outlined" alwaysOn />,
    <DateInput label="To" source="endDate" variant="outlined" alwaysOn />,

    <AutocompleteInput
      label="Filter by Status"
      source="status"
      variant="outlined"
      alwaysOn
      choices={[
        { id: "pending", name: "pending" },
        { id: "approved", name: "approved" },
      ]}
    />,
    <AutocompleteInput
      label="Filter by Network"
      source="offer.network"
      variant="outlined"
      alwaysOn
      choices={[
        { id: "inr", name: "inr" },
        { id: "cuelink", name: "cuelink" },
      ]}
    />,
  ];

  const ListToolbar = () => (
    <Stack
      direction="row"
      justifyContent="space-between"
      className="transaction-filter-container"
    >
      <FilterForm filters={filters} />
      <div className="transaction-filter-btn">
        <FilterButton filters={filters} className="transaction-filter-option" />
        <button
          onClick={getData}
          className="transaction-refresh-btn"
          resource="refresh"
        >
          Refresh
        </button>
      </div>
    </Stack>
  );

  return (
    <div className="list_wapper">
      <Typography className="List_header transaction-header" variant="h5">
        {" "}
        Transaction
      </Typography>

      <ListBase>
        <ListToolbar />
        <List
          title={"Transaction"}
          {...props}
          className="transaction-table"
          actions={null}
          pagination={<PostPagination limit={null} />}
        >
          <Datagrid
            rowClick="edit"
            empty={
              <Typography className="empty_text" variant="h6">
                No Transactions !!
              </Typography>
            }
          >
            <TextField source="user.name" />
            <TextField source="storeName" />
            <TextField source="offer.network" />
            <TextField source="saleAmount" />
            <TextField source="commission" />
            <DateField source="date" />
            <ChipField source="status" />
            <EditButton />
          </Datagrid>
        </List>
      </ListBase>
    </div>
  );
};

export default Transactions;
