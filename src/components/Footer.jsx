// components/Footer.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
  FaHeart,
  FaArrowUp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import {
  TbBrandMedium,
  TbWriting,
  TbNews,
  TbWorld,
  TbDeviceGamepad2,
  TbBriefcase,
  TbDeviceLaptop,
  TbShoppingBag,
  TbBuildingStore,
  TbMovie,
  TbMusic,
  TbBook,
  TbSchool,
  TbBrandOpenSource,
  TbSend,
  TbHeart,
} from "react-icons/tb";
import { MdWaves, MdKeyboardArrowRight } from "react-icons/md";
import { toast } from "react-toastify";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsSubscribing(true);

    // Simulate subscription
    setTimeout(() => {
      toast.success("Successfully subscribed to newsletter! 🎉");
      setEmail("");
      setIsSubscribing(false);
    }, 1500);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const footerSections = [
    {
      title: "Categories",
      icon: <TbNews className="w-5 h-5" />,
      links: [
        {
          name: "Technology",
          icon: <TbDeviceLaptop className="w-4 h-4" />,
          href: "/category/tech",
        },
        {
          name: "Business",
          icon: <TbBriefcase className="w-4 h-4" />,
          href: "/category/business",
        },
        {
          name: "Gaming",
          icon: <TbDeviceGamepad2 className="w-4 h-4" />,
          href: "/category/gaming",
        },
        {
          name: "Entertainment",
          icon: <TbMovie className="w-4 h-4" />,
          href: "/category/entertainment",
        },
        {
          name: "Education",
          icon: <TbSchool className="w-4 h-4" />,
          href: "/category/education",
        },
      ],
    },
    {
      title: "Quick Links",
      icon: <TbWorld className="w-5 h-5" />,
      links: [
        {
          name: "About Us",
          icon: <TbBuildingStore className="w-4 h-4" />,
          href: "/about",
        },
        {
          name: "Contact",
          icon: <TbSend className="w-4 h-4" />,
          href: "/contact",
        },
        {
          name: "Write for Us",
          icon: <TbWriting className="w-4 h-4" />,
          href: "/create-blog",
        },
        {
          name: "Privacy Policy",
          icon: <TbBook className="w-4 h-4" />,
          href: "/privacy",
        },
        {
          name: "Terms of Service",
          icon: <TbBrandOpenSource className="w-4 h-4" />,
          href: "/terms",
        },
      ],
    },
    {
      title: "Topics",
      icon: <TbMusic className="w-5 h-5" />,
      links: [
        {
          name: "Lifestyle",
          icon: <TbShoppingBag className="w-4 h-4" />,
          href: "/category/lifestyle",
        },
        {
          name: "Travel",
          icon: <TbWorld className="w-4 h-4" />,
          href: "/category/travel",
        },
        {
          name: "Food",
          icon: <TbShoppingBag className="w-4 h-4" />,
          href: "/category/food",
        },
        {
          name: "Health",
          icon: <TbHeart className="w-4 h-4" />,
          href: "/category/health",
        },
        {
          name: "Sports",
          icon: <TbDeviceGamepad2 className="w-4 h-4" />,
          href: "/category/sports",
        },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      href: "https://facebook.com",
      color: "hover:bg-blue-600",
      label: "Facebook",
    },
    {
      icon: <FaTwitter />,
      href: "https://twitter.com",
      color: "hover:bg-sky-500",
      label: "Twitter",
    },
    {
      icon: <FaInstagram />,
      href: "https://instagram.com",
      color: "hover:bg-pink-600",
      label: "Instagram",
    },
    {
      icon: <FaLinkedinIn />,
      href: "https://linkedin.com",
      color: "hover:bg-blue-700",
      label: "LinkedIn",
    },
    {
      icon: <FaYoutube />,
      href: "https://youtube.com",
      color: "hover:bg-red-600",
      label: "YouTube",
    },
    {
      icon: <FaPinterestP />,
      href: "https://pinterest.com",
      color: "hover:bg-red-700",
      label: "Pinterest",
    },
  ];

  return (
    <footer className="relative overflow-hidden text-white bg-gradient-to-b from-brown-800 via-amber-950 to-brown-800">
      {/* Animated Background Waves */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg
            className="absolute bottom-0 w-full h-48"
            preserveAspectRatio="none"
            viewBox="0 0 1440 74"
          >
            <path
              fill="rgba(255,255,255,0.1)"
              d="M456.463 38.113c93.333 0 113.237-23.162 237.037-23.162 123.8 0 142.592 23.162 237.037 23.162 94.444 0 130.165-23.162 237.037-23.162 106.872 0 129.63 23.162 237.037 23.162V74H0V38.113c123.8 0 142.592-23.162 237.037-23.162 94.444 0 130.165 23.162 237.037 23.162z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute rounded-full -top-40 -right-40 w-80 h-80 bg-amber-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute delay-1000 rounded-full -bottom-40 -left-40 w-80 h-80 bg-brown-500/10 blur-3xl animate-pulse"></div>

        {/* Floating Icons */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 left-[10%] text-amber-500/20"
        >
          <TbBrandMedium className="w-16 h-16" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }}
          className="absolute bottom-40 right-[15%] text-amber-500/20"
        >
          <MdWaves className="w-20 h-20" />
        </motion.div>
      </div>

      <div className="relative py-16 container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 lg:col-span-3"
          >
            <Link to="/" className="inline-block group">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="transition-all duration-500 transform w-14 h-14 bg-gradient-to-br from-amber-600 to-brown-600 rounded-2xl rotate-3 group-hover:rotate-6"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">#</span>
                  </div>
                </div>
                <div>
                  <span className="text-2xl font-bold text-white font-Playfair">
                    Hashtag
                  </span>
                  <span className="block -mt-1 text-xl font-Forum text-amber-300">
                    Daily
                  </span>
                </div>
              </div>
            </Link>

            <p className="leading-relaxed text-gray-300 font-Inter">
              Your daily dose of insightful and engaging content. Discover
              stories that matter, ideas that inspire, and perspectives that
              challenge.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300 transition-colors cursor-pointer group hover:text-amber-300">
                <FaEnvelope className="w-5 h-5" />
                <span className="font-Inter">hello@hashtagdaily.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 transition-colors cursor-pointer group hover:text-amber-300">
                <FaPhone className="w-5 h-5" />
                <span className="font-Inter">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 transition-colors cursor-pointer group hover:text-amber-300">
                <FaMapMarkerAlt className="w-5 h-5" />
                <span className="font-Inter">San Francisco, CA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:scale-110 transition-all duration-300 ${social.color} hover:shadow-lg group relative`}
                  whileHover={{ y: -3 }}
                  aria-label={social.label}
                >
                  <span className="absolute px-2 py-1 text-xs text-white transition-opacity -translate-x-1/2 rounded opacity-0 -top-8 left-1/2 bg-brown-800 group-hover:opacity-100 whitespace-nowrap">
                    {social.label}
                  </span>
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          <div className="grid grid-cols-1 gap-8 lg:col-span-5 md:grid-cols-3">
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="flex items-center mb-6 space-x-2 text-lg font-bold font-Playfair text-amber-300">
                  <span className="p-2 rounded-lg bg-white/10">
                    {section.icon}
                  </span>
                  <span>{section.title}</span>
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={linkIndex}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        to={link.href}
                        className="flex items-center space-x-2 text-gray-300 transition-all duration-300 hover:text-amber-300 group"
                      >
                        <span className="text-gray-500 transition-colors group-hover:text-amber-300">
                          {link.icon}
                        </span>
                        <span className="text-sm font-Inter">{link.name}</span>
                        <MdKeyboardArrowRight className="w-4 h-4 transition-all opacity-0 group-hover:opacity-100" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <div className="p-8 border bg-white/5 backdrop-blur-sm rounded-3xl border-white/10">
              <h3 className="mb-2 text-2xl font-bold font-Playfair text-amber-300">
                Never Miss a Story
              </h3>
              <p className="mb-6 text-sm text-gray-300 font-Inter">
                Subscribe to our newsletter and get the latest updates directly
                in your inbox.
              </p>

              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="relative group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-6 py-4 pr-12 text-white placeholder-gray-400 transition-all duration-300 border bg-white/10 border-white/20 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                  />
                  <FaEnvelope className="absolute text-gray-400 transition-colors -translate-y-1/2 right-4 top-1/2 group-focus-within:text-amber-400" />
                </div>

                <button
                  type="submit"
                  disabled={isSubscribing}
                  className="relative w-full overflow-hidden group rounded-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-brown-600"></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  <div className="relative flex items-center justify-center px-6 py-4 space-x-3">
                    {isSubscribing ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
                        <span className="text-lg text-white font-Forum">
                          Subscribing...
                        </span>
                      </>
                    ) : (
                      <>
                        <TbSend className="w-5 h-5 text-white transition-transform group-hover:rotate-12" />
                        <span className="text-lg text-white font-Forum">
                          Subscribe Now
                        </span>
                      </>
                    )}
                  </div>
                </button>
              </form>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 mt-6 border-t border-white/10">
                <div className="text-center">
                  <span className="block text-2xl font-bold font-Playfair text-amber-300">
                    10K+
                  </span>
                  <span className="text-xs text-gray-400 font-Inter">
                    Readers
                  </span>
                </div>
                <div className="text-center">
                  <span className="block text-2xl font-bold font-Playfair text-amber-300">
                    5K+
                  </span>
                  <span className="text-xs text-gray-400 font-Inter">
                    Articles
                  </span>
                </div>
                <div className="text-center">
                  <span className="block text-2xl font-bold font-Playfair text-amber-300">
                    2K+
                  </span>
                  <span className="text-xs text-gray-400 font-Inter">
                    Writers
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="relative pt-8 mt-16 border-t border-white/10"
        >
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-400 font-Inter">
              © {new Date().getFullYear()} HashtagDaily. All rights reserved.
              Made with{" "}
              <FaHeart className="inline w-4 h-4 mx-1 text-amber-500 animate-pulse" />
              by HashtagDaily Team
            </p>

            <div className="flex items-center space-x-6">
              <Link
                to="/privacy"
                className="text-sm text-gray-400 transition-colors hover:text-amber-300 font-Inter"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-gray-400 transition-colors hover:text-amber-300 font-Inter"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookies"
                className="text-sm text-gray-400 transition-colors hover:text-amber-300 font-Inter"
              >
                Cookie Policy
              </Link>
            </div>

            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="absolute right-0 flex items-center justify-center w-12 h-12 transition-all duration-300 -top-5 bg-gradient-to-r from-amber-600 to-brown-600 rounded-xl hover:shadow-lg hover:shadow-amber-500/25 group"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaArrowUp className="w-5 h-5 text-white transition-transform group-hover:-translate-y-1" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
