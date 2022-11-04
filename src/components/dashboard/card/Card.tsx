import { Card, Typography,Box } from "@mui/material";
import React, { FC, ReactNode } from "react";
import "./card.css"

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
      className="card_container"
        sx={{background: background}}
      >
                <Box>
                      <Typography className="White_text" variant="h5" >
                      {label}
                    </Typography>
                    <Typography className="White_text bold"  variant="h4">
                      {data} 
                    </Typography>
                </Box>
                <Box>
                    <Typography className="White_text"  variant="h1" >
                    {icon}
                  </Typography>
                </Box>
          
      </Card>
    </>
  );
};

export default CardComponent;
