import React from "react";
import { VWaterPaths } from "../../../confgurations/paths/vwaterPath";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ImageStore from "../../../assets/image/store.jpg";
export default function WarehouseView(props) {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <Box component={"div"}>
      <Box height={33}></Box>
      <Box paddingLeft={5} paddingRight={5}>
        <Typography variant="h3" sx={{ fontSize: 26, fontWeight: "bold" }}>
          Chi tiết kho
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
            <Typography variant="subtitle2" sx={{ fontSize: 18 }}>
              Quản lý kho
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
              Tên kho
            </Typography>
          </Box>
          <Button
            variant="text"
            color="success"
            onClick={() => {
              navigate(`${VWaterPaths.warehouse_update}/${id}`);
            }}
          >
            <EditIcon />
            Chỉnh sửa kho
          </Button>
        </Box>
      </Box>
      <Box height={15}></Box>
      <Box marginLeft={5} marginRight={5}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Thông tin kho
        </Typography>
      </Box>
      <Box height={10}></Box>
      <Box
        marginLeft={5}
        marginRight={5}
        sx={{ backgroundColor: "#f4f6f8", display: "flex", flexWrap: "wrap" }}
      >
        <Box padding={2}>
          <img
            width={300}
            height={300}
            style={{ borderRadius: 10 }}
            src={ImageStore}
            alt=""
          />
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          padding={2}
          columnGap={5}
          gap={2}
        >
          <Typography sx={{ color: "#7a8894" }}>
            Mã kho:{" "}
            <Typography
              component={"span"}
              sx={{ fontSize: 17, color: "#212b36" }}
            >
              HNJSOU293
            </Typography>{" "}
          </Typography>
          <Typography sx={{ color: "#7a8894" }}>
            Tên cửa hàng:{" "}
            <Typography
              component={"span"}
              sx={{ fontSize: 17, color: "#212b36" }}
            >
              Cửa hàng VSIP
            </Typography>{" "}
          </Typography>
          <Typography sx={{ color: "#7a8894" }}>
            Số điện thoại:{" "}
            <Typography
              component={"span"}
              sx={{ fontSize: 17, color: "#212b36" }}
            >
              097423432
            </Typography>{" "}
          </Typography>
          <Typography sx={{ color: "#7a8894" }}>
            Khu vực:{" "}
            <Typography
              component={"span"}
              sx={{ fontSize: 17, color: "#212b36" }}
            >
              Quận 9
            </Typography>{" "}
          </Typography>
          <Typography sx={{ color: "#7a8894" }}>
            Sức chứa:{" "}
            <Typography
              component={"span"}
              sx={{ fontSize: 17, color: "#212b36" }}
            >
              1349
            </Typography>{" "}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
