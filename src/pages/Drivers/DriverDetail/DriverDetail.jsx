import React, { useRef, useState } from "react";
import { Box, Grid, Paper, Stack, TextField, Typography } from "@mui/material";
import CameraEnhanceIcon from "@mui/icons-material/CameraEnhance";
import "./styles.css";
import DefaultAvatar from "../../../assets/icons/icons8-dove-62.png";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { BaseTextField } from "../../../components/Form/BaseTextField";
import SelectForm from "../../../components/Form/SelectElement/SelectForm";
import { useForm } from "react-hook-form";
import RadioButtonElement from "../../../components/Form/RadioButtonElement";
export default function DriverDetail(props) {
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
  const { control } = useForm({});
  return (
    <Box component={"div"}>
      <Box height={33}></Box>
      <Box paddingLeft={5} paddingRight={5}>
        <Typography variant="h3" sx={{ fontSize: 26, fontWeight: "bold" }}>
          Thêm mới tài xế
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
              Quản lý tài xế
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
              Thêm mới tài xế
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
          <Grid item xs={4}>
            <Paper elevation={2} sx={{ borderRadius: 4 }}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  padding: "10px 20px",
                }}
              >
                Hình ảnh
              </Typography>
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
                      <PhotoCameraIcon size={20} /> Tải lên hình ảnh
                    </label>
                  )}
                </div>
                <div className="avatar-preview">
                  <img src={imagePreview ? imagePreview : ""} alt="" />
                </div>
              </div>
              <Box height={20}></Box>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "12px",
                  fontWeight: 400,
                  color: "rgb(145, 158, 171)",
                }}
              >
                Cho phép *.jpeg, *.jpg, *.png, *.gif <br />
                dung lượng tối đa 3M.1 MB
              </Typography>
              <Box height={20}></Box>
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <form>
              <Paper elevation={2} sx={{ borderRadius: 4 }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 700,
                    fontSize: "1.2rem",
                    padding: "10px 20px",
                  }}
                >
                  Thông tin tài xế
                </Typography>
                <Box padding={4}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <TextField
                        variant="outlined"
                        color="success"
                        label="Tên"
                        size="small"
                        fullWidth
                        borderRadius={2}
                      ></TextField>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        variant="outlined"
                        color="success"
                        label="Họ"
                        size="small"
                        fullWidth
                        borderRadius={2}
                      ></TextField>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        variant="outlined"
                        color="success"
                        label="Số điện thoại"
                        size="small"
                        fullWidth
                        borderRadius={2}
                      ></TextField>
                    </Grid>
                    <Grid item xs={6}>
                      <BaseTextField
                        variant="outlined"
                        color="success"
                        label="Email"
                        size="small"
                        type="email"
                        fullWidth
                        borderRadius={2}
                      ></BaseTextField>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        variant="outlined"
                        color="success"
                        label="Tên đăng nhập"
                        size="small"
                        fullWidth
                        borderRadius={2}
                      ></TextField>
                    </Grid>
                    <Grid item xs={6}>
                      <BaseTextField
                        variant="outlined"
                        color="success"
                        label="Mật khẩu"
                        size="small"
                        type="password"
                        fullWidth
                        borderRadius={2}
                      ></BaseTextField>
                    </Grid>
                    <Grid item xs={12}>
                      <BaseTextField
                        variant="outlined"
                        color="success"
                        label="Địa chỉ"
                        size="small"
                        multiline
                        rows={4}
                        fullWidth
                        borderRadius={2}
                      ></BaseTextField>
                    </Grid>
                  </Grid>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 700,
                      fontSize: "1rem",
                      padding: "10px 0px",
                    }}
                  >
                    Thông tin đội giao hàng
                  </Typography>
                  <Grid item xs={12}>
                    <SelectForm
                      label="Tên đội giao hàng"
                      control={control}
                      options={[]}
                      size="small"
                      name="nameGroupShipper"
                    ></SelectForm>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <RadioButtonElement
                        label="Phân loại"
                        control={control}
                        options={[
                          { value: "NB", label: "Nội bộ" },
                          { value: "BN", label: "Bên ngoài" },
                        ]}
                        size="small"
                        name="kind"
                      ></RadioButtonElement>
                    </Grid>
                    <Grid item xs={6}>
                      <RadioButtonElement
                        label="Vai trò"
                        control={control}
                        options={[
                          { value: "LEADER", label: "Đội trưởng" },
                          { value: "MEMBER", label: "Thành viên" },
                        ]}
                        size="small"
                        name="role"
                      ></RadioButtonElement>
                    </Grid>
                  </Grid>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 700,
                      fontSize: "1rem",
                      padding: "10px 0px",
                    }}
                  >
                    Thông tin phương tiện
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <SelectForm
                        label="Loại phương tiện"
                        control={control}
                        options={[]}
                        size="small"
                        name="nameGroupShipper"
                      ></SelectForm>
                    </Grid>
                    <Grid item xs={6}>
                      <BaseTextField
                        variant="outlined"
                        color="success"
                        label="Biển số"
                        size="small"
                        fullWidth
                        borderRadius={2}
                      ></BaseTextField>
                    </Grid>
                    <Grid item xs={6}>
                      <BaseTextField
                        variant="outlined"
                        color="success"
                        label="Màu sắc"
                        size="small"
                        fullWidth
                        borderRadius={2}
                      ></BaseTextField>
                    </Grid>
                    <Grid item xs={6}>
                      <BaseTextField
                        variant="outlined"
                        color="success"
                        label="Mô tả phương tiện"
                        size="small"
                        fullWidth
                        borderRadius={2}
                      ></BaseTextField>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </form>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
