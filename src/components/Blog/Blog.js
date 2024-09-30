import { Container } from "@mui/material";
import React from "react";
import { CustomizeTypography } from "../CustomizeTypography/CustomizeTypography";

function Blog() {
  return (
    <Container>
      <CustomizeTypography sx={{ fontSize: 24 }}>
        The page is still under construction...
      </CustomizeTypography>
    </Container>
  );
}

export default Blog;
