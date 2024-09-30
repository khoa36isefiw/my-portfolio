import { Box } from "@mui/material";
import React from "react";
import { AboutTitle } from "../About";
import { CustomizeTypography } from "../CustomizeTypography/CustomizeTypography";

function Experience() {
  return (
    <Box sx={{ mt: 2 }}>
      <AboutTitle title={"Experience"} />
      <CustomizeTypography
        sx={{ fontSize: "24px", textDecoration: "underline" }}
      >
        Level Up Studio Company
      </CustomizeTypography>
      <DesignList />
    </Box>
  );
}

export default Experience;

const DesignList = () => {
  return (
    <Box>
      {listExperienceText.map((exp, index) => (
        <Box sx={{ display: "flex", alignItems: "center" }} key={index}>
          <Box
            sx={{
              height: "8px",
              width: "8px",
              borderRadius: "50%",
              bgcolor: "#000",
              mr: 1,
            }}
          />
          <CustomizeTypography sx={{ fontSize: "18px" }}>
            {exp}
          </CustomizeTypography>
        </Box>
      ))}
    </Box>
  );
};

const listExperienceText = [
  "Work with position Front-end Developer part-time.",
  "Met and worked with the design team.",
  "Got feedback from design team after completing the tasks.",
  "Learned, researched, and applied animations to the project.",
];
