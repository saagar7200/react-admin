import { Typography } from "@material-ui/core";
import {
  List,
  Datagrid,
  DateField,
  TextField,
  EditButton,
  ReferenceField,
  ImageField,
  BooleanField,
  TextInput,
} from "react-admin";
import { Empty } from "../../empty/Empty";

import "../../../styles/list.css";
import { PostPagination } from "../../../utils/pagination/index";

const filters = [
  <TextInput
    className="search_form"
    source="q"
    variant="outlined"
    label="Search By Title"
    alwaysOn
    resettable
  />,
];

export const Offers = (props: any) => {
  return (
    <div className="list_wapper">
      <Typography className="List_header" variant="h5">
        {" "}
        All Offers
      </Typography>

      <List
        {...props}
        title={"Offer"}
        filters={filters}
        pagination={<PostPagination limit={null} />}
      >
        <Datagrid rowClick="edit" empty={<Empty label="Offers" />}>
          <ImageField
            className="imgaes"
            source="icon"
            title="title"
            label="Icon"
            sx={{
              "& img": { maxWidth: 50, maxHeight: 60, objectFit: "cover" },
            }}
          />
          <TextField source="title" />
          <ReferenceField
            label="Subcategory"
            source="subCategoryId"
            reference="sub-categories"
          />
          <TextField source="profit" />

          <TextField source="network" />
          <BooleanField
            source="isActive"
            valueLabelTrue="Active"
            valueLabelFalse="inActive"
          />
          <DateField source="createdAt" />
          <DateField source="updatedAt" />
          <EditButton />
        </Datagrid>
      </List>
    </div>
  );
};
