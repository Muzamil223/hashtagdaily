import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaMaxcdn, FaMoon, FaSun } from "react-icons/fa";

const navItems = [
  { path: "/", link: "Home" },
  { path: "/about", link: "About" },
  { path: "/services", link: "Services" },
  { path: "/contact", link: "Contact" },
  { path: "/blogs", link: "Blog" },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10); // Adjust this value to control when the Navbar moves up
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <nav
        className={`flex items-center justify-between px-5 py-4 fixed top-0 left-0 right-0 z-50 transition-transform ${
          isScrolled ? "-translate-y-2 shadow-md" : ""
        } ${darkMode ? "bg-gray-900" : "bg-white"}`}
      >
        <div className="flex items-center">
          <Link id="home" to="/">
            <img src={logo} alt="Hashtag-daily" width="200px" />
          </Link>
        </div>

        <ul className="md:flex gap-10 text-md justify-center items-center hidden font-Palanquin">
          {navItems.map((nav) => (
            <li
              className={`font-Forum text-xl ${
                darkMode ? "text-white" : "text-black"
              }`}
              key={nav.path}
            >
              <NavLink
                to={nav.path}
                className={({ isActive }) =>
                  isActive || active === nav.link
                    ? `${darkMode ? "text-gray-400" : "text-navy-900"}`
                    : `${darkMode ? "text-gray-200" : "text-black"}`
                }
                onClick={() => setActive(nav.link)}
              >
                {nav.link}
              </NavLink>
            </li>
          ))}
          <li>
            <Link
              to="/create-blog"
              className={`py-3 px-4 rounded-md border transition ${
                darkMode
                  ? "bg-gray-800 text-white border-gray-800 hover:bg-gray-700"
                  : "bg-brown-800 text-white border-white hover:bg-white hover:text-brown-800 hover:border-black"
              }`}
            >
              Create Blog
            </Link>
          </li>
          <li>
            <button onClick={toggleDarkMode} className="ml-4">
              {darkMode ? (
                <FaSun className="w-6 h-6 text-yellow-500" />
              ) : (
                <FaMoon className="w-6 h-6 text-gray-800" />
              )}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="cursor-pointer">
            {isMenuOpen ? (
              <FaMaxcdn
                className={`w-6 h-6 ${darkMode ? "text-white" : "text-black"}`}
              />
            ) : (
              <FaBars
                className={`w-6 h-6 ${darkMode ? "text-white" : "text-black"}`}
              />
            )}
          </button>
          <button onClick={toggleDarkMode} className="ml-4">
            {darkMode ? (
              <FaSun className="w-6 h-6 text-yellow-500" />
            ) : (
              <FaMoon className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div>
        <ul
          className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 ${
            darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
          } ${
            isMenuOpen
              ? "fixed top-0 left-0 w-full transition-all ease-out duration-150 z-50"
              : "hidden"
          }`}
        >
          {/* Mobile Navigation Links */}
          {navItems.map((nav) => (
            <li key={nav.path}>
              <NavLink
                to={nav.path}
                className={({ isActive }) =>
                  isActive || active === nav.link
                    ? `${darkMode ? "text-gray-400" : "text-blue-500"}`
                    : ""
                }
                onClick={() => {
                  setIsMenuOpen(false);
                  setActive(nav.link);
                }}
              >
                {nav.link}
              </NavLink>
            </li>
          ))}
          <li>
            <Link
              to="/create-blog"
              className={`py-2 px-4 rounded-md transition ${
                darkMode
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              Create Blog
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
