import { lazy } from "react";

const Home = lazy(() => import("components/Home/index"));
const ReactMotion = lazy(() => import("components/ReactMotion"));
const Motion = lazy(() => import("components/ReactMotion/Motion"));
const ReactPose = lazy(() => import("components/ReactPose"));
const ReactSpring = lazy(() => import("components/ReactSpring"));
const Spring = lazy(() => import("components/ReactSpring/Spring"));
const Transition = lazy(() => import("components/ReactSpring/Transition"));

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
    component: ReactSpring,
    subRoutes: [
      {
        path: "#spring",
        name: "<Spring>",
        component: Spring
      },
      {
        path: "#transition",
        name: "<Transition>",
        component: Transition
      }
    ]
  }
];
