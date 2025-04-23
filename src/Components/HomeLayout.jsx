import { Helmet } from "react-helmet-async"
import About from "../Pages/Home/About"
import Banner from "../Pages/Home/Banner"
// import Contact from "../Pages/Home/Contact"
import Projects from "../Pages/Home/Projects"
import Services from "../Pages/Home/Services"
import UserOption from "./UserOption"
import Blog from "../Pages/Home/Blog"
import ContactForm from "../Pages/Home/Quote"
import DigitalAgencyProcess from "../Pages/Home/Digital"


const HomeLayout = () => {
  return (
    <>
      <Helmet>
        <title>Ananta Technologies | Innovative Web & Software Solutions</title>
        <meta name="description" content="Ananta Technologies offers tailored web development, cloud solutions, data analytics, and digital marketing services to drive your business growth." />
        <meta name="keywords" content="Ananta Technologies, Web Development, Cloud Solutions, Data Analytics, Digital Marketing, UI/UX Design" />
        <meta name="author" content="Ananta Technologies" />
        <meta property="og:title" content="Ananta Technologies | Empowering Your Business Digitally" />
        <meta property="og:description" content="We provide tailored IT solutions including web development, mobile apps, and cloud services to accelerate your business growth." />
        <meta property="og:image" content="/assets/brand-logo.png" />
        <meta property="og:url" content="https://www.anantatechnologies.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.anantatechnologies.com/" />
      </Helmet>
      <Banner />
      <About />
      <Services />
      <Projects />
      <DigitalAgencyProcess/>
      <Blog/>
      <ContactForm/>
      {/* <Contact /> */}
      <UserOption />
    </>
  )
}

export default HomeLayout







// < div className = "min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center" >
//   <h1 className="text-5xl font-bold text-white drop-shadow-lg">
//     🚀 Tailwind CSS v4 + React + Vite 💖
//   </h1>
//     </div >