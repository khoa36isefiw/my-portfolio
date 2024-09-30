import { Avatar, Box, IconButton, Tooltip, Typography } from "@mui/material";
import React from "react";
import TagIcon from "@mui/icons-material/Tag";
import { CustomizeTypography } from "../CustomizeTypography/CustomizeTypography";
import { theme } from "../../theme/theme";

function Skills({ skill, data }) {
  return (
    <Box sx={{ mb: 2 }}>
      <Box>
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
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {data.map((language, index) => (
          <Tooltip
            key={index}
            title={
              <Typography
                sx={{
                  fontSize: "13px",
                  mb: 0,
                }}
              >
                {language.name}
              </Typography>
            }
          >
            <Avatar
              src={language.image}
              alt={language.name}
              sx={{
                mt: 1,
                mr: 2,
                border: "1px solid #ccc",
                height: "48px",
                width: "48px",
                objectFit: "fill",
                // borderRadius: 0,
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            />
          </Tooltip>
        ))}
      </Box>
    </Box>
  );
}

export default Skills;
