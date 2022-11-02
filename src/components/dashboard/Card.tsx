import { Card, CardContent, Typography } from "@mui/material";
import React, { FC, ReactNode } from "react";

type Iprop ={
    label:string,
    data:string,
    icon:ReactNode,
    background:string
}
const CardComponent:FC<Iprop> = ({ label, data, icon, background }) => {
  return (
    <>
      <Card
        sx={{
          background: background,
          borderRadius: "12px",
          width: "20%",
          maxHeight:"200px",
          padding: "30px",
          margin: "30px",
        }}
      >
        <CardContent style={{ paddingTop: 0 }}>
          <Typography variant="h5" color="#fff">
            {label}
          </Typography>
          <Typography variant="h4" color="#fff">
            {data} {icon}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default CardComponent;
