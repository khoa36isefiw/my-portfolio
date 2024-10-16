import "./App.css"; // reset css at this file
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import { publicRoutes } from "./routes";
import DefaultLayout from "./layouts/DefaultLayout";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    if (window.location.pathname === "/") {
      window.location.replace("/en");
    }
  }, []);
  return (
    <Box>
      <Router>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            const Layout = route.layout || DefaultLayout;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
