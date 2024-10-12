import { Container } from "@mui/material";
import React from "react";
import { CustomizeTypography } from "../CustomizeTypography/CustomizeTypography";
import { useTranslation } from "react-i18next";

function Blog() {
  const { t } = useTranslation("blog");
  return (
    <Container>
      <CustomizeTypography sx={{ fontSize: 24 }}>
        {t("blog.des")}
      </CustomizeTypography>
    </Container>
  );
}

export default Blog;
