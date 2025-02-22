import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Ananta Technology.png";
import { Menu, Close } from "@mui/icons-material";

// Navigation links
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
    <nav
      className={`fixed top-0 z-30 w-full py-3 transition-all duration-300 ${scrolled ? "bg-slate-950 shadow-lg" : "bg-transparent"
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
          <img
            src={logo}
            alt="logo"
            className="h-16 w-auto sm:h-20 object-contain"
          />
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

        {/* Mobile Menu with Material Icons */}
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

        {/* Mobile Dropdown Menu */}
        <div
          className={`${!toggle ? "hidden" : "flex"
            } absolute top-20 right-0 z-20 mx-4 my-2 w-2/3 flex-col rounded-lg bg-slate-900 p-6 shadow-lg transition-transform duration-300`}
        >
          <ul className="flex flex-col gap-6 text-white font-medium">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`cursor-pointer text-base font-medium ${active === nav.title
                    ? "text-[#915EFF]"
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
    </nav>
  );
};

export default Navbar;
