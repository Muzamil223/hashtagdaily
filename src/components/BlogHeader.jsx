// components/BlogHeader.jsx
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { banner1, banner2 } from "../assets";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight, FaPlay, FaPause } from "react-icons/fa";
import { TbArrowRight } from "react-icons/tb";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BlogHeader = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const sliderRef = useRef(null);

  const carouselData = [
    {
      id: 1,
      image: banner2,
      title: "Where Ideas Come to Life",
      subtitle: "Unleash Your Creative Potential",
      description:
        "Join thousands of writers and thinkers shaping the future of digital storytelling.",
      cta: "Explore Now",
      category: "Editor's Pick",
    },
    {
      id: 2,
      image: banner1,
      title: "Step into a World of Wisdom",
      subtitle: "Discover Fresh Insights and Engaging Content",
      description:
        "Explore thought-provoking articles and expert insights that keep you ahead of the curve.",
      cta: "Start Reading",
      category: "Featured Story",
    },
  ];

  // Custom Arrow Components - Enhanced for mobile
  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute z-20 flex items-center justify-center w-8 h-8 transition-all duration-300 -translate-y-1/2 border rounded-full left-2 md:left-8 top-1/2 md:w-14 md:h-14 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 hover:scale-110 group"
    >
      <FaChevronLeft className="w-3 h-3 text-white transition-transform md:w-6 md:h-6 group-hover:-translate-x-1" />
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute z-20 flex items-center justify-center w-8 h-8 transition-all duration-300 -translate-y-1/2 border rounded-full right-2 md:right-8 top-1/2 md:w-14 md:h-14 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 hover:scale-110 group"
    >
      <FaChevronRight className="w-3 h-3 text-white transition-transform md:w-6 md:h-6 group-hover:translate-x-1" />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: isPlaying,
    autoplaySpeed: 5000,
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
      <div
        className={`rounded-full transition-all duration-500 cursor-pointer ${
          i === currentSlide
            ? "bg-amber-500 w-4 md:w-3 h-1 md:h-3 scale-125 shadow-lg"
            : "bg-white/50 hover:bg-white/80 w-2 h-1 md:w-3 md:h-3"
        }`}
      />
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          dots: true,
        }
      }
    ]
  };

  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      sliderRef.current.slickPause();
    } else {
      sliderRef.current.slickPlay();
    }
  };

  return (
    <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-screen overflow-hidden">
      <Slider ref={sliderRef} {...settings} className="h-full">
        {carouselData.map((item, index) => (
          <div key={item.id} className="relative w-full h-[60vh] sm:h-[70vh] md:h-screen">
            {/* Background Image with Parallax Effect */}
            <div
              className="absolute inset-0 transition-transform transform scale-105 bg-center bg-cover duration-10000"
              style={{
                backgroundImage: `url(${item.image})`,
                transform: currentSlide === index ? "scale(1.1)" : "scale(1)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
            </div>

            {/* Animated Shapes - Hidden on mobile for better performance */}
            <div className="absolute inset-0 hidden overflow-hidden md:block">
              <div className="absolute w-64 h-64 rounded-full top-20 left-20 bg-gradient-to-r from-amber-500/20 to-brown-500/20 blur-3xl animate-pulse"></div>
              <div className="absolute delay-1000 rounded-full bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-brown-500/20 to-amber-500/20 blur-3xl animate-pulse"></div>
            </div>

            {/* Content - Enhanced mobile padding and text sizing */}
            <div className="relative flex items-center h-full px-4 sm:px-6 md:px-8 container-custom">
              <div className="w-full max-w-3xl">
                {/* Category Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-block mb-3 md:mb-6"
                >
                  <span className="px-3 py-1 text-xs tracking-wider text-white border rounded-full md:px-4 md:py-2 md:text-sm bg-white/10 backdrop-blur-md font-Inter border-white/20">
                    {item.category}
                  </span>
                </motion.div>

                {/* Main Title - Responsive text sizing */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-bold font-Playfair mb-3 md:mb-6 leading-tight md:leading-[1.1] text-white"
                >
                  {item.title.split(" ").map((word, i) => (
                    <React.Fragment key={i}>
                      <span className="inline-block transition-all duration-300 hover:scale-110 hover:text-amber-300">
                        {word}
                      </span>
                      {i < item.title.split(" ").length - 1 && (
                        <span className="inline-block w-2 md:w-4">&nbsp;</span>
                      )}
                    </React.Fragment>
                  ))}
                </motion.h1>

                {/* Subtitle - Responsive text sizing */}
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="mb-3 text-lg md:mb-6 md:text-2xl lg:text-3xl font-Forum text-amber-300"
                >
                  {item.subtitle}
                </motion.h2>

                {/* Description - Hide on smallest screens if needed, or adjust */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="hidden max-w-2xl mb-6 text-sm leading-relaxed text-gray-200 sm:block md:text-base lg:text-lg md:mb-8"
                >
                  {item.description}
                </motion.p>

                {/* CTA Button - Responsive sizing */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <Link
                    to="/blogs"
                    className="relative inline-flex items-center px-4 py-2 space-x-2 overflow-hidden transition-all duration-500 shadow-2xl md:px-8 md:py-4 md:space-x-4 group bg-gradient-to-r from-amber-600 to-brown-600 rounded-xl hover:shadow-amber-500/25"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
                    <span className="relative text-sm tracking-wide text-white md:text-xl font-Forum">
                      {item.cta}
                    </span>
                    <TbArrowRight className="relative w-4 h-4 text-white transition-transform md:w-5 md:h-5 group-hover:translate-x-2" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Autoplay Control - Adjusted for mobile */}
      <button
        onClick={toggleAutoplay}
        className="absolute z-20 flex items-center justify-center w-8 h-8 transition-all duration-300 border rounded-full bottom-4 right-4 md:bottom-8 md:right-8 md:w-12 md:h-12 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20"
      >
        {isPlaying ? (
          <FaPause className="w-3 h-3 text-white md:w-4 md:h-4" />
        ) : (
          <FaPlay className="w-3 h-3 text-white md:w-4 md:h-4" />
        )}
      </button>

      {/* Slide Counter - Adjusted for mobile */}
      <div className="absolute z-20 text-xs bottom-4 left-4 md:bottom-8 md:left-8 text-white/80 font-Inter md:text-sm">
        <span className="text-base font-bold text-white md:text-2xl">
          {String(currentSlide + 1).padStart(2, "0")}
        </span>
        <span className="mx-1 md:mx-2">/</span>
        <span>{String(carouselData.length).padStart(2, "0")}</span>
      </div>
    </div>
  );
};

export default BlogHeader;