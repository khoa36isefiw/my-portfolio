import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { mobileScreen, tabletScreen } from "../theme/theme";

function Header() {
  const headers = ["Home", "About", "Projects"];
  return (
    <Box
      sx={{
        minHeight: "60px",
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        [tabletScreen]: {
          minHeight: "80px",
        },
        [mobileScreen]: {
          width: "100%",
          minHeight: "80px",
        },
      }}
    >
      {headers.map((header, index) => (
        <Typography key={index}>{header}</Typography>
      ))}
    </Box>
  );
}

export default Header;
