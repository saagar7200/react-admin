import { Pagination } from "react-admin";

export const PostPagination = (props: any) => (
  <Pagination rowsPerPageOptions={[5, 10, 25, 50, 100]} {...props} />
);
