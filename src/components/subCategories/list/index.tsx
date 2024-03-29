import { Typography } from "@material-ui/core";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ReferenceField,
  ImageField,
  BooleanField,
  TextInput,
  useListController,
  Loading,
  WrapperField,
} from "react-admin";
import { Empty } from "../../empty/Empty";

import "../../../styles/list.css";
import { PostPagination } from "../../../utils/pagination";

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

export const SubCategories = (props: any) => {
  const { isLoading } = useListController();

  if (isLoading) return <Loading loadingSecondary="" />;

  return (
    <div className="list_wapper">
      <Typography className="List_header" variant="h5">
        {" "}
        Sub Categories
      </Typography>

      <List
        {...props}
        filters={filters}
        pagination={<PostPagination limit={null} />}
      >
        <Datagrid rowClick="edit" empty={<Empty label="Sub Category" />}>
          <ImageField
            className="imgaes"
            source="imageUrl"
            title="title"
            label="Image"
            sx={{
              "& img": { maxWidth: 50, maxHeight: 60, objectFit: "cover" },
            }}
          />
          <TextField source="name" />
          <ReferenceField
            label="category"
            source="categoryId"
            reference="categories"
          />
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
