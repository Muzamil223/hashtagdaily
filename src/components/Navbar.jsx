import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaMaxcdn } from "react-icons/fa";

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10); // Adjust this value to control when the Navbar moves up
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <nav
        className={`flex items-center justify-between px-5 py-4 fixed top-0 left-0 right-0 z-50 bg-white transition-transform ${
          isScrolled ? "-translate-y-2 shadow-md" : ""
        }`}
      >
        <div className="flex items-center">
          <Link id="home" to="/">
            <img src={logo} alt="Hashtag-daily" width="200px" />
          </Link>
        </div>

        <ul className="md:flex gap-10 text-md justify-center items-center hidden font-Palanquin">
          {navItems.map((nav) => (
            <li className="text-black font-Forum text-xl" key={nav.path}>
              <NavLink
                to={nav.path}
                className={({ isActive }) =>
                  isActive || active === nav.link
                    ? "text-navy-900"
                    : "text-black"
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
              className="bg-brown-800 font-Forum text-white py-3 px-4 rounded-md border border-white hover:bg-white hover:text-brown-800 hover:border-black focus:border-l-amber-600 transition"
            >
              Create Blog
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="cursor-pointer">
            {isMenuOpen ? (
              <FaMaxcdn className="w-6 h-6 text-black" />
            ) : (
              <FaBars className="w-6 h-6 text-black" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div>
        <ul
          className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${
            isMenuOpen
              ? "fixed top-0 left-0 w-full transition-all ease-out duration-150 z-50"
              : "hidden"
          }`}
        >
          {/* Mobile Navigation Links */}
          {navItems.map((nav) => (
            <li className="text-black" key={nav.path}>
              <NavLink
                to={nav.path}
                className={({ isActive }) =>
                  isActive || active === nav.link
                    ? "text-blue-500"
                    : "text-black"
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
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
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
