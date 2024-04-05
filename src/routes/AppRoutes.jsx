import BoyAnimation from '../pages/BoyAnimation/BoyAnimation';
import ContactUs from '../pages/ContactUs/ContactUs';
import FirstAnimation from '../pages/FirstAnimation/firstAnimation';
import GirlAnimation from '../pages/GirlAnimation/GirlAnimation';
import JobMarketPlace from '../pages/JobMarketPlace/JobMarketPlace';
import Personas from '../pages/Personas/Personas';
import SecondAnimation from '../pages/SecondAnimation/SecondAnimation';
import LandingPage from '../pages/landingPage/landingPage';
import ResourcesMarketplace from '../pages/ResourceMarketPlace/ResourcesMarketplace';
import HowTo from '../pages/HowTo/HowTo';
import PrivacyPolicy from '../pages/PrivacyPoliyc/PrivacyPolicy';
import Terms from '../pages/Terms-Use/Terms';
import Unsubscribe from '../pages/Unsubscribe/Unsubscribe';
import Faq from '../pages/FAQ/Faq';
import OurStory from '../pages/OurStory/OurStory';
import Animations from '../pages/Animations/Animations';

export const publicRoutes = [
	{ path: '/', element: <LandingPage /> },
	{ path: '/contact-us', element: <ContactUs /> },
	{ path: '/first', element: <FirstAnimation /> },
	{ path: '/second', element: <SecondAnimation /> },
	{ path: '/girl', element: <GirlAnimation /> },
	{ path: '/boy', element: <BoyAnimation /> },
	{ path: '/job-marketplace', element: <JobMarketPlace /> },
	{ path: '/personas', element: <Personas /> },
	{ path: '/animations', element: <Animations /> },

	// add new pages here
	{ path: '/resources-marketplace', element: <ResourcesMarketplace /> },
	{ path: '/how-to', element: <HowTo /> },
	{ path: '/privacy-policy', element: <PrivacyPolicy /> },
	{ path: '/terms-services', element: <Terms /> },
	{ path: '/unsubscribe', element: <Unsubscribe /> },
	{ path: '/faq', element: <Faq /> },
	{ path: '/our-story', element: <OurStory /> },
];
