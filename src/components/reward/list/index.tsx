import { Typography } from "@material-ui/core";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ImageField,
  TextInput,
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
  />,
];
export const Reward = (props: any) => {
  const { isLoading } = useListController();

  if (isLoading) return <Loading loadingSecondary="" />;

  return (
    <div className="list_wapper">
      <Typography className="List_header" variant="h5">
        {" "}
        Rewards
      </Typography>
      <List
        {...props}
        emptyWhileLoading
        filters={filters}
        pagination={<PostPagination limit={null} />}
      >
        <Datagrid rowClick="edit" empty={<Empty label="Rewards" />}>
          <ImageField
            className="imgaes"
            source="image"
            title="rewardName"
            label="Image"
            sx={{
              "& img": { maxWidth: 50, maxHeight: 60, objectFit: "cover" },
            }}
          />
          <TextField label="Reward Name" source="rewardName" emptyText="━" />

          <TextField source="type" emptyText="━" />
          <TextField label="Provider" source="provider" emptyText="━" />
          <TextField label="ETID" source="etId" emptyText="━" />
          <TextField label="Max Value" source="maxValue" emptyText="━" />
          <TextField label="Face Value" source="faceValue" emptyText="━" />

          <EditButton />
        </Datagrid>
      </List>
    </div>
  );
};
