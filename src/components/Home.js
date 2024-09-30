import { Avatar, Box, Container } from "@mui/material";
import React from "react";
import { CustomizeTypography } from "./CustomizeTypography/CustomizeTypography";
import { mobileScreen, theme } from "../theme/theme";
import back from "../assets/images/rengoku_back.jpeg";
import Grid from "@mui/material/Grid2";

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
        <Grid item size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
          <Box>
            <CustomizeTypography sx={{ fontSize: 28, fontWeight: "600" }}>
              Hello I'm Khoa,
            </CustomizeTypography>
            <CustomizeTypography
              sx={{
                fontSize: 100,
                color: theme.palette.secondaryColor,
                fontWeight: "bold",
                width: "100%",
                [mobileScreen]: {
                  fontSize: 50,
                },
              }}
            >
              Front-end Developer
            </CustomizeTypography>
          </Box>
        </Grid>
        <Grid item size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
          <Avatar
            src={back}
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
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
