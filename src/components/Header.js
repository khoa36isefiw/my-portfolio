import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { mobileScreen, tabletScreen, theme } from "../theme/theme";
import reactImage from "../assets/images/physics.png";
import VNFlag from "../assets/images/VN-circle.png";
import UKFlag from "../assets/images/UK.png";

import { useNavigate } from "react-router-dom";
import { blue } from "@mui/material/colors";

function Header() {
  const navigate = useNavigate();
  const [enLanguage, setEnLanguage] = useState(true);
  const [scrollY, setSrollY] = useState(0);
  const headers = [
    { title: "Home", exact: true, link: "/" },
    { title: "About", exact: true, link: "/about-me" },
    { title: "Projects", exact: true, link: "/my-projects" },
  ];

  const handleSelectedLanguage = () => {
    setEnLanguage(!enLanguage);
  };

  // handle scroll event
  const handleSroll = () => {
    setSrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleSroll);

    // remove event
    return () => {
      window.removeEventListener("scroll", handleSroll);
    };
  }, []);
  return (
    <Box
      sx={{
        minHeight: "40px",
        width: "100%",
        position: "sticky",
        top: "10px",
        zIndex: 1000,
        [tabletScreen]: {
          minHeight: "80px",
        },
        [mobileScreen]: {
          width: "100%",
          minHeight: "80px",
        },
        // change background when scrolling
        backgroundColor:
          scrollY > 100 ? "rgba(255, 255, 255, 0.9)" : "transparent",
        // add shadow when scrolled
        boxShadow: scrollY > 100 ? "0 4px 10px rgba(0, 0, 0, 0.1)" : "none",
        transition: "background-color 0.3s, box-shadow 0.3s",
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontSize: "56px",
              fontWeight: "bold",
              fontFamily: "EB Garamond",
              color: theme.palette.secondaryColor,
              "&:hover": {
                cursor: "pointer",
              },
            }}
            onClick={() => navigate("/")}
          >
            K
          </Typography>

          {headers.map((header, index) => (
            <Typography
              sx={{
                fontSize: "18px",
                mx: 6,
                color: theme.palette.secondaryColor,
                fontWeight: "bold",
                "&:hover": {
                  cursor: "pointer",
                  color: blue[600],
                },
              }}
              key={index}
              onClick={() => navigate(header.link)}
            >
              {header.title}
            </Typography>
          ))}
        </Box>

        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              height: "40px",
              width: "40px",
              border: "1px solid #ccc",
              borderRadius: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              mr: 2,
            }}
          >
            <Box
              sx={{ height: "36px", width: "36px" }}
              src={reactImage}
              alt="React Image"
              component={"img"}
            />
          </Box>

          {enLanguage ? (
            <Box
              sx={{
                height: "40px",
                width: "40px",
                border: "1px solid #ccc",
                borderRadius: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onClick={handleSelectedLanguage}
            >
              <Box
                sx={{ height: "36px", width: "36px", borderRadius: "50%" }}
                src={UKFlag}
                alt="React Image"
                component={"img"}
              />
            </Box>
          ) : (
            <Box
              sx={{
                height: "40px",
                width: "40px",
                border: "1px solid #ccc",
                borderRadius: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onClick={handleSelectedLanguage}
            >
              <Box
                sx={{ height: "36px", width: "36px", borderRadius: "50%" }}
                src={VNFlag}
                alt="React Image"
                component={"img"}
              />
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default Header;
