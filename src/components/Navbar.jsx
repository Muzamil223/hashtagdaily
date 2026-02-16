import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { 
  FiHome, FiUser, FiGrid, FiMail, FiBookOpen, FiEdit3, FiX, FiMenu 
} from "react-icons/fi";
import { 
  BsArrowRight, BsSearch, BsBookmark, BsBell 
} from "react-icons/bs";
import { 
  RiNotification3Line, RiUser3Line, RiSearchLine 
} from "react-icons/ri";
import { 
  TbWriting, TbBrandMedium, 
  TbHash
} from "react-icons/tb";
import { 
  MdKeyboardArrowDown, MdWaves 
} from "react-icons/md";

const navItems = [
  { path: "/", link: "Home", icon: <FiHome className="w-5 h-5" /> },
  { path: "/about", link: "About", icon: <FiUser className="w-5 h-5" /> },
  { path: "/services", link: "Services", icon: <FiGrid className="w-5 h-5" /> },
  { path: "/contact", link: "Contact", icon: <FiMail className="w-5 h-5" /> },
  { path: "/blogs", link: "Blog", icon: <FiBookOpen className="w-5 h-5" /> },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setScrollDirection("down");
    } else {
      setScrollDirection("up");
    }
    
    setIsScrolled(currentScrollY > 50);
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [lastScrollY]);

  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <>
      {/* Top Bar */}
      <div className={`fixed top-0 left-0 right-0 z-50 bg-brown-900 text-white transition-all duration-500 ${
        isScrolled ? "opacity-0 -translate-y-full" : "opacity-100 translate-y-0"
      }`}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center space-x-6">
              <span className="flex items-center space-x-2 text-brown-200">
                <MdWaves className="w-4 h-4" />
                <span className="font-Inter">The Future of Digital Writing</span>
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="transition-colors hover:text-white">
                <BsBookmark className="w-4 h-4" />
              </button>
              <button className="transition-colors hover:text-white">
                <BsBell className="w-4 h-4" />
              </button>
              <div className="w-px h-4 bg-brown-700"></div>
              <span className="text-brown-300">EN</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`fixed left-0 right-0 z-40 transition-all duration-700 ${
          isScrolled 
            ? "top-0 bg-white/95 backdrop-blur-xl shadow-2xl" 
            : "top-10 bg-white border-b border-brown-100"
        } ${scrollDirection === "down" && isScrolled ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <Link 
              to="/" 
              className="relative group"
              onClick={closeMenu}
            >
              <div className="flex items-center space-x-4">
                {/* Animated Logo Container */}
                <div className="relative">
                  {/* Main Logo Background */}
                  <div className="absolute inset-0 transition-opacity opacity-50 bg-gradient-to-br from-brown-800 via-brown-700 to-amber-800 rounded-2xl blur-xl group-hover:opacity-70 animate-pulse"></div>
                  
                  {/* Logo Shape */}
                  <div className="relative w-16 h-16 overflow-hidden transition-all duration-500 transform bg-gradient-to-br from-brown-800 to-brown-900 rounded-2xl rotate-3 group-hover:rotate-6">
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute w-8 h-8 rounded-full -left-2 -top-2 bg-white/20 animate-ping"></div>
                      <div className="absolute w-8 h-8 delay-300 rounded-full -right-2 -bottom-2 bg-white/20 animate-ping"></div>
                    </div>
                    
                    {/* Main Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <TbHash className="w-8 h-8 text-white transition-transform duration-500 transform -rotate-3 group-hover:rotate-0" />
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute w-4 h-4 border-2 border-white rounded-full -top-2 -right-2 bg-amber-500 animate-bounce"></div>
                  <div className="absolute w-3 h-3 rounded-full -bottom-1 -left-1 bg-brown-500 animate-pulse"></div>
                </div>

                {/* Logo Text */}
                <div className="flex flex-col">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-black tracking-tighter text-transparent font-Playfair bg-gradient-to-r from-brown-900 via-brown-800 to-amber-800 bg-clip-text">
                      HASH
                    </span>
                    <span className="text-3xl font-black tracking-tighter font-Playfair text-brown-900">
                      TAG
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-xs font-light tracking-[0.5em] text-brown-600 font-Inter">
                      DAILY
                    </span>
                    <span className="w-1 h-1 rounded-full bg-amber-600 animate-pulse"></span>
                    <span className="text-xs font-light text-brown-400 font-Inter">
                      MAGAZINE
                    </span>
                  </div>
                </div>
              </div>

              {/* Hover Effect Line */}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-brown-600 via-amber-600 to-brown-600 group-hover:w-full transition-all duration-700"></span>
            </Link>

            {/* Search Bar - Desktop */}
           
            {/* Right Side Icons */}
            <div className="items-center hidden space-x-3 lg:flex">
              {/* Notification Button */}
            
              {/* Profile Button */}
             
              {/* Create Blog Button */}
              <Link
                to="/create-blog"
                className="relative overflow-hidden group"
              >
                {/* Background Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-brown-800 via-brown-700 to-amber-800 rounded-xl"></div>
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-r from-amber-600 to-brown-600 group-hover:opacity-100 rounded-xl"></div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                
                {/* Button Content */}
                <div className="relative flex items-center px-6 py-3 space-x-3">
                  <TbWriting className="w-5 h-5 text-white transition-transform group-hover:rotate-12" />
                  <span className="text-lg tracking-wide text-white font-Forum">Start Writing</span>
                  <BsArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="relative w-12 h-12 lg:hidden focus:outline-none group"
            >
              <div className="absolute inset-0 transition-all scale-90 opacity-0 bg-gradient-to-r from-brown-100 to-amber-100 rounded-2xl group-hover:opacity-100 group-hover:scale-100"></div>
              <div className="relative flex items-center justify-center">
                {isMenuOpen ? (
                  <FiX className="transition-transform duration-500 transform rotate-90 w-7 h-7 text-brown-800" />
                ) : (
                  <FiMenu className="w-7 h-7 text-brown-800" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden border-t lg:block border-brown-100">
          <div className="container-custom">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                {navItems.map((nav) => (
                  <NavLink
                    key={nav.path}
                    to={nav.path}
                    className={({ isActive }) =>
                      `relative group px-5 py-4 transition-all duration-300 ${
                        isActive 
                          ? "text-brown-900" 
                          : "text-brown-600 hover:text-brown-900"
                      }`
                    }
                  >
                    <span className="relative z-10 flex items-center space-x-2">
                      <span className={`transition-all duration-300 ${
                        location.pathname === nav.path 
                          ? "text-brown-800 scale-110" 
                          : "text-brown-400 group-hover:text-brown-600 group-hover:scale-110"
                      }`}>
                        {nav.icon}
                      </span>
                      <span className="text-lg font-medium tracking-wide font-Cormorant">{nav.link}</span>
                    </span>
                    
                    {/* Active/ Hover Indicator */}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-brown-600 to-amber-600 transform origin-left transition-transform duration-300 ${
                      location.pathname === nav.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}></span>
                    
                    {/* Background Glow */}
                    <span className={`absolute inset-0 bg-gradient-to-t from-brown-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      location.pathname === nav.path ? "opacity-100" : ""
                    }`}></span>
                  </NavLink>
                ))}
              </div>

              {/* Trending Tags */}
              <div className="flex items-center space-x-3">
                <span className="text-xs font-medium tracking-wider uppercase text-brown-400 font-Inter">
                  Trending:
                </span>
                {["Tech", "Design", "AI", "Writing"].map((tag) => (
                  <button
                    key={tag}
                    className="px-3 py-1 text-sm font-medium transition-all rounded-full text-brown-600 bg-brown-50 hover:bg-brown-100 hover:text-brown-800 hover:scale-105 font-Inter"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-md z-50 transition-all duration-700 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 w-full sm:w-96 h-full bg-white z-50 transform transition-all duration-700 ease-out ${
          isMenuOpen ? "translate-x-0 shadow-2xl" : "translate-x-full"
        }`}
      >
        <div className="relative h-full overflow-y-auto">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-gradient-to-br from-brown-600 to-amber-600 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 delay-700 rounded-full w-60 h-60 bg-gradient-to-tl from-brown-800 to-amber-800 blur-3xl animate-pulse"></div>
          </div>

          {/* Mobile Menu Header */}
          <div className="relative sticky top-0 z-10 p-6 bg-white border-b border-brown-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center shadow-xl w-14 h-14 bg-gradient-to-br from-brown-800 to-amber-800 rounded-2xl">
                  <TbHash className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-black font-Playfair text-brown-900">HASH</span>
                    <span className="text-2xl font-black font-Playfair text-brown-800">TAG</span>
                  </div>
                  <span className="text-xs tracking-widest text-brown-500 font-Inter">DAILY MAGAZINE</span>
                </div>
              </div>
              <button
                onClick={closeMenu}
                className="flex items-center justify-center w-12 h-12 transition-all rounded-2xl bg-brown-50 hover:bg-brown-100 hover:rotate-90"
              >
                <FiX className="w-6 h-6 text-brown-800" />
              </button>
            </div>

            {/* Mobile Search */}
            
          </div>

          {/* Mobile Navigation Links */}
          <div className="relative p-6 space-y-2">
            {navItems.map((nav, index) => (
              <NavLink
                key={nav.path}
                to={nav.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `flex items-center justify-between p-4 rounded-2xl transition-all duration-300 group ${
                    isActive
                      ? "bg-gradient-to-r from-brown-800 to-amber-800 text-white shadow-xl scale-105"
                      : "text-gray-700 hover:bg-brown-50 hover:scale-105"
                  }`
                }
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: `slideIn 0.5s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="flex items-center space-x-4">
                  <span className={`text-xl transition-all duration-300 group-hover:scale-125 ${
                    location.pathname === nav.path ? "text-white" : "text-brown-600"
                  }`}>
                    {nav.icon}
                  </span>
                  <span className="text-lg font-medium font-Cormorant">{nav.link}</span>
                </div>
                <BsArrowRight className={`w-5 h-5 transition-all duration-300 ${
                  location.pathname === nav.path 
                    ? "opacity-100 translate-x-0" 
                    : "opacity-0 -translate-x-5 group-hover:opacity-100 group-hover:translate-x-0"
                }`} />
              </NavLink>
            ))}
          </div>

          {/* Create Blog Section */}
          <div className="relative p-6">
            <div className="absolute top-0 h-px inset-x-6 bg-gradient-to-r from-transparent via-brown-200 to-transparent"></div>
            
            <Link
              to="/create-blog"
              onClick={closeMenu}
              className="relative block mt-6 group"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-brown-800 via-amber-800 to-brown-800 rounded-2xl animate-gradient-x"></div>
              <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-r from-amber-600 to-brown-600 group-hover:opacity-100 rounded-2xl"></div>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              
              {/* Content */}
              <div className="relative flex items-center justify-center px-6 py-5 space-x-4">
                <TbWriting className="w-6 h-6 text-white transition-transform group-hover:rotate-12" />
                <span className="text-2xl tracking-wide text-white font-Forum">Start Writing</span>
                <BsArrowRight className="w-5 h-5 text-white transition-transform group-hover:translate-x-2" />
              </div>
            </Link>

            {/* Mobile Menu Footer */}
            <div className="mt-8 text-center">
              <div className="flex items-center justify-center mb-4 space-x-4">
                {["About", "Privacy", "Terms"].map((item) => (
                  <button key={item} className="text-sm transition-colors text-brown-500 hover:text-brown-800 font-Inter">
                    {item}
                  </button>
                ))}
              </div>
              <p className="text-xs text-brown-400 font-Inter">
                © 2024 HashtagDaily. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className={`transition-all duration-500 ${
        isScrolled ? "h-20" : "h-32"
      }`} />
    </>
  );
};

// Add this to your index.css or tailwind config
const styles = `
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes gradient-x {
    0%, 100% {
      background-size: 200% 200%;
      background-position: left center;
    }
    50% {
      background-size: 200% 200%;
      background-position: right center;
    }
  }

  .animate-gradient-x {
    animation: gradient-x 3s ease infinite;
    background: linear-gradient(90deg, #4A0404, #7B3F00, #6D4C41, #4A0404);
    background-size: 300% 100%;
  }
`;

// Add the styles to your component
const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

export default Navbar;