import { Typography } from "@material-ui/core";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ImageField,
  BooleanField,
  TextInput,
  Loading,
  useListController,
  WrapperField,
} from "react-admin";
import { Empty } from "../../empty/Empty";

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
export const Categories = (props: any) => {
  const { isLoading } = useListController();

  if (isLoading) return <Loading loadingSecondary="" />;

  return (
    <div className="list_wapper">
      <Typography className="List_header" variant="h5">
        {" "}
        Categories
      </Typography>
      <List
        {...props}
        emptyWhileLoading
        filters={filters}
        pagination={<PostPagination limit={null} />}
      >
        <Datagrid rowClick="edit" empty={<Empty label="Category" />}>
          <ImageField
            className="imgaes"
            source="imageUrl"
            title="title"
            label="Image"
            sx={{
              "& img": { maxWidth: 50, maxHeight: 60, objectFit: "cover" },
            }}
          />
          <TextField source="name" emptyText="━" />
          <TextField label="Title" source="title" emptyText="━" />
          <TextField label="Subtitle" source="subTitle" emptyText="━" />
          <WrapperField label="Active">
            <BooleanField
              source="isActive"
              valueLabelTrue="Active"
              valueLabelFalse="inActive"
            />
          </WrapperField>
          <WrapperField label="Action">
            <EditButton label="" />
          </WrapperField>
        </Datagrid>
      </List>
    </div>
  );
};
