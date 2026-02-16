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
      className="absolute z-20 flex items-center justify-center w-12 h-12 transition-all duration-300 -translate-y-1/2 border rounded-full left-6 md:left-10 top-1/2 md:w-14 md:h-14 bg-black/30 backdrop-blur-md border-white/30 hover:bg-black/50 hover:scale-110 group"
    >
      <FaChevronLeft className="w-5 h-5 text-white transition-transform md:w-6 md:h-6 group-hover:-translate-x-1" />
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute z-20 flex items-center justify-center w-12 h-12 transition-all duration-300 -translate-y-1/2 border rounded-full right-6 md:right-10 top-1/2 md:w-14 md:h-14 bg-black/30 backdrop-blur-md border-white/30 hover:bg-black/50 hover:scale-110 group"
    >
      <FaChevronRight className="w-5 h-5 text-white transition-transform md:w-6 md:h-6 group-hover:translate-x-1" />
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
      <div className="absolute z-20 -translate-x-1/2 bottom-8 left-1/2">
        <ul className="flex space-x-3">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <button
        className={`h-2.5 rounded-full transition-all duration-500 ${
          i === currentSlide
            ? "bg-amber-500 w-8"
            : "bg-white/50 hover:bg-white/80 w-2.5"
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
    <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
      <Slider ref={sliderRef} {...settings} className="h-full">
        {blogs.map((blog, index) => (
          <div
            key={blog._id}
            className="relative h-[70vh] md:h-[80vh] lg:h-[90vh] w-full outline-none"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <OptimizedImage
                src={blog.image}
                alt={blog.title}
                className="object-cover w-full h-full"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>
            </div>

            {/* Animated Shapes */}
            <div className="absolute inset-0 overflow-hidden">
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

            {/* Content */}
            {/* Content - Changed from items-center to items-end for bottom alignment */}
            <div className="absolute inset-0 flex items-end pb-16 md:pb-24 lg:pb-32">
              <div className="container-custom">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-3xl text-white"
                >
                  {/* Featured Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="inline-flex items-center px-4 py-2 mb-6 space-x-2 rounded-full bg-amber-500"
                  >
                    <span className="relative flex w-2 h-2">
                      <span className="absolute inline-flex w-full h-full bg-white rounded-full opacity-75 animate-ping"></span>
                      <span className="relative inline-flex w-2 h-2 bg-white rounded-full"></span>
                    </span>
                    <span className="text-sm font-medium">Featured Story</span>
                  </motion.div>

                  {/* Title - ADDED TEXT COLOR */}
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mb-4 text-3xl font-bold leading-tight text-white md:text-5xl lg:text-6xl font-Playfair"
                  >
                    {blog.title}
                  </motion.h2>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-2xl mb-6 text-base leading-relaxed text-gray-200 md:text-lg"
                  >
                    {stripHtmlTags(blog.description).substring(0, 200)}...
                  </motion.p>

                  {/* Meta Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex flex-wrap items-center gap-6 mb-8"
                  >
                    <div className="flex items-center space-x-2">
                      <TbUser className="w-5 h-5 text-amber-400" />
                      <span className="text-sm text-white">
                        {blog.authorName}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TbClock className="w-5 h-5 text-amber-400" />
                      <span className="text-sm text-white">
                        {blog.readTime}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TbCalendar className="w-5 h-5 text-amber-400" />
                      <span className="text-sm text-white">
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </motion.div>

                  {/* Tags */}
                  {blog.tags && blog.tags.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="flex flex-wrap gap-2 mb-8"
                    >
                      {blog.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs text-white border rounded-full bg-white/10 backdrop-blur-sm border-white/20"
                        >
                          #{tag}
                        </span>
                      ))}
                    </motion.div>
                  )}

                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="flex flex-wrap gap-4"
                  >
                    <Link
                      to={`/blogs/${blog._id}`}
                      className="relative inline-flex items-center px-8 py-4 space-x-3 overflow-hidden transition-all duration-500 shadow-2xl group bg-gradient-to-r from-amber-600 to-amber-700 rounded-xl hover:shadow-amber-500/25"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
                      <span className="relative text-lg text-white font-Forum">
                        Read Full Story
                      </span>
                      <TbArrowRight className="relative w-5 h-5 text-white transition-transform group-hover:translate-x-2" />
                    </Link>

                    <button className="relative inline-flex items-center px-8 py-4 space-x-3 transition-all duration-500 border group bg-black/20 backdrop-blur-md rounded-xl border-white/30 hover:bg-black/30">
                      <TbBookmark className="w-5 h-5 text-white" />
                      <span className="text-lg text-white font-Forum">
                        Save for Later
                      </span>
                    </button>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Slide Counter */}
            <div className="absolute z-20 text-sm bottom-8 right-8 text-white/80 font-Inter">
              <span className="text-2xl font-bold text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="mx-2">/</span>
              <span>{String(blogs.length).padStart(2, "0")}</span>
            </div>
          </div>
        ))}
      </Slider>

      {/* Autoplay Control */}
      <button
        onClick={toggleAutoplay}
        className="absolute z-20 flex items-center justify-center w-12 h-12 transition-all duration-300 border rounded-full bottom-8 left-8 bg-black/30 backdrop-blur-md border-white/30 hover:bg-black/50"
      >
        {isPlaying ? (
          <FaPause className="w-4 h-4 text-white" />
        ) : (
          <FaPlay className="w-4 h-4 text-white" />
        )}
      </button>
    </div>
  );
};

export default FeaturedBlogSlider;
