import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StoreIcon from "@mui/icons-material/Store";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";

import { Typography } from "@mui/material";

import Face5Icon from "@mui/icons-material/Face5";
import { theme } from "../../theme/theme";

export default function MobileBottomNavigation() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0); // Track selected icon

  const handleNavigateHomePage = () => {
    navigate("/");
  };

  const handleNavigateSignIn = () => {
    navigate("/sign-in");
  };

  const handleNavigateSearch = () => {
    navigate("/search");
  };

  return (
    <Box>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{ bgcolor: "#000" }}
      >
        {/* Recents */}
        <BottomNavigationAction
          onClick={handleNavigateHomePage}
          // label="Home"
          label={
            <Typography
              sx={{
                color: value === 0 ? theme.palette.text.secondary : "#fff",
                fontSize: "13px",
                fontWeight: value === 0 ? "bold" : "normal", // Bold when selected
              }}
            >
              Home
            </Typography>
          }
          sx={{
            color: "#fff",
            // change color for text
            ".Mui-selected": {
              color: theme.palette.text.secondary,
            },
            ".MuiBottomNavigationAction-label": { fontSize: "14px" },
            fontSize: "16px",
            fontWeight: value === 0 ? "bold" : "normal", // Bold when selected
          }}
          icon={
            <StoreIcon
              sx={{
                // change icon color
                color: value === 0 ? theme.palette.text.secondary : "#fff",
                fontSize: "24px",
              }}
            />
          }
        />

        {/* Favorites */}
        <BottomNavigationAction
          // label="Search"
          onClick={handleNavigateSearch}
          label={
            <Typography
              sx={{
                color: value === 1 ? theme.palette.text.secondary : "#fff",
                fontSize: "13px",
                fontWeight: value === 1 ? "bold" : "normal", // Bold when selected
              }}
            >
              Search
            </Typography>
          }
          sx={{
            color: "#fff",
            // change color for text
            ".Mui-selected": {
              color: theme.palette.text.secondary,
            },
            fontSize: "16px",
            fontWeight: value === 1 ? "bold" : "normal",
          }}
          icon={
            <SearchIcon
              sx={{
                color: value === 1 ? theme.palette.text.secondary : "#fff",
                fontSize: "24px",
              }}
            />
          }
        />

        {/* Nearby */}
        <BottomNavigationAction
          label="Nearby"
          sx={{
            color: "#fff",
            // change color for text
            ".Mui-selected": {
              color: theme.palette.text.secondary,
            },
            fontSize: "16px",
            fontWeight: value === 2 ? "bold" : "normal",
          }}
          icon={
            <LocationOnIcon
              sx={{
                color: value === 2 ? theme.palette.text.secondary : "#fff",
                fontSize: "24px",
              }}
            />
          }
        />

        {/* Sign In */}
      </BottomNavigation>
    </Box>
  );
}
