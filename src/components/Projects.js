import { Avatar, Box, Button, Container } from "@mui/material";
import React, { useState } from "react";
import { CustomizeTypography } from "./CustomizeTypography/CustomizeTypography";
import pShoes from "../assets/images/shoes.webp";
import Grid2 from "@mui/material/Grid2";
import { theme } from "../theme/theme";

function Projects() {
  const [filter, setFilter] = useState("website");
  const handleWebsiteFilterSelected = () => {
    setFilter("website");
  };
  const handleMobileAppFilterSelected = () => {
    setFilter("mobile");
  };
  return (
    <Container>
      <CustomizeTypography sx={{ fontSize: "20px" }}>
        The list of projects below has been made by my team and me while we are
        studying at the university.
      </CustomizeTypography>
      {/* filter button */}
      <Box sx={{ my: 4 }}>
        <Button
          variant={filter === "website" ? "contained" : "outlined"}
          fullWidth={false}
          sx={{
            width: 150,
            textTransform: "initial",
            fontSize: "16px",
            borderRadius: 10,
            border: "1px solid #03045E",
            color: filter === "website" ? "whitesmoke" : "#03045E",
            bgcolor: filter === "website" ? theme.palette.blue600 : null,
            mr: 2,
          }}
          onClick={handleWebsiteFilterSelected}
        >
          Websites
        </Button>
        <Button
          variant={filter === "mobile" ? "contained" : "outlined"}
          fullWidth={false}
          sx={{
            width: 150,
            textTransform: "initial",
            fontSize: "16px",
            borderRadius: 10,
            border: "1px solid #03045E",
            color: filter === "mobile" ? "whitesmoke" : "#03045E",
            bgcolor: filter === "mobile" ? theme.palette.blue600 : null,
          }}
          onClick={handleMobileAppFilterSelected}
        >
          Mobile App
        </Button>
      </Box>
      <Box sx={{ px: 8, my: 4 }}>
        <Grid2
          container
          sx={{
            borderRadius: 4,
            height: 450,
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 0px 15px",
          }}
        >
          <Grid2 item size={{ lg: 6 }}>
            <Box
              sx={{
                height: "100%",
                width: "100%",
                bgcolor: "#fff",
                borderRadius: 4,
                display: "flex",
                flexDirection: "column",
                alignContent: "flex-start",
                justifyContent: "center",
                pl: 4,
              }}
            >
              <CustomizeTypography
                sx={{
                  fontSize: 32,
                  color: theme.palette.secondaryColor,
                  fontWeight: "bold",
                  mb: 1,
                }}
              >
                Gimme Stores
              </CustomizeTypography>
              <CustomizeTypography
                sx={{ fontSize: "20px", mb: 1, width: "90%" }}
              >
                Developing an e-commerece website to selling shoes
              </CustomizeTypography>
              <Button
                variant="outlined"
                fullWidth={false}
                sx={{
                  width: 150,
                  textTransform: "initial",
                  fontSize: "16px",
                  borderRadius: 10,
                  border: "1px solid #03045E",
                  color: "#03045E",
                }}
              >
                View Project
              </Button>
            </Box>
          </Grid2>
          <Grid2 item size={{ lg: 6 }}>
            <Avatar
              src={pShoes}
              alt="Gimme Shoes Project"
              sx={{
                borderRadius: 0,
                borderTopRightRadius: 4,
                borderBottomRightRadius: 4,

                height: "100%",
                width: "100%",
              }}
            />
          </Grid2>
        </Grid2>
      </Box>
    </Container>
  );
}

export default Projects;
