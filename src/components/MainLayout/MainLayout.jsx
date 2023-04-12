import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { AuthConsumer } from "../../context/AuthContext";
import SideBar from "../../shared/Sidebar/Sidebar";
import Header from "../../shared/Header/Header";
// import BaseLayout from "../../shared/BaseLayout";
// import "./style.css";

function MainLayout({ children }) {
  const { token } = AuthConsumer();
  // if (!token) {
  //   return <Navigate to={VWaterPaths.login} replace />;
  // }

  return (
    <Box sx={{ width: "100%", position: "relative" }}>
      <Header />
      <SideBar></SideBar>
    </Box>
  );
}

export default MainLayout;
