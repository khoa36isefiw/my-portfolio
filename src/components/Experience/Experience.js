import { Box, Grid2 } from "@mui/material";
import React from "react";
import { AboutTitle } from "../About";
import { CustomizeTypography } from "../CustomizeTypography/CustomizeTypography";
import { mobileScreen } from "../../theme/theme";

function Experience() {
  return (
    <Box sx={{ mt: 2 }}>
      <AboutTitle title={"Experience"} />
      <CustomizeTypography
        sx={{ fontSize: "24px", textDecoration: "underline" }}
      >
        Level Up Studio Company
      </CustomizeTypography>

      <Box sx={{ px: 2 }}>
        <ul
          style={{
            marginBlockStart: 0,
            marginBlockEnd: 0,
            paddingInlineStart: 0,
          }}
        >
          {listExperienceText.map((exp, index) => (
            <li key={index}>
              <CustomizeTypography sx={{ fontSize: "18px" }}>
                {exp}
              </CustomizeTypography>
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  );
}

export default Experience;

const listExperienceText = [
  "Work with position Front-end Developer part-time.",
  "Met and worked with the design team.",
  "Got feedback from the design team after completing the tasks.",
  "Learned, researched, and applied animations to the project.",
];
