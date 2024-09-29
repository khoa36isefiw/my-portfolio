import { Box, Container } from "@mui/material";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";

function DefaultLayout({ children }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 739);

  const handleWindowSizeChange = () => {
    setIsMobile(window.innerWidth < 739);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    // remove events
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  return (
    <Box sx={{ height: "200vh" }}>
      <Header />

      <Container sx={{ mt: 10 }}>{children}</Container>
    </Box>
  );
}

export default DefaultLayout;
