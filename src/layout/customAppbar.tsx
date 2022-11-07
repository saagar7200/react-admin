import * as React from "react";
import { AppBar } from "react-admin";
import { Typography } from "@mui/material";
import Logo from "../assets/logo.svg";
import "./customLayout.css";

export const CustomAppBar = (props: any) => (
  <AppBar
    className="appbar"
    // {...props}
    userMenu={true}
  >
    <Typography
      variant="h5"
      color="inherit"
      className="logo_container"
      // id="title"
      textAlign="center"
      fontWeight="bold"
    >
      <img src={Logo} alt="logo" height="35" width="40" />
      <div className="Logo_text">Rayy</div>
      {/* <Typography
       className='Title'
       variant='h5'
        id="react-admin-title"
        /> */}
    </Typography>
  </AppBar>
);
