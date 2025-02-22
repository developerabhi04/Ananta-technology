import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Ananta Technology.png"

// Navigation links (Replace with your actual links if available)
const navLinks = [
  { id: "Home", title: "Home" },
  { id: "about", title: "About" },
  { id: "Services", title: "Services" },
  { id: "Projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-30 w-full py-1 transition-all duration-300 ${scrolled ? "bg-slate-950 shadow-lg" : "bg-slate-350"
          } px-6 sm:px-16`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between ">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="h-20 w-60 object-contain" />
            {/* <p className="text-white text-xl font-bold">
              Ananta <span className="hidden sm:inline">| Technologies</span>
            </p> */}
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden sm:flex list-none gap-10">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`cursor-pointer text-lg font-medium transition-colors ${active === nav.title
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
                  }`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu */}
          <div className="flex sm:hidden items-center">
            <img
              src={
                toggle
                  ? "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/close.svg"
                  : "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/menu.svg"
              }
              alt="menu"
              className="h-7 w-7 cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`${!toggle ? "hidden" : "flex"
                } absolute top-20 right-0 z-10 mx-4 my-2 w-40 flex-col rounded-lg bg-black p-6 shadow-lg`}
            >
              <ul className="flex flex-col gap-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`cursor-pointer text-base font-medium transition-colors ${active === nav.title
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                      }`}
                    onClick={() => {
                      setToggle(false);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>

   



    // <div className="relative bg-cover bg-center bg-no-repeat bg-hero-pattern min-h-screen flex flex-col justify-center items-center text-center text-white px-6">
    //   <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
    //     Welcome to Ananta Technologies
    //   </h1>
    //   <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-gray-300">
    //     Empowering your business with cutting-edge solutions 🚀
    //   </p>
    // </div> 


    //  <section id="about" className="py-16 bg-gray-800 text-white text-center">
    //   <h2 className="text-3xl font-bold">About Us</h2>
    //   <p className="mt-4 text-lg text-gray-400">
    //     We provide top-notch web and mobile solutions tailored for your business.
    //   </p>
    // </section> 



    // <section id="experience" className="py-16 bg-gray-900 text-white text-center">
    //   <h2 className="text-3xl font-bold">Experience</h2>
    //   <p className="mt-4 text-lg text-gray-400">
    //     Over 10 years of experience in delivering high-quality tech solutions.
    //   </p>
    // </section>

    // <section id="works" className="py-16 bg-gray-800 text-white text-center">
    //   <h2 className="text-3xl font-bold">Our Works</h2>
    //   <p className="mt-4 text-lg text-gray-400">
    //     Check out our portfolio showcasing diverse and successful projects.
    //   </p>
    // </section>

    // <section id="feedbacks" className="py-16 bg-gray-900 text-white text-center">
    //   <h2 className="text-3xl font-bold">Feedbacks</h2>
    //   <p className="mt-4 text-lg text-gray-400">
    //     Our clients love us! Here’s what they have to say about our services.
    //   </p>
    // </section>

    // <section id="contact" className="py-16 bg-gray-800 text-white text-center">
    //   <h2 className="text-3xl font-bold">Contact Us</h2>
    //   <p className="mt-4 text-lg text-gray-400">
    //     Get in touch for collaborations or queries. Let’s build something great together.
    //   </p>
    // </section> 
    //  </div> 
  );
};

export default Navbar;