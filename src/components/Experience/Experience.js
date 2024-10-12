import { Box } from "@mui/material";
import React from "react";
import { AboutTitle } from "../About";
import { CustomizeTypography } from "../CustomizeTypography/CustomizeTypography";
import { useTranslation } from "react-i18next";

function Experience() {
  const { t } = useTranslation("experience");
  return (
    <Box sx={{ mt: 2 }}>
      <AboutTitle title={t("experience.exp")} />
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
            <Box key={index}>
              <li>
                <CustomizeTypography sx={{ fontSize: "18px" }}>
                  {t(`experience.${exp.position}`)}
                </CustomizeTypography>
              </li>
              <li>
                <CustomizeTypography sx={{ fontSize: "18px" }}>
                  {t("experience.responsible")}:
                </CustomizeTypography>
              </li>
              <ul style={{ paddingInlineStart: "20px", marginBlockStart: 0 }}>
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>
                    <CustomizeTypography sx={{ fontSize: "16px" }}>
                      {/* {t(`header.${header.title}`)} */}
                      {t(`experience.${resp.textKey}`)}
                    </CustomizeTypography>
                  </li>
              ))}
              </ul>
            </Box>
          ))}
        </ul>
      </Box>
    </Box>
  );
}

export default Experience;

// const listExperienceText = [
//   {
//     position: "position",

//     responsibilities: [
//       "Developed the website application based on the feedback from the design.",
//       "Met and worked with the design team.",
//       "Got feedback from the design team after completing the tasks.",
//       "Learned, researched, and applied animations to the project.",
//     ],
//   },
// ];

const listExperienceText = [
  {
    position: "position",
    responsibilities: [
      {
        textKey: "responsibility1",
      },
      {
        textKey: "responsibility2",
      },
      {
        textKey: "responsibility3",
      },
      {
        textKey: "responsibility4",
      },
    ],
  },
];
