import { Box } from "@mui/material";
import React from "react";
import Header from "../components/Header";

function DefaultLayout({ children }) {
  return (
    <Box>
      <Header />
      <Box>{children}</Box>
    </Box>
  );
}

export default DefaultLayout;
