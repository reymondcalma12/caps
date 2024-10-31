import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Locations from "./pages/Locations";
import Contacts from "./pages/Contacts";
import Delivery from "./pages/Services/Delivery";
import Prenatal from "./pages/Services/Prenatal";
import Immunization from "./pages/Services/Immunization";
import Tetanus from "./pages/Services/Tetanus";
import NewbornScreening from "./pages/Services/NewbornScreening";
import NewbornHearing from "./pages/Services/NewbornHearing";
import FamilyPlanning from "./pages/Services/FamilyPlanning";
import Gallery from "./pages/Gallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      //Services
      {
        path: "/prenatal",
        element: <Prenatal />,
      },
      {
        path: "/delivery",
        element: <Delivery />,
      },
      {
        path: "/immunization",
        element: <Immunization />,
      },
      {
        path: "/tetanus",
        element: <Tetanus />,
      },
      {
        path: "/newborn-screening",
        element: <NewbornScreening />,
      },
      {
        path: "/newborn-hearing",
        element: <NewbornHearing />,
      },
      {
        path: "/family-planning",
        element: <FamilyPlanning />,
      },
      {
        path: "/locations",
        element: <Locations />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
    ],
  },
]);

export default router;
