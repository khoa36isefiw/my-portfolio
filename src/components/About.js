import { Box, Grid2 } from "@mui/material";
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
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation(["about"]);
  return (
    <Box
      sx={{
        [mobileScreen]: {
          width: "100%",
        },
      }}
    >
      <AboutTitle title={t("about.about_me")} />
      <ul
        style={{
          marginBlockStart: 0,
          marginBlockEnd: 0,
          paddingInlineStart: "20px",
        }}
      >
        <li>
          <CustomizeTypography
            sx={{
              fontSize: "18px",
            }}
          >
            {/* I am a student from HCMC University of Technology and Education. */}
            {t("about.university")}
          </CustomizeTypography>
        </li>
        <li>
          <CustomizeTypography sx={{ fontSize: "18px" }}>
            {t("about.currently")}
            {/* Currently, I am working on my graduation project to prepare for
        graduation. */}
          </CustomizeTypography>
        </li>
      </ul>

      <Experience />

      <Box sx={{ mt: 2 }}>
        <AboutTitle title={t("skills")} />
        {/* 
        grid  */}
        <Grid2 container spacing={4}>
          <Grid2 item size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
            <Skills skill={"Languages"} data={languagesData} />
          </Grid2>

          <Grid2 item size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
            <Skills
              skill={"Front-end Developments"}
              data={frontEndDevelopments}
            />
          </Grid2>

          <Grid2 item size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
            <Skills
              skill={"Back-end Developments"}
              data={backEndDevelopments}
            />
          </Grid2>
          <Grid2 item size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
            <Skills skill={"Database"} data={databaseData} />
          </Grid2>
          <Grid2 item size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
            <Skills
              skill={"Mobile App Developments"}
              data={mobileAppDevelopments}
            />
          </Grid2>
          <Grid2 item size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
            <Skills skill={"Version Control"} data={versionControl} />
          </Grid2>
        </Grid2>
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
