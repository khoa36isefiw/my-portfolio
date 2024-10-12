import { Navigate, useLocation, useParams } from "react-router-dom";
import Blog from "./components/Blog/Blog";
import Home from "./components/Home";
import Projects from "./components/Projects";
import DefaultLayout from "./layouts/DefaultLayout";

// // not sign into this website
// const publicRoutes = [
//   { path: "/en", component: Home, layout: DefaultLayout },
//   { path: "/en/blog", component: Blog, layout: DefaultLayout },

//   { path: "/vi", component: Home, layout: DefaultLayout },
//   { path: "/vi/blog", component: Blog, layout: DefaultLayout },

//   {
//     path: "/my-projects",
//     component: Projects,
//     layout: DefaultLayout,
//   },
// ];

const publicRoutes = [
  {
    path: "/:lang",
    component: Home,
    layout: DefaultLayout,
  },
  {
    path: "/:lang/blog",
    component: Blog,
    layout: DefaultLayout,
  },
  {
    path: "/:lang/my-projects",
    component: Projects,
    layout: DefaultLayout,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
