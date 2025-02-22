import About from "../Pages/Home/About"
import Banner from "../Pages/Home/banner"
import Contact from "../Pages/Home/Contact"
import Projects from "../Pages/Home/Projects"
import Services from "../Pages/Home/Services"


const HomeLayout = () => {
  return (
    <>
      <Banner />
      <About />
      <Services />
      <Projects />
      <Contact />
    </>
  )
}

export default HomeLayout







// < div className = "min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center" >
//   <h1 className="text-5xl font-bold text-white drop-shadow-lg">
//     🚀 Tailwind CSS v4 + React + Vite 💖
//   </h1>
//     </div >