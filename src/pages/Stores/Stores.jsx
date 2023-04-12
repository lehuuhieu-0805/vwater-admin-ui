import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import { useNavigate } from "react-router-dom";
import TableBasic from "../../components/TableBasic/TableBasic";
import { VWaterPaths } from "../../confgurations/paths/vwaterPath";

export default function Stores() {
  const navigate = useNavigate();

  //
  const [branch, setBranch] = useState();
  const handleChangeBranch = (event) => {
    console.log(event.target.value);
  };
  function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
  }
  const columnsTable = [
    {
      id: "name",
      label: "Sản phẩm",
      minWidth: 170,
    },
    { id: "code", label: "Khu vực\u00a0Code", minWidth: 100 },
    {
      id: "population",
      label: "Số lượng",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "size",
      label: "Khoảng cách\u00a0(km\u00b2)",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "density",
      label: "Số lượng",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
  ];

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
  const hanldeEditRow = (row) => {
    console.log(row);
    navigate(`${VWaterPaths.store_view}/${row.id}`);
  };
  const hanldeDeleteRow = (row) => {
    console.log(row);
  };
  return (
    <Box component={"div"}>
      <Box height={33}></Box>
      <Box paddingLeft={5} paddingRight={5}>
        <Typography variant="h3" sx={{ fontSize: 26, fontWeight: "bold" }}>
          Danh sách cửa hàng
        </Typography>
        <Box height={20}></Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="subtitle1" sx={{ fontSize: 20 }}>
              Bảng điều khiển
            </Typography>
            <Box
              sx={{
                width: 4,
                height: 4,
                borderRadius: "50%",
                backgroundColor: "rgb(145, 158, 171)",
                margin: "0 15px",
              }}
            ></Box>
            <Typography
              variant="subtitle2"
              sx={{ fontSize: 16, color: "rgb(145, 158, 171)" }}
            >
              Danh sách cửa hàng
            </Typography>
          </Box>
          <ButtonCustom
            icon={<AddIcon />}
            onClick={() => {
              navigate(VWaterPaths.store_create);
            }}
            title={"Thêm cửa hàng"}
          ></ButtonCustom>
        </Box>
      </Box>
      <Box padding={5}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <FormControl fullWidth>
              <InputLabel
                id="demo-simple-select-label"
                size="small"
                color="success"
              >
                Tên thương hiệu
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={branch}
                label="Tên thương hiệu"
                onChange={handleChangeBranch}
                size="small"
                color="success"
              >
                <MenuItem value={"LV"}>Louis Vuitton</MenuItem>
                <MenuItem value={"NB"}>New Balance</MenuItem>
                <MenuItem value={"AN"}>Ananas</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl fullWidth>
              <TextField
                color="success"
                label="Tên cửa hàng"
                variant="outlined"
                size="small"
              />
            </FormControl>
          </Grid>
        </Grid>
      </Box>
      <Box paddingLeft={5} paddingRight={5}>
        <TableBasic
          datas={datasTable}
          columns={columnsTable}
          fetchDataTable={fetchDataService}
          title={"Danh sách cửa hàng"}
          hanldeEditRow={(row) => {
            hanldeEditRow(row);
          }}
          hanldeDeleteRow={(row) => {
            hanldeDeleteRow(row);
          }}
          // totalData={1000}
          showAction
        ></TableBasic>
      </Box>
    </Box>
  );
}
