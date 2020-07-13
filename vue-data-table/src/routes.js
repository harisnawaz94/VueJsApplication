import Home from "./components/Home";
import Main from "./components/Main";
import NotFound from "./components/NotFound";

/**
 * Loading respective routes and Handling exception
 */
export default [
  {
    path: "/",
    component: Home,
    name: "home",
  },
  {
    path: "/Main",
    component: Main,
    name: "main",
  },
  {
    path: "*",
    component: NotFound,
  },
];
