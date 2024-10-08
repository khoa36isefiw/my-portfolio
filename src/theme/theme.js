import { createTheme } from "@mui/material";
import { blue } from "@mui/material/colors";
export const theme = createTheme({
  palette: {
    bgcolor: "#FBF8CC",
    primaryColor: "#F5EE84",
    secondaryColor: "#03045E",
    thirth: "#474306",
    blue600: blue[600],
  },
  breakpoints: {
    values: {
      xs: 0, // Extra small devices (phones, 600px and down)
      sm: 739, // 600 or 739 - Small devices (portrait tablets and large phones, 600px and up)
      md: 740, // Medium devices (landscape tablets, 768px and up) --> tablet
      lg: 1023, // Large devices (laptops/desktops, 1024px and up) --> ipad pro
      xl: 1025, // Extra large devices (large laptops and desktops, 1025px and up)
    },
  },
});

export const mobileScreen = `@media only screen and (max-width: ${theme.breakpoints.values.sm}px)`;

export const tabletScreen = `@media only screen and (min-width: ${theme.breakpoints.values.md}px) and (max-width: ${theme.breakpoints.values.lg}px)`;

// put this size in the first when make responsive
export const ipadProScreen = `@media only screen and (max-width: ${
  theme.breakpoints.values.xl - 1
}px)`;
export const desktopScreen = `@media only screen and (min-width: ${
  theme.breakpoints.values.xl - 1
}px)`;
