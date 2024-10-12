import Blog from "./components/Blog/Blog";
import Home from "./components/Home";
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
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
