import { Box } from "@mui/material";
import React from "react";
import { CustomizeTypography } from "./CustomizeTypography/CustomizeTypography";

import Skills from "./Skills/Skills";
import {
  languagesData,
  databaseData,
  frontEndDevelopments,
  backEndDevelopments,
  mobileAppDevelopments,
  versionControl,
} from "../data/skillsData";
import { mobileScreen, theme } from "../theme/theme";
import Experience from "./Experience/Experience";

function About() {
  return (
    <Box
      sx={{
        [mobileScreen]: {
          width: "100%",
        },
      }}
    >
      <AboutTitle title={"About me"} />
      <CustomizeTypography
        sx={{
          fontSize: "18px",
        }}
      >
        I am a student from HCMC University of Technology and Education.
      </CustomizeTypography>
      <CustomizeTypography sx={{ fontSize: "18px" }}>
        Currently, I am working on my graduation project to prepare for
        graduation.
      </CustomizeTypography>
      <Experience />

      <Box sx={{ mt: 2 }}>
        <AboutTitle title={"Skills"} />
        <Skills skill={"Languages"} data={languagesData} />

        <Skills skill={"Front-end Developments"} data={frontEndDevelopments} />
        <Skills skill={"Back-end Developments"} data={backEndDevelopments} />
        <Skills skill={"Database"} data={databaseData} />
        <Skills
          skill={"Mobile App Developments"}
          data={mobileAppDevelopments}
        />

        <Skills skill={"Version Control"} data={versionControl} />
      </Box>
    </Box>
  );
}

export default About;

export const AboutTitle = ({ title }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        color: theme.palette.secondaryColor,
        [mobileScreen]: {
          width: "90%",
        },
      }}
    >
      <CustomizeTypography sx={{ fontSize: "32px", fontWeight: "bold" }}>
        {title}.{/* About me */}
      </CustomizeTypography>
    </Box>
  );
};
