import { Box, IconButton } from "@mui/material";
import React from "react";
import { CustomizeTypography } from "./CustomizeTypography/CustomizeTypography";
import TagIcon from "@mui/icons-material/Tag";
import { theme } from "../theme/theme";
import Skills from "./Skills/Skills";
import {
  languagesData,
  databaseData,
  frontEndDevelopments,
  backEndDevelopments,
  mobileAppDevelopments,
} from "../data/skillsData";

function About() {
  return (
    <Box>
      <AboutTitle title={"About me"} />
      <CustomizeTypography sx={{ fontSize: "18px" }}>
        I am a student from HCMC University of Technology and Education.
      </CustomizeTypography>
      <CustomizeTypography sx={{ fontSize: "18px" }}>
        Currently, I am working on my graduation project to prepare for
        graduation.
      </CustomizeTypography>

      <Box sx={{ mt: 2 }}>
        <AboutTitle title={"Skills"} />
        <Skills skill={"Languages"} data={languagesData} />
        <Skills skill={"Database"} data={databaseData} />
        <Skills skill={"Front-end Developments"} data={frontEndDevelopments} />
        <Skills skill={"Back-end Developments"} data={backEndDevelopments} />
        <Skills
          skill={"Mobile App Developments"}
          data={mobileAppDevelopments}
        />
      </Box>
    </Box>
  );
}

export default About;

const AboutTitle = ({ title }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <CustomizeTypography
        sx={{ fontSize: "32px", color: "yellowgreen", fontWeight: "bold" }}
      >
        {title}
        {/* About me */}
      </CustomizeTypography>
      <Box
        sx={{
          ml: 2,
          mt: 1,
          height: 4,
          width: "180px",
          bgcolor: "yellowgreen",
        }}
      />
    </Box>
  );
};
