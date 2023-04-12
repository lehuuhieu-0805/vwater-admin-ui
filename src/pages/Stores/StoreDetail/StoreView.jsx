import React from "react";
import { VWaterPaths } from "../../../confgurations/paths/vwaterPath";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ImageStore from "../../../assets/image/store.jpg";
export default function StoreView(props) {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <Box component={"div"}>
      <Box height={33}></Box>
      <Box paddingLeft={5} paddingRight={5}>
        <Typography variant="h3" sx={{ fontSize: 26, fontWeight: "bold" }}>
          Chi tiết cửa hàng
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
              Quản lý cửa hàng
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
              Tên cửa hàng
            </Typography>
          </Box>
          <Button
            variant="text"
            color="success"
            onClick={() => {
              navigate(`${VWaterPaths.store_update}/${id}`);
            }}
          >
            <EditIcon />
            Chỉnh sửa cửa hàng
          </Button>
        </Box>
      </Box>
      <Box height={15}></Box>
      <Box marginLeft={5} marginRight={5}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Thông tin cửa hàng
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
          columnGap={2}
          justifyContent={"space-between"}
        >
          <Typography sx={{ color: "#7a8894" }}>
            Thương hiệu:{" "}
            <Typography
              component={"span"}
              sx={{ fontSize: 17, color: "#212b36" }}
            >
              Tên thương hiệu
            </Typography>{" "}
          </Typography>
          <Typography sx={{ color: "#7a8894" }}>
            Mã cửa hàng:{" "}
            <Typography
              component={"span"}
              sx={{ fontSize: 17, color: "#212b36" }}
            >
              Mã cửa hàng
            </Typography>{" "}
          </Typography>
          <Typography sx={{ color: "#7a8894" }}>
            Tên cửa hàng:{" "}
            <Typography
              component={"span"}
              sx={{ fontSize: 17, color: "#212b36" }}
            >
              Tên cửa hàng
            </Typography>{" "}
          </Typography>
          <Typography sx={{ color: "#7a8894" }}>
            Số điện thoại:{" "}
            <Typography
              component={"span"}
              sx={{ fontSize: 17, color: "#212b36" }}
            >
              0982343324
            </Typography>{" "}
          </Typography>
          <Typography sx={{ color: "#7a8894" }}>
            Tài khoản:{" "}
            <Typography
              component={"span"}
              sx={{ fontSize: 17, color: "#212b36" }}
            >
              Không có dữ liệu
            </Typography>{" "}
          </Typography>
          <Typography sx={{ color: "#7a8894" }}>
            Địa điểm (Chọn trên bản đồ):{" "}
            <Typography
              component={"span"}
              sx={{ fontSize: 17, color: "#212b36" }}
            >
              Không có dữ liệu
            </Typography>{" "}
          </Typography>
          <Typography sx={{ color: "#7a8894" }}>
            Link hình ảnh:{" "}
            <Typography
              component={"span"}
              sx={{ fontSize: 17, color: "#212b36" }}
            >
              Không có dữ liệu
            </Typography>{" "}
          </Typography>
          <Typography sx={{ color: "#7a8894" }}>
            Loại cửa hàng:{" "}
            <Typography
              component={"span"}
              sx={{ fontSize: 17, color: "#212b36" }}
            >
              Chung cư
            </Typography>{" "}
          </Typography>
          <Typography sx={{ color: "#7a8894" }}>
            Địa chỉ:{" "}
            <Typography
              component={"span"}
              sx={{ fontSize: 17, color: "#212b36" }}
            >
              S5.01, Vinhomes Grand Park, Phường Long Thạnh Mỹ, Quận 9, Thành
              phố Hồ Chí Minh,
            </Typography>{" "}
          </Typography>
          <Typography sx={{ color: "#7a8894" }}>
            Building:{" "}
            <Typography
              component={"span"}
              sx={{ fontSize: 17, color: "#212b36" }}
            >
              S5.01
            </Typography>{" "}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
