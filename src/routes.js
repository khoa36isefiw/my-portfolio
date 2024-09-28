import Home from "./components/Home";
import DefaultLayout from "./layouts/DefaultLayout";

// not sign into this website
const publicRoutes = [{ path: "/", component: Home, layout: DefaultLayout }];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
