import { Typography } from "@material-ui/core";
import {
  List,
  Datagrid,
  TextField,
  ShowButton,
  TextInput,
  ImageField,
  useListController,
  Loading,
  FunctionField,
  WrapperField,
} from "react-admin";

import "../../../styles/list.css";
import { PostPagination } from "../../../utils/pagination/index";

// import Transactions from "../../transactions/list/index";

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
  const { isLoading } = useListController();

  if (isLoading) return <Loading loadingSecondary="" />;

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
          rowClick="show"
          bulkActionButtons={false}
          empty={
            <Typography className="empty_text" variant="h6">
              No Users !!
            </Typography>
          }
        >
          <FunctionField
            label="Image"
            render={(record: any) => {
              if (record?.image) {
                return (
                  <ImageField
                    sx={{
                      "& img": {
                        maxWidth: 55,
                        maxHeight: 55,
                        objectFit: "cover",
                        borderRadius: "100%",
                      },
                    }}
                    source={"image"}
                    title="name"
                  />
                );
              }

              return (
                <img
                  className="user_profile_list"
                  src="/asset/noImage.png"
                  alt="noimage"
                />
              );
            }}
          />

          <FunctionField
            label="User"
            sortBy={`${"name" || "email"}`}
            render={(record: any) =>
              `${
                record.name
                  ? record.name
                  : record.email
                  ? record.email
                  : record.phone
                  ? record.phone
                  : record.id
              } `
            }
          />

          <TextField source="commissionSumPend" label="Pending Commission " />
          <TextField
            source="commissionSumApproved"
            label="Approved Commission"
          />
          <TextField source="salesAmountSumPend" label="Pending Sales" />
          <TextField source="salesAmountSumApproved" label="Approved Sales " />
          <TextField source="commissionAmountSum" label="Total Commission" />
          <TextField source="salesAmountSum" label="Total Sales" />

          <WrapperField label="Action">
            <ShowButton label="" />
          </WrapperField>
        </Datagrid>
      </List>
    </div>
  );
};

export default Users;
