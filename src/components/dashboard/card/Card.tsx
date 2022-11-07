import { Card, Typography, Box } from "@mui/material";
import React, { FC, ReactNode } from "react";
import "./card.css";

type Iprop = {
  label: string;
  data: string;
  icon: ReactNode;
  background: string;
};
const CardComponent: FC<Iprop> = ({ label, data, icon, background }) => {
  return (
    <>
      <Card className="card_container" sx={{ background: background }}>
        <Box>
          <Typography className="White_text" variant="h6">
            {label}
          </Typography>
          <Typography className="White_text bold" variant="h5">
            {data}
          </Typography>
        </Box>
        <div className="White_text">
          {icon}
        </div>
      </Card>
    </>
  );
};

export default CardComponent;
