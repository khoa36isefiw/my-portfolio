import { Box, Container } from "@mui/material";
import React from "react";
import Header from "../components/Header";

function DefaultLayout({ children }) {
  return (
    <Box>
      <Header />
      <Container sx={{ mt: 10 }}>{children}</Container>
    </Box>
  );
}

export default DefaultLayout;
