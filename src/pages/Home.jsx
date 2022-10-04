import React from "react";
import DrawerLeft from "./DrawerLeft";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import "../App.css";

function Home() {
  return (
    <Box sx={{ display: "flex", p:2 }}>
      <CssBaseline />
      <DrawerLeft />
      <Outlet />
    </Box>
  );
}

export default Home;
