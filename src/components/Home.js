import { Avatar, Box } from "@mui/material";
import React from "react";
import { CustomizeTypography } from "./CustomizeTypography/CustomizeTypography";
import { theme } from "../theme/theme";
import back from "../assets/images/rengoku_back.jpeg";

function Home() {
  return (
    <Box sx={{ mt: 10, display: "flex", alignItems: "center" }}>
      <Box>
        <CustomizeTypography sx={{ fontSize: 28, fontWeight: "600" }}>
          Hello I'm Khoa,
        </CustomizeTypography>
        <CustomizeTypography
          sx={{
            fontSize: 100,
            color: theme.palette.secondaryColor,
            fontWeight: "bold",
            width: "100%",
          }}
        >
          Front-end Developer
        </CustomizeTypography>
      </Box>
      <Box
        sx={{
          height: "510px",
          width: "666px",
          position: "relative",
        }}
      >
        <Box
          sx={{
            height: "95%",
            width: "95%",
            // bgcolor: "#ccc",
            border: "1px solid #ccc",
            borderRadius: "31% 69% 25% 75% / 70% 35% 65% 30%",
            position: "absolute",
            top: 0,
            right: 0,
            zIndex: 99,
          }}
        />
        <Avatar
          src={back}
          alt="My Image"
          sx={{
            objectFit: "cover",
            height: "95%",
            width: "95%",
            borderRadius: "31% 69% 25% 75% / 70% 35% 65% 30%",
            position: "absolute",

            top: "-5%",
            right: "-5%",
          }}
        />
      </Box>
    </Box>
  );
}

export default Home;
