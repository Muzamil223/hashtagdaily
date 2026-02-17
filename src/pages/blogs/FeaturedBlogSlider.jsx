// pages/blogs/FeaturedBlogSlider.jsx
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import { BASE_API_URL } from "../../../Api.Config";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaPlay, FaPause } from "react-icons/fa";
import {
  TbUser,
  TbClock,
  TbCalendar,
  TbBookmark,
  TbArrowRight,
} from "react-icons/tb";
import OptimizedImage from "../../components/OptimizedImage";

const FeaturedBlogSlider = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const sliderRef = React.useRef(null);

  useEffect(() => {
    axios
      .get(`${BASE_API_URL}/api/blogs`)
      .then((response) => {
        setBlogs(response.data.filter((blog) => blog.featured));
      })
      .catch((err) => console.error(err));
  }, []);

  const stripHtmlTags = (str) => str.replace(/<\/?[^>]+(>|$)/g, "");

  // Custom Arrow Components
  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute z-20 flex items-center justify-center w-10 h-10 transition-all duration-300 -translate-y-1/2 border rounded-full left-4 md:left-8 lg:left-12 top-1/2 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-black/30 backdrop-blur-md border-white/30 hover:bg-black/50 hover:scale-110 group"
    >
      <FaChevronLeft className="w-4 h-4 text-white md:w-5 md:h-5 lg:w-6 lg:h-6" />
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute z-20 flex items-center justify-center w-10 h-10 transition-all duration-300 -translate-y-1/2 border rounded-full right-4 md:right-8 lg:right-12 top-1/2 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-black/30 backdrop-blur-md border-white/30 hover:bg-black/50 hover:scale-110 group"
    >
      <FaChevronRight className="w-4 h-4 text-white md:w-5 md:h-5 lg:w-6 lg:h-6" />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: isPlaying,
    autoplaySpeed: 6000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    pauseOnHover: true,
    fade: true,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    appendDots: (dots) => (
      <div className="absolute z-20 -translate-x-1/2 bottom-4 md:bottom-8 left-1/2">
        <ul className="flex space-x-2 md:space-x-3">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <button
        className={`rounded-full transition-all duration-500 ${
          i === currentSlide
            ? "bg-amber-500 w-6 md:w-8 h-1.5 md:h-2.5"
            : "bg-white/50 hover:bg-white/80 w-2 md:w-2.5 h-1.5 md:h-2.5"
        }`}
      />
    ),
  };

  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      sliderRef.current.slickPause();
    } else {
      sliderRef.current.slickPlay();
    }
  };

  if (blogs.length === 0) return null;

  return (
    <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] h-screen overflow-hidden">
      <Slider ref={sliderRef} {...settings} className="h-full">
        {blogs.map((blog, index) => (
          <div
            key={blog._id}
            className="relative w-full h-screen outline-none"
          >
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={blog.image}
                alt={blog.title}
                className="absolute inset-0 object-cover w-full h-full"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200';
                }}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40"></div>
            </div>

            {/* Animated Shapes */}
            <div className="absolute inset-0 hidden overflow-hidden md:block">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 45, 0],
                }}
                transition={{ duration: 20, repeat: Infinity }}
                className="absolute w-64 h-64 rounded-full -top-20 -right-20 bg-amber-500/20 blur-3xl"
              />
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, -45, 0],
                }}
                transition={{ duration: 15, repeat: Infinity, delay: 2 }}
                className="absolute rounded-full -bottom-32 -left-32 w-80 h-80 bg-amber-600/20 blur-3xl"
              />
            </div>

            {/* Content - Perfectly centered on desktop */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="container-custom">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-3xl mx-auto text-center"
                >
                  {/* Featured Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex justify-center mb-4 md:mb-6"
                  >
                    <span className="inline-flex items-center px-4 py-2 space-x-2 rounded-full bg-amber-500">
                      <span className="relative flex w-2 h-2">
                        <span className="absolute inline-flex w-full h-full bg-white rounded-full opacity-75 animate-ping"></span>
                        <span className="relative inline-flex w-2 h-2 bg-white rounded-full"></span>
                      </span>
                      <span className="text-sm font-medium">Featured Story</span>
                    </span>
                  </motion.div>

                  {/* Title */}
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="max-w-4xl px-4 mx-auto mb-4 text-2xl font-bold leading-tight text-white md:text-4xl lg:text-5xl xl:text-6xl font-Playfair md:mb-6"
                  >
                    {blog.title}
                  </motion.h2>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="hidden max-w-2xl px-4 mx-auto mb-6 text-base leading-relaxed text-gray-200 sm:block md:text-lg lg:text-xl md:mb-8"
                  >
                    {stripHtmlTags(blog.description).substring(0, 180)}...
                  </motion.p>

                  {/* Meta Info - Centered */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex flex-wrap items-center justify-center gap-4 mb-6 md:gap-6 md:mb-8"
                  >
                    <div className="flex items-center space-x-2">
                      <TbUser className="w-4 h-4 text-amber-400 md:w-5 md:h-5" />
                      <span className="text-sm text-white md:text-base">
                        {blog.authorName}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TbClock className="w-4 h-4 text-amber-400 md:w-5 md:h-5" />
                      <span className="text-sm text-white md:text-base">
                        {blog.readTime}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TbCalendar className="w-4 h-4 text-amber-400 md:w-5 md:h-5" />
                      <span className="text-sm text-white md:text-base">
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </motion.div>

                  {/* Tags - Centered */}
                  {blog.tags && blog.tags.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="flex flex-wrap justify-center gap-2 mb-6 md:gap-3 md:mb-8"
                    >
                      {blog.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs text-white border rounded-full md:px-4 md:py-1.5 md:text-sm bg-white/10 backdrop-blur-sm border-white/20"
                        >
                          #{tag}
                        </span>
                      ))}
                      {blog.tags.length > 3 && (
                        <span className="px-3 py-1 text-xs text-white border rounded-full md:px-4 md:py-1.5 md:text-sm bg-white/10 backdrop-blur-sm border-white/20">
                          +{blog.tags.length - 3}
                        </span>
                      )}
                    </motion.div>
                  )}

                  {/* CTA Buttons - Centered */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="flex flex-wrap justify-center gap-3 md:gap-4"
                  >
                    <Link
                      to={`/blogs/${blog._id}`}
                      className="relative inline-flex items-center px-6 py-3 space-x-2 overflow-hidden transition-all duration-500 shadow-2xl md:px-8 md:py-4 lg:px-10 lg:py-4 group bg-gradient-to-r from-amber-600 to-amber-700 rounded-xl hover:shadow-amber-500/25"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
                      <span className="relative text-sm text-white md:text-base lg:text-lg font-Forum">
                        Read Full Story
                      </span>
                      <TbArrowRight className="relative w-4 h-4 text-white transition-transform md:w-5 md:h-5 group-hover:translate-x-1" />
                    </Link>

                    <button className="relative inline-flex items-center px-6 py-3 space-x-2 transition-all duration-500 border group md:px-8 md:py-4 lg:px-10 lg:py-4 bg-black/20 backdrop-blur-md rounded-xl border-white/30 hover:bg-black/30">
                      <TbBookmark className="w-4 h-4 text-white md:w-5 md:h-5" />
                      <span className="text-sm text-white md:text-base lg:text-lg font-Forum">
                        Save for Later
                      </span>
                    </button>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Slide Counter */}
            <div className="absolute z-20 text-xs bottom-4 right-4 md:bottom-8 md:right-8 text-white/80 font-Inter">
              <span className="text-base font-bold text-white md:text-xl lg:text-2xl">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="mx-1">/</span>
              <span>{String(blogs.length).padStart(2, "0")}</span>
            </div>
          </div>
        ))}
      </Slider>

      {/* Autoplay Control */}
      <button
        onClick={toggleAutoplay}
        className="absolute z-20 flex items-center justify-center w-8 h-8 transition-all duration-300 border rounded-full bottom-4 left-4 md:bottom-8 md:left-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-black/30 backdrop-blur-md border-white/30 hover:bg-black/50"
      >
        {isPlaying ? (
          <FaPause className="w-3 h-3 text-white md:w-4 md:h-4" />
        ) : (
          <FaPlay className="w-3 h-3 text-white md:w-4 md:h-4" />
        )}
      </button>
    </div>
  );
};

export default FeaturedBlogSlider;