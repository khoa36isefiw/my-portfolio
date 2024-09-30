import { Box, Button, Container } from "@mui/material";
import React, { useState } from "react";
import { CustomizeTypography } from "./CustomizeTypography/CustomizeTypography";
import ShareIcon from "@mui/icons-material/Share";
import GitHubIcon from "@mui/icons-material/GitHub";
import Grid2 from "@mui/material/Grid2";
import { mobileScreen, tabletScreen, theme } from "../theme/theme";
import { projectsData } from "../data/projectsData";

function Projects() {
  const [filter, setFilter] = useState("website");

  const handleWebsiteFilterSelected = () => {
    setFilter("website");
  };
  const handleMobileAppFilterSelected = () => {
    setFilter("mobile");
  };
  return (
    <Container
      sx={{
        px: 2,
        [mobileScreen]: {
          px: 0,
        },
      }}
    >
      <CustomizeTypography sx={{ fontSize: "20px", [mobileScreen]: { px: 2 } }}>
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
      <Box
        sx={{
          px: 8,
          my: 4,
          [tabletScreen]: {
            px: 0,
            my: 0,
          },
          [mobileScreen]: {
            px: 0,
            my: 0,
          },
        }}
      >
        <ProjectList projectsData={projectsData} filter={filter} />
      </Box>
    </Container>
  );
}

export default Projects;

const ProjectList = ({ projectsData, filter }) => {
  // render project list: webiste and mobile application
  const listProject = projectsData.filter(
    (item) => item.projectType === filter
  );

  console.log("project type is: ", filter, " and it data: ", listProject);
  return (
    <React.Fragment>
      {listProject.map((data) => (
        <Grid2
          key={data.projectId}
          container
          sx={{
            borderRadius: 4,
            height: 450,

            boxShadow: "rgba(0, 0, 0, 0.35) 0px 0px 15px",
            my: 4,
            [tabletScreen]: {
              height: "100%",
              width: "100%",
              my: 4,
            },
            [mobileScreen]: {
              height: "auto",
              width: "100%",
              borderRadius: 0,
              my: 8,
              flexDirection: "column-reverse",
            },
          }}
        >
          <Grid2 item size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
            <Box
              sx={{
                height: "100%",
                width: "100%",
                bgcolor: "#fff",
                display: "flex",
                flexDirection: "column",
                alignContent: "flex-start",
                justifyContent: "center",
                borderTopLeftRadius: 16,
                borderBottomLeftRadius: 16,
                [mobileScreen]: {
                  borderRadius: 0,
                },
              }}
            >
              <CustomizeTypography
                sx={{
                  fontSize: 32,
                  color: theme.palette.secondaryColor,
                  fontWeight: "bold",
                  mb: 1,
                  mx: 4,
                }}
              >
                {/* Gimme Stores */}
                {data.projectName}
              </CustomizeTypography>

              <CustomizeTypography
                sx={{ fontSize: "20px", mb: 1, mx: 4, width: "90%" }}
              >
                {/* Developing an e-commerece website to selling shoes */}
                <strong>Description:</strong> {data.desc}
              </CustomizeTypography>
              <CustomizeTypography
                sx={{
                  fontSize: "18px",
                  mb: 1,
                  mx: 4,
                  width: "90%",
                }}
              >
                <strong>Technologies:</strong> {data.technologies.join(", ")}
              </CustomizeTypography>
              <Box
                sx={{
                  mx: 4,
                  mt: 2,
                }}
              >
                {/* Link to live preview */}
                {data.linkDeployed && (
                  <a href={data.linkDeployed} target="_blank" rel="noreferrer">
                    <Button
                      startIcon={<ShareIcon />}
                      sx={{
                        color: "black",
                        fontSize: "18px",
                        textTransform: "initial",
                        textDecoration: "underline",

                        mr: 4,
                        "&:hover": {
                          bgcolor: "transparent",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Live Preview
                    </Button>
                  </a>
                )}

                {/* source code */}
                <a href={data.linkSourceCode} target="_blank" rel="noreferrer">
                  <Button
                    startIcon={<GitHubIcon />}
                    sx={{
                      color: "black",
                      fontSize: "18px",
                      textTransform: "initial",
                      textDecoration: "underline",
                      "&:hover": {
                        bgcolor: "transparent",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    View Code
                  </Button>
                </a>
              </Box>
            </Box>
          </Grid2>
          <Grid2
            item
            size={{ xs: 12, sm: 6, md: 6, lg: 6 }}
            sx={
              {
                // [mobileScreen]: {
                //   height: "300px",
                // },
              }
            }
          >
            <Box
              component={"img"}
              src={data.projectImage}
              alt="Gimme Shoes Project"
              sx={{
                borderRadius: 0,
                borderTopRightRadius: 16,
                borderBottomRightRadius: 16,
                height: "100%",
                width: "100%",
                objectFit: "cover",
                [tabletScreen]: {
                  borderRadius: 0,
                  height: "100%",
                  width: "100%",
                },
                [mobileScreen]: {
                  borderRadius: 0,
                  height: "300px",
                  width: "100%",
                  borderTop: "1px solid #ccc",
                },
              }}
            />
          </Grid2>
        </Grid2>
      ))}
    </React.Fragment>
  );
};
