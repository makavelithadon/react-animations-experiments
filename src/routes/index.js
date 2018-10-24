import Home from "components/Home/index";
import ReactMotion from "components/ReactMotion";
import Motion from "components/ReactMotion/Motion";
import ReactPose from "components/ReactPose";
import ReactSpring from "components/ReactSpring";

export default [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/react-motion",
    name: "ReactMotion",
    component: ReactMotion,
    subRoutes: [
      {
        path: "#motion",
        name: "<Motion />",
        component: Motion
      }
      /* {
        path: "/react-motion#transition-motion",
        name: "<TransitionMotion />",
        component: TransitionMotion
      } */
    ]
  },
  {
    path: "/react-pose",
    name: "Pose",
    component: ReactPose
  },
  {
    path: "/react-spring",
    name: "react-spring",
    component: ReactSpring
  }
];
