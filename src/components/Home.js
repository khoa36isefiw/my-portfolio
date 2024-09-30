import { Box, Container } from "@mui/material";
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
          alignItems: "center",
          justifyContent: "center",
          [mobileScreen]: {
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
          <Box>
            <CustomizeTypography sx={{ fontSize: 28, fontWeight: "600" }}>
              Hello There! <br /> I'm Khoa,
            </CustomizeTypography>
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
                  fontSize: 50,
                },
              }}
            >
              Front-end Developer
            </CustomizeTypography>
          </Box>
        </Grid>
        {/* <Grid item size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
          <Avatar
            src={null}
            alt="My Image"
            sx={{
              objectFit: "cover",
              height: "100%",
              width: "100%",
              borderRadius: "31% 69% 25% 75% / 70% 35% 65% 30%",
              [mobileScreen]: {
                width: "100%",
                height: "80%",
              },
            }}
          />
        </Grid> */}
      </Grid>
      <About />
    </Container>
  );
}

export default Home;
