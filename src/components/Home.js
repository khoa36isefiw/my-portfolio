import { Container } from "@mui/material";
import React from "react";
import { CustomizeTypography } from "./CustomizeTypography/CustomizeTypography";
import {
  ipadProScreen,
  mobileScreen,
  tabletScreen,
  theme,
} from "../theme/theme";
import Grid from "@mui/material/Grid2";
import About from "./About";

function Home() {
  return (
    <Container>
      <Grid
        container
        sx={{
          mt: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          [mobileScreen]: {
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        {/* Correct Grid item usage */}
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <CustomizeTypography sx={{ fontSize: 28, fontWeight: "600" }}>
            Hello There! <br /> I'm Khoa,
          </CustomizeTypography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <CustomizeTypography
            sx={{
              fontSize: 100,
              color: theme.palette.secondaryColor,
              fontWeight: "bold",
              width: "100%",
              [ipadProScreen]: {
                fontSize: 80,
              },
              [tabletScreen]: {
                fontSize: 70,
              },
              [mobileScreen]: {
                fontSize: 36,
              },
            }}
          >
            Front-end Developer
          </CustomizeTypography>
        </Grid>
      </Grid>
      <About />
    </Container>
  );
}

export default Home;
