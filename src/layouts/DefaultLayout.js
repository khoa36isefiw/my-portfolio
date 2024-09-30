import { Box } from "@mui/material";
import React from "react";
import Header from "../components/Header";

function DefaultLayout({ children }) {
  return (
    <Box>
      <Header />

      <Box sx={{ mt: 10 }}>{children}</Box>
    </Box>
  );
}

export default DefaultLayout;
