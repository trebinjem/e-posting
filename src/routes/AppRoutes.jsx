import ContactUs from "../pages/ContactUs/ContactUs";
import LandingPage from "../pages/landingPage/landingPage";

export const publicRoutes = [
  { path: "/", element: <LandingPage /> },
  { path: "/contact-us", element: <ContactUs /> },
];
