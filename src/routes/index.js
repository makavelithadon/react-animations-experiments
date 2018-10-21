import ReactMotion from "components/ReactMotion";
import Motion from "containers/ReactMotion/Motion";
import TransitionMotion from "components/ReactMotion/TransitionMotion";
import ReactPose from "components/ReactPose";
import ReactSpring from "components/ReactSpring";

export default [
  {
    path: "/react-motion",
    name: "ReactMotion",
    component: ReactMotion,
    subRoutes: [
      {
        path: "react-motion#motion",
        name: "<Motion />",
        component: Motion
      },
      {
        path: "react-motion#transition-motion",
        name: "<TransitionMotion />",
        component: TransitionMotion
      }
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
