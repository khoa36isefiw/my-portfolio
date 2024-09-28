import { Box } from "@mui/material";
import React from "react";
import { CustomizeTypography } from "./CustomizeTypography/CustomizeTypography";

function About() {
  return (
    <Box>
      <CustomizeTypography
        sx={{ fontSize: "32px", color: "yellowgreen", fontWeight: "bold" }}
      >
        About me.
      </CustomizeTypography>
      <CustomizeTypography sx={{ fontSize: "18px" }}>
        I am a student from HCMC University of Technology and Education.
      </CustomizeTypography>
      <CustomizeTypography sx={{ fontSize: "18px" }}>
        Currently, I am working on my graduation project to prepare for
        graduation.
      </CustomizeTypography>
    </Box>
  );
}

export default About;
