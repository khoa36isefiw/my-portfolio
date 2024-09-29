import About from "./components/About";
import Home from "./components/Home";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import Projects from "./components/Projects";
import DefaultLayout from "./layouts/DefaultLayout";

// not sign into this website
const publicRoutes = [
  { path: "/", component: Home, layout: DefaultLayout },
  { path: "/about-me", component: About, layout: DefaultLayout },
  {
    path: "/my-projects",
    component: Projects,
    layout: DefaultLayout,
  },
  {
    path: "/my-projects/:name",
    component: ProjectDetails,
    layout: DefaultLayout,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
