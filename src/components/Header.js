import { Box, Container, IconButton, Tooltip, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { mobileScreen, tabletScreen, theme } from "../theme/theme";
import reactImage from "../assets/images/physics.png";
import VNFlag from "../assets/images/VN-circle.png";
import UKFlag from "../assets/images/UK.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { blue } from "@mui/material/colors";
import GitHubIcon from "@mui/icons-material/GitHub";

function Header() {
  const navigate = useNavigate();
  const [enLanguage, setEnLanguage] = useState(true);
  const [scrollY, setSrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 739);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 739);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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
        zIndex: 10,
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
          {!isMobile &&
            headers.map((header, index) => (
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

        <Box sx={{ display: !isMobile ? "flex" : "none" }}>
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
              zIndex: 12,
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
          <a href={"https://github.com/khoa36isefiw"} target="_blank">
            <Tooltip
              title={
                <Typography
                  sx={{
                    fontSize: "13px",
                    mb: 0,
                  }}
                >
                  My Repository
                </Typography>
              }
            >
              <IconButton sx={{ padding: 0, ml: 2, border: "1px solid #ccc" }}>
                <GitHubIcon sx={{ fontSize: "40px", color: "black" }} />
              </IconButton>
            </Tooltip>
          </a>
        </Box>
        {/* Mobile Menu Icon */}
        {isMobile && (
          <IconButton
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        )}

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <Box
            sx={{
              display: { xs: "block", md: "none" },
              position: "absolute",
              top: "60px",
              width: "100%",
              backgroundColor: "white",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              zIndex: 9,
            }}
          >
            {headers.map((header, index) => (
              <Typography
                key={index}
                sx={{
                  padding: "10px",
                  fontSize: "18px",
                  borderBottom: "1px solid #eee",
                  "&:hover": {
                    cursor: "pointer",
                    backgroundColor: "#f1f1f1",
                  },
                }}
                onClick={() => {
                  navigate(header.link);
                  setMenuOpen(false);
                }}
              >
                {header.title}
              </Typography>
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default Header;
