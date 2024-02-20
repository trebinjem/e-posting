import BoyAnimation from "../pages/BoyAnimation/BoyAnimation";
import ContactUs from "../pages/ContactUs/ContactUs";
import FirstAnimation from "../pages/FirstAnimation/firstAnimation";
import GirlAnimation from "../pages/GirlAnimation/GirlAnimation";
import JobMarketPlace from "../pages/JobMarketPlace/JobMarketPlace";
import Personas from "../pages/Personas/Personas";
import SecondAnimation from "../pages/SecondAnimation/SecondAnimation";
import LandingPage from "../pages/landingPage/landingPage";

export const publicRoutes = [
  { path: "/", element: <LandingPage /> },
  { path: "/contact-us", element: <ContactUs /> },
  { path: "/first", element: <FirstAnimation /> },
  { path: "/second", element: <SecondAnimation /> },
  { path: "/girl", element: <GirlAnimation /> },
  { path: "/boy", element: <BoyAnimation /> },
  { path: "/job-marketplace", element: <JobMarketPlace /> },
  { path: "/personas", element: <Personas /> },
];
