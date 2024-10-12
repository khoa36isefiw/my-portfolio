import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import TagIcon from "@mui/icons-material/Tag";
import { CustomizeTypography } from "../CustomizeTypography/CustomizeTypography";
import { mobileScreen, tabletScreen, theme } from "../../theme/theme";

function Skills({ skill, data }) {
  return (
    <Box
      sx={{
        mb: 2,
        mr: 2,

        minHeight: "250px",
        border: "1px solid #ccc",
        [tabletScreen]: {
          width: "100%",
        },
        [mobileScreen]: {
          width: "100%",
          mr: 0,
        },
      }}
    >
      {/* title for skill */}

      <Box sx={{ borderBottom: "1px solid #ccc" }}>
        <CustomizeTypography
          sx={{
            fontSize: "24px",
            color: theme.palette.secondaryColor,
            fontWeight: "bold",
          }}
        >
          <IconButton sx={{ padding: 0 }}>
            <TagIcon
              sx={{ fontSize: "24px", color: theme.palette.secondaryColor }}
            />
          </IconButton>
          {skill}
        </CustomizeTypography>
      </Box>
      <Box>
        {data.map((language, index) => (
          <ul key={index}>
            <li>
              <Typography
                sx={{
                  fontSize: "16px",
                }}
              >
                {language.name}
              </Typography>
            </li>
          </ul>
        ))}
      </Box>
    </Box>
  );
}

export default Skills;
