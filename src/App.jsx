import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer";
import { lazy, Suspense } from "react";
import Loader from "./Components/Loader/Loader";
import Terms from "./Pages/Site/Terms.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";

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