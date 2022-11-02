
// import "./dashboard.css"
import CardComponent from "./Card";
import { Box } from "@material-ui/core";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { Card, CardContent } from "@mui/material";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    BarChart,
    Bar,
    CartesianGrid,
  } from "recharts";


  const dataLine = [
    {
      name: "Users",
      total: 400,
      inactive: 10,
    },
    {
      name: "Categories",
      total: 3000,
      inactive: 1398,
    },
    {
      name: "Sub Categories",
      total: 2000,
      inactive: 900,
    },
    {
      name: "Offers",
      total: 2780,
      inactive: 3908,
    },
  ];
  const dataBar = [
    {
      name: "Users",
      total: 400,
      inactive: 100,
    },
    {
      name: "Categories",
      total: 3000,
      inactive: 1398,
    },
    {
      name: "Sub Categories",
      total: 2000,
      inactive: 900,
    },
    {
      name: "Offers",
      total: 2780,
      inactive: 3908,
    },
  ];

export const Dashboard = (props:any) => {


    return (
        <>
            <Box style={{display:'flex',justifyContent:'space-around'}} >
            <CardComponent
                label="Total number of visitors"
                data="2,000"
                background={"blue"}
                icon={<PeopleAltIcon />}
            />
             <CardComponent
                label="Profit"
                data="20,000"
                background={"green"}
                icon={<TrendingUpIcon />}
            />
            <CardComponent
                label="Loss"
                data="20,000"
                background={"#eb4034"}
                icon={<TrendingDownIcon />}
            />

            </Box>

            {/* chart */}

           < Box style={{ display: "flex",justifyContent:'center' ,gap:'3em'}}>
            <Card style={{ minWidth: "360px" }}>
            <CardContent>
          <LineChart
            width={600}
            height={400}
            data={dataLine}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="inactive"
              stroke="#6b8298"
              activeDot={{ r: 5 }}
            />
            <Line type="monotone" dataKey="total" stroke="#82ca9d" activeDot={{ r: 5 }}/>
            <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
          </LineChart>
          

        </CardContent>
      </Card>

      {/* bar chart  */}
      
      <Card style={{ minWidth: "60px" }}>
        <CardContent>
          <BarChart
            width={600}
            height={400}
            data={dataBar}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="inactive" fill="#6b8298" />
            <Bar dataKey="total" fill="#82ca9d" />
          </BarChart>
        </CardContent>
      </Card>
    </Box>
        </>
    )
};