import { ArrowBackIos } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import React from "react";
import { theme } from "../../theme/theme";
import { yellow } from "@mui/material/colors";

function ProjectDetails() {
  return (
    <Box>
      <Button
        startIcon={<ArrowBackIos />}
        onClick={() => window.history.back(-1)}
        sx={{
          // bgcolor: theme.palette.admin.bgColor,
          color: "black",
          fontSize: "18px",
          textTransform: "initial",
          fontWeight: "bold",
          "&:hover": {
            bgcolor: "transparent",
            color: theme.palette.blue600,
          },
        }}
      >
        List Projects
      </Button>
    </Box>
  );
}

export default ProjectDetails;
