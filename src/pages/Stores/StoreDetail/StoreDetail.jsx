import React, { useRef, useState } from "react";
import { Box, Grid, Paper, Stack, TextField, Typography } from "@mui/material";
import CameraEnhanceIcon from "@mui/icons-material/CameraEnhance";
import "./styles.css";
import DefaultAvatar from "../../../assets/icons/icons8-dove-62.png";
import { AiOutlineUpload } from "react-icons/ai";

export default function StoreDetail(props) {
  const { type } = props;
  const [imagePreview, setImagePreview] = useState();
  const [uploadFile, setUploadFile] = useState();
  const inputImageRef = useRef(null);
  const uploadAvatar = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setUploadFile(e.target.files[0]);
      setImagePreview(URL.createObjectURL(e.target.files[0]));
    }
  };
  return (
    <Box component={"div"}>
      <Box height={33}></Box>
      <Box paddingLeft={5} paddingRight={5}>
        <Typography variant="h3" sx={{ fontSize: 26, fontWeight: "bold" }}>
          Thêm mới cửa hàng
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
              Thêm mới cửa hàng
            </Typography>
          </Box>
          {/* <ButtonCustom
            icon={<AddIcon />}
            onClick={() => {
              navigate("/stores/create");
            }}
            title={"Thêm cửa hàng"}
          ></ButtonCustom> */}
        </Box>
      </Box>
      <Box height={15}></Box>
      <Box paddingLeft={5} paddingRight={5}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Paper elevation={2} sx={{ borderRadius: 4 }}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  padding: "10px 20px",
                }}
              >
                Thông tin cửa hàng
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <div className="avatar-upload">
                    <div
                      className="avatar-edit"
                      htmlFor="imageUpload"
                      onClick={() => {
                        inputImageRef.current.click();
                      }}
                    >
                      <input
                        ref={inputImageRef}
                        type="file"
                        id="imageUpload"
                        accept=".png, .jpg, .jpeg"
                        onChange={uploadAvatar}
                      />
                      {imagePreview ? null : (
                        <label>
                          <AiOutlineUpload size={20} />
                          &nbsp; Upload file
                        </label>
                      )}
                    </div>
                    <div className="avatar-preview">
                      <img src={imagePreview ? imagePreview : ""} alt="" />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={2} padding={2}>
                    <TextField
                      variant="outlined"
                      color="success"
                      label="Mã cửa hàng"
                      size="small"
                      fullWidth
                      borderRadius={2}
                    ></TextField>
                    <TextField
                      variant="outlined"
                      color="success"
                      label="Tên cửa hàng"
                      size="small"
                      fullWidth
                    ></TextField>
                    <TextField
                      variant="outlined"
                      color="success"
                      label="Số điện thoại"
                      size="small"
                      fullWidth
                    ></TextField>
                    <TextField
                      variant="outlined"
                      color="success"
                      label="Số tài khoản"
                      size="small"
                      fullWidth
                    ></TextField>
                    <TextField
                      variant="outlined"
                      color="success"
                      label="Loại cửa hàng"
                      size="small"
                      fullWidth
                    ></TextField>
                    <TextField
                      variant="outlined"
                      color="success"
                      label="Chọn thương hiệu"
                      size="small"
                      fullWidth
                    ></TextField>
                    <TextField
                      variant="outlined"
                      color="success"
                      label="Link hình ảnh"
                      size="small"
                      fullWidth
                    ></TextField>
                  </Stack>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={2} sx={{ borderRadius: 4 }}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  padding: "10px 20px",
                }}
              >
                Tọa độ cửa hàng
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
