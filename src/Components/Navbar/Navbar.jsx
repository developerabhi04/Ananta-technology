import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Ananta Technology.png";
import { Menu, Close } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";

// Navigation links
const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about-page" },
  { title: "Services", href: "/services-page" },
  { title: "Projects", href: "/projects-page" },
  { title: "Contact", href: "/contact-page" },
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
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 z-40 w-full py-3 transition-all duration-300 ${scrolled ? "bg-slate-950 shadow-lg" : "bg-transparent"
        } px-6 sm:px-16`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        {/* Logo Section */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <motion.img
            src={logo}
            alt="logo"
            className="h-16 w-auto sm:h-20 object-contain"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "tween", stiffness: 900 }}
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden sm:flex list-none gap-10">
          {navLinks.map((nav) => (
            <motion.li
              key={nav.id || nav.title}
              className={`relative cursor-pointer text-lg font-medium transition-colors ${active === nav.title ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              onClick={() => setActive(nav.title)}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {nav.href.startsWith("/") ? (
                <Link to={nav.href}>{nav.title}</Link>
              ) : (
                <a href={nav.href}>{nav.title}</a>
              )}
              {/* Hover underline animation */}
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-[#915EFF] w-full"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
              />
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu with Animation */}
        <div className="sm:hidden flex items-center">
          {toggle ? (
            <Close
              onClick={() => setToggle(!toggle)}
              className="text-white text-3xl cursor-pointer"
            />
          ) : (
            <Menu
              onClick={() => setToggle(!toggle)}
              className="text-white text-3xl cursor-pointer"
            />
          )}
        </div>

        {/* Animated Mobile Dropdown */}
        <AnimatePresence>
          {toggle && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute top-20 right-0 z-20 mx-4 my-2 w-2/3 flex-col rounded-lg bg-slate-900 p-6 shadow-lg transition-transform duration-300"
            >
              <ul className="flex flex-col gap-6 text-white font-medium">
                {navLinks.map((nav) => (
                  <motion.li
                    key={nav.id || nav.title}
                    className={`cursor-pointer text-base font-medium ${active === nav.title ? "text-[#915EFF]" : "text-gray-400 hover:text-white"
                      }`}
                    onClick={() => {
                      setToggle(false);
                      setActive(nav.title);
                    }}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {nav.href.startsWith("/") ? (
                      <Link to={nav.href}>{nav.title}</Link>
                    ) : (
                      <a href={nav.href}>{nav.title}</a>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
