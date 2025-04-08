import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer";
import { lazy, Suspense } from "react";
import Loader from "./Components/Loader/Loader";
import Terms from "./Pages/Site/Terms.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";
import ContactPage from "./Pages/Page/Contact/ContactPage.jsx";
import ContentWriting from "./Pages/Page/Services/ContentWriting.jsx";
import Dev from "./Pages/Page/Services/Dev.jsx";
import EcomStrategy from "./Pages/Page/Services/EcomStrategy.jsx";
import Smo from "./Pages/Page/Services/Smo.jsx";
import Cms from "./Pages/Page/Services/Cms.jsx";
import FullStackDevelopement from "./Pages/Page/Services/FullStackDevelopement.jsx";
import Learn from "./Pages/Home/Learn.jsx";
import Quote from "./Pages/Home/Quote.jsx";

const HomeLayout = lazy(() => import("./Components/HomeLayout.jsx"));
const NotFound = lazy(() => import("./Components/NotFound"));
const Privacy = lazy(() => import("./Pages/Site/Privacy.jsx"));
const Policy = lazy(() => import("./Pages/Site/Policy.jsx"));
const Copyright = lazy(() => import("./Pages/Site/Copyright.jsx"));

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomeLayout />} />
            <Route path="/contact-page" element={<ContactPage />} />
            <Route path="/learn-more" element={<Learn />} />
            <Route path="/quote-page" element={<Quote />} />

            <Route path="/services/content-writing" element={<ContentWriting />} />
            <Route path="/services/mobile-web-design-dev" element={<Dev />} />
            <Route path="/services/ecommerce-strategy" element={<EcomStrategy />} />
            <Route path="/services/social-media-campaigns" element={<Smo />} />
            <Route path="/services/content-management" element={<Cms />} />
            <Route path="/services/full-stack-development" element={<FullStackDevelopement />} />



            <Route path="/terms-of-use" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/copyright" element={<Copyright />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App