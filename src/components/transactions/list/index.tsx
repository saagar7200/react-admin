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
  AutocompleteInput,
} from "react-admin";

import "../../../styles/list.css";
import { useLocation } from "react-router-dom";

const Transactions = (props: any) => {
  let userSearch = false;

  const location = useLocation();

  if (location.search !== "") {
    var search = location.search.substring(1);
    console.log(search)
    console.log(search.includes("%7B%22user%22%3Atrue%7D&filter"))

    // search.split("=")[1] === "%7B%22user%22%3Atrue%7D&filter")
    if (search.includes("%7B%22user%22%3Atrue%7D&filter")) {
      const searchObj = JSON.parse(
        '{"' + search.replace(/&/g, '","').replace(/=/g, '":"') + '"}',
        function (key, value) {
          return key === "" ? value : decodeURIComponent(value);
        }
      );

      console.log()

      if (JSON.parse(searchObj?.displayedFilters).user) {
        const { user } = JSON.parse(searchObj.displayedFilters);

        userSearch = user;
      }
    }
  }

  const filters = [
    <TextInput
      className="search_form"
      source="q"
      variant="outlined"
      label="Search By Store"
      placeholder="Search"
      alwaysOn={!userSearch ? true : false}
      hidden={userSearch}
    />,
    <TextInput
      className="search_form"
      source="user"
      variant="outlined"
      label="Search By User"
      placeholder="Search"
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
  ];

  return (
    <div className="list_wapper">
      <Typography className="List_header" variant="h5">
        {" "}
        Transaction
      </Typography>

      <List
        title={"Transaction"}
        {...props}
        filters={filters}
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
    </div>
  );
};

export default Transactions;
