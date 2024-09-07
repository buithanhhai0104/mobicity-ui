import Home from "../pages/Home/Home";
import Amg from "../pages/AMG/Amg";
import Maybach from "../pages/Maybach/Maybach";

const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/amg",
    component: Amg,
  },
  {
    path: "/maybach",
    component: Maybach,
  },
];
const privateRoutes = [];

export { privateRoutes, publicRoutes };
