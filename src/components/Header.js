import {
  Box,
  Container,
  IconButton,
  Tooltip,
  Typography,
  Dialog,
  DialogContent,
  DialogActions,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
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
  const { t, i18n } = useTranslation(["header"]);
  const headers = [
    { title: "Home", exact: true, link: `/${i18n.language}` },
    { title: "Projects", exact: true, link: `/${i18n.language}/my-projects` },
    { title: "Blog", exact: true, link: `/${i18n.language}/blog` },
  ];
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

  // const handleSelectedLanguage = () => {
  //   setEnLanguage(!enLanguage);
  // };

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

  // change language
  const handleChangeLanguage = (lng) => {
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(`/${i18n.language}`, `/${lng}`);
    console.log("newPath: ", newPath);
    navigate(newPath);
    setEnLanguage(!enLanguage);
    i18n.changeLanguage(lng);
  };
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
            onClick={() => navigate("/en")}
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
                {/* {header.title} */}
                {/* translate language in title */}

                {t(`header.${header.title}`)}
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

          {!enLanguage ? (
            // english language
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
              onClick={() => handleChangeLanguage("en")}
            >
              <Tooltip
                title={
                  <Typography
                    sx={{
                      fontSize: "13px",
                      mb: 0,
                    }}
                  >
                    Translate to Vietnamese
                  </Typography>
                }
              >
                <Box
                  sx={{ height: "36px", width: "36px", borderRadius: "50%" }}
                  src={UKFlag}
                  alt="React Image"
                  component={"img"}
                />
              </Tooltip>
            </Box>
          ) : (
            // vietnamese
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
              onClick={() => handleChangeLanguage("vi")}
            >
              <Tooltip
                title={
                  <Typography
                    sx={{
                      fontSize: "13px",
                      mb: 0,
                    }}
                  >
                    Dịch sang tiếng Anh
                  </Typography>
                }
              >
                <Box
                  sx={{ height: "36px", width: "36px", borderRadius: "50%" }}
                  src={VNFlag}
                  alt="React Image"
                  component={"img"}
                />
              </Tooltip>
            </Box>
          )}
          <a
            href={"https://github.com/khoa36isefiw"}
            target="_blank"
            rel="noreferrer"
          >
            <Tooltip
              title={
                <Typography
                  sx={{
                    fontSize: "13px",
                    mb: 0,
                  }}
                >
                  {/* My Repository */}
                  {t("github")}
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
            onClick={() => setMenuOpen(true)}
          >
            <MenuIcon sx={{ fontSize: "32px" }} />
          </IconButton>
        )}

        {/* Mobile Modal */}
        <Dialog open={menuOpen} onClose={() => setMenuOpen(false)} fullScreen>
          <DialogContent sx={{ bgcolor: "white", padding: 4 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 3,
              }}
            >
              <Typography sx={{ fontSize: "24px", fontWeight: "bold" }}>
                Menu
              </Typography>
              <IconButton onClick={() => setMenuOpen(false)}>
                <CloseIcon sx={{ fontSize: "32px" }} />
              </IconButton>
            </Box>

            {headers.map((header, index) => (
              <Typography
                key={index}
                sx={{
                  fontSize: "18px",
                  mb: 2,
                  "&:hover": {
                    cursor: "pointer",
                    color: blue[600],
                  },
                }}
                onClick={() => {
                  navigate(header.link);
                  setMenuOpen(false);
                }}
              >
                {/* {t(`header.${header.title}`)} */}
                {t(`header.${header.title}`)}
              </Typography>
            ))}
          </DialogContent>
          <DialogActions>
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
            {/* mobile */}
            {!enLanguage ? (
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
                onClick={() => handleChangeLanguage("en")}
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
                onClick={() => handleChangeLanguage("vi")}
              >
                <Box
                  sx={{ height: "36px", width: "36px", borderRadius: "50%" }}
                  src={VNFlag}
                  alt="React Image"
                  component={"img"}
                />
              </Box>
            )}
            <a
              href={"https://github.com/khoa36isefiw"}
              target="_blank"
              rel="noopener noreferrer"
            >
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
                <IconButton
                  sx={{ padding: 0, ml: 2, border: "1px solid #ccc" }}
                >
                  <GitHubIcon sx={{ fontSize: "40px", color: "black" }} />
                </IconButton>
              </Tooltip>
            </a>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
}

export default Header;
