import React from "react";
import { Typography } from "@material-ui/core";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import "./title.css";

const Title = (props: any) => {
  const navigate = useNavigate();
  const { title, resource } = props;
  return (
    <Typography className="title_wrapper" variant="h5">
      <ArrowBackIcon
        className="title_back_icon"
        onClick={() => {
          navigate(`/${resource}`);
        }}
      />
      {title}
    </Typography>
  );
};

export default Title;
