import { Avatar, Box, Button, Container } from "@mui/material";
import React, { useState } from "react";
import { CustomizeTypography } from "./CustomizeTypography/CustomizeTypography";
import pShoes from "../assets/images/shoes.webp";
import Grid2 from "@mui/material/Grid2";
import { theme } from "../theme/theme";
import { projectsData } from "../data/projectsData";
import { useNavigate } from "react-router-dom";

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
        <ProjectList projectsData={projectsData} filter={filter} />
      </Box>
    </Container>
  );
}

export default Projects;

const ProjectList = ({ projectsData, filter }) => {
  const navigate = useNavigate();
  // render project list: webiste and mobile application
  const listProject = projectsData.filter(
    (item) => item.projectType === filter
  );

  const handleNavigateProjectDetail = (projectName) => {
    navigate(`/my-projects/${projectName}`);
    console.log("navigate to: ", `/my-projects/${projectName}`);
  };

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
          }}
        >
          <Grid2 item size={{ lg: 6 }}>
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
                {data.desc}
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
                  mx: 4,
                  mt: 1,
                }}
                onClick={() => {
                  handleNavigateProjectDetail(data.projectName);
                }}
              >
                View Project
              </Button>
            </Box>
          </Grid2>
          <Grid2 item size={{ lg: 6 }} sx={{ zIndex: 999 }}>
            <Avatar
              src={data.projectImage}
              alt="Gimme Shoes Project"
              sx={{
                zIndex: 999,
                borderRadius: 0,
                borderTopRightRadius: 16,
                borderBottomRightRadius: 16,

                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </Grid2>
        </Grid2>
      ))}
    </React.Fragment>
  );
};
