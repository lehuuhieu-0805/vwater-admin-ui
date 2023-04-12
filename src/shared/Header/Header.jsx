import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  Popover,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import DoveIcon from "./../../assets/icons/icons8-dove-62.png";
import "./styles.css";
export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div className="header">
      <Grid container spacing={2}>
        <Grid item xs={8}></Grid>
        <Grid item xs={4}>
          <Stack direction="row" spacing={2}>
            <Box sx={{ width: "80%" }}></Box>
            <IconButton onClick={handleClick}>
              <Avatar
                alt="Remy Sharp"
                src={DoveIcon}
                sx={{ width: 35, height: 35 }}
              />
            </IconButton>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <Box sx={{ width: "250px" }}>
                <Box sx={{ m: 2 }}>
                  <Typography sx={{ pl: 2, pr: 2 }}>ADMIN VWATER</Typography>
                  <Typography sx={{ pl: 2 }} style={{ fontSize: "12px" }}>
                    ADMIN SYSTEM
                  </Typography>
                </Box>
                <hr style={{ borderColor: "rgba(145, 158, 171, 0.24)" }} />
                <Box sx={{ m: 2 }}>
                  <Button
                    variant="oulined"
                    sx={{
                      width: "100%",
                      border: "1px solid rgba(145, 158, 171, 0.32)",
                      borderRadius: "9px",
                    }}
                  >
                    Đăng xuất
                  </Button>
                </Box>
              </Box>
            </Popover>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}
