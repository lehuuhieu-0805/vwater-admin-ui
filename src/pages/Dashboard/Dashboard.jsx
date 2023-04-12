import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React, { useState } from "react";

import TableBasic from "../../components/TableBasic/TableBasic";
import "./styles.css";
import { ANALYTICS_DASHBOARD_MODEL, LATEST_ORDER_HEADER_TABLE } from "../../models/dashboard.model";
import { useForm } from "react-hook-form";
import DatePickerElement from "../../components/Form/DatePickerElement";
export default function Dashboard() {
  const [data, setData] = useState(ANALYTICS_DASHBOARD_MODEL);
  function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
  }

  const datasTable = [
    createData("India", "IN", 1324171354, 3287263),
    createData("China", "CN", 1403500365, 9596961),
    createData("Italy", "IT", 60483973, 301340),
    createData("United States", "US", 327167434, 9833520),
    createData("Canada", "CA", 37602103, 9984670),
    createData("Australia", "AU", 25475400, 7692024),
    createData("Germany", "DE", 83019200, 357578),
    createData("Ireland", "IE", 4857000, 70273),
    createData("Mexico", "MX", 126577691, 1972550),
    createData("Japan", "JP", 126317000, 377973),
    createData("France", "FR", 67022000, 640679),
    createData("United Kingdom", "GB", 67545757, 242495),
    createData("Russia", "RU", 146793744, 17098246),
    createData("Nigeria", "NG", 200962417, 923768),
    createData("Brazil", "BR", 210147125, 8515767),
  ];
  const fetchDataService = (params) => {
    console.log(params);
  };

  const {
    register,
    handleSubmit,
    watch,
    control,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();
  const handleOnSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <div className="dashboard-body">
      <Typography variant="h4" sx={{ fontWeight: "600" }}>
        Chào mừng bạn đến với VWATER
      </Typography>
      <Box sx={{ height: "30px" }}></Box>
      <Grid container spacing={4}>
        {data.map((value, index) => {
          return (
            <Grid item xs={12} md={6} xl={3} key={index}>
              <Card
                sx={{
                  width: "100%",
                  height: "250px",
                  boxShadow: "none",
                  borderRadius: "16px",
                  padding: "40px 0",
                  backgroundColor: `${value.bgColorCard}`,
                  color: `${value.colorCard}`,
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <Box
                    sx={{
                      margin: "auto auto 24px",
                      display: "flex",
                      borderRadius: "50%",
                      alignItems: "center",
                      width: "64px",
                      height: "64px",
                      justifyContent: "center",
                      color: `${value.iconColor}`,
                      backgroundImage: `${value.bgImage}`,
                    }}
                  >
                    {value.icon}
                  </Box>

                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "600", fontSize: "39px" }}
                  >
                    {value.amount}
                  </Typography>
                  <Typography variant="h6" sx={{ fontSize: "15px" }}>
                    {value.title}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <Box height={20}></Box>
      <TableBasic
        title={"Đơn hàng gần đây"}
        datas={datasTable}
        columns={LATEST_ORDER_HEADER_TABLE}
        fetchDataTable={fetchDataService}
      // totalData={1000}
      ></TableBasic>
    </div>
  );
}
