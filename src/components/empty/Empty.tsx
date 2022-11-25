import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { CreateButton } from "react-admin";
import "./empty.css";
type emptyProps = {
  label: string;
};
export const Empty: FC<emptyProps> = ({ label }) => (
  <Box className="empty_container" textAlign="center" m={1}>
    <Typography
      m={1}
      className="empty_header text_color"
      variant="h5"
      paragraph
    >
      No {label} available
    </Typography>
    <Typography className="text_color" mb={1} variant="h6">
      Create one
    </Typography>
    <CreateButton className="bg_color" />
  </Box>
);
