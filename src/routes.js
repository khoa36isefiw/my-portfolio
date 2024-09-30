import About from "./components/About";
import Blog from "./components/Blog/Blog";
import Home from "./components/Home";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import Projects from "./components/Projects";
import DefaultLayout from "./layouts/DefaultLayout";

// not sign into this website
const publicRoutes = [
  { path: "/", component: Home, layout: DefaultLayout },
  { path: "/blog", component: Blog, layout: DefaultLayout },
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
