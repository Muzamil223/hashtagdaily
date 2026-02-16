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

  // Custom Arrow Components
  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute z-20 flex items-center justify-center transition-all duration-300 -translate-y-1/2 border left-8 top-1/2 w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl border-white/20 hover:bg-white/20 hover:scale-110 group"
    >
      <FaChevronLeft className="w-6 h-6 text-white transition-transform group-hover:-translate-x-1" />
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute z-20 flex items-center justify-center transition-all duration-300 -translate-y-1/2 border right-8 top-1/2 w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl border-white/20 hover:bg-white/20 hover:scale-110 group"
    >
      <FaChevronRight className="w-6 h-6 text-white transition-transform group-hover:translate-x-1" />
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
      <div className="absolute z-20 -translate-x-1/2 bottom-8 left-1/2">
        <ul className="flex space-x-3">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`w-3 h-3 rounded-full transition-all duration-500 cursor-pointer ${
          i === currentSlide
            ? "bg-amber-500 scale-125 shadow-lg"
            : "bg-white/50 hover:bg-white/80"
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

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Slider ref={sliderRef} {...settings} className="h-full">
        {carouselData.map((item, index) => (
          <div key={item.id} className="relative w-full h-screen">
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

            {/* Animated Shapes */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute w-64 h-64 rounded-full top-20 left-20 bg-gradient-to-r from-amber-500/20 to-brown-500/20 blur-3xl animate-pulse"></div>
              <div className="absolute delay-1000 rounded-full bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-brown-500/20 to-amber-500/20 blur-3xl animate-pulse"></div>
            </div>

            {/* Content */}
            <div className="relative flex items-center h-full container-custom">
              <div className="max-w-3xl">
                {/* Category Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-block mb-6"
                >
                  <span className="px-4 py-2 text-sm tracking-wider text-white border rounded-full bg-white/10 backdrop-blur-md font-Inter border-white/20">
                    {item.category}
                  </span>
                </motion.div>

                {/* Main Title - Fixed spacing and color */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-5xl md:text-7xl lg:text-8xl font-bold font-Playfair mb-6 leading-[1.1] text-white"
                >
                  {item.title.split(" ").map((word, i) => (
                    <React.Fragment key={i}>
                      <span className="inline-block transition-all duration-300 hover:scale-110 hover:text-amber-300">
                        {word}
                      </span>
                      {i < item.title.split(" ").length - 1 && (
                        <span className="inline-block w-4">&nbsp;</span>
                      )}
                    </React.Fragment>
                  ))}
                </motion.h1>

                {/* Subtitle - Fixed color */}
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="mb-6 text-2xl md:text-3xl font-Forum text-amber-300"
                >
                  {item.subtitle}
                </motion.h2>

                {/* Description - Fixed color */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="max-w-2xl mb-8 text-lg leading-relaxed text-gray-200 md:text-xl"
                >
                  {item.description}
                </motion.p>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <Link
                    to="/blogs"
                    className="relative inline-flex items-center px-8 py-4 space-x-4 overflow-hidden transition-all duration-500 shadow-2xl group bg-gradient-to-r from-amber-600 to-brown-600 rounded-xl hover:shadow-amber-500/25"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
                    <span className="relative text-xl tracking-wide text-white font-Forum">
                      {item.cta}
                    </span>
                    <TbArrowRight className="relative w-5 h-5 text-white transition-transform group-hover:translate-x-2" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Autoplay Control */}
      <button
        onClick={toggleAutoplay}
        className="absolute z-20 flex items-center justify-center w-12 h-12 transition-all duration-300 border rounded-full bottom-8 right-8 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20"
      >
        {isPlaying ? (
          <FaPause className="w-4 h-4 text-white" />
        ) : (
          <FaPlay className="w-4 h-4 text-white" />
        )}
      </button>

      {/* Slide Counter */}
      <div className="absolute z-20 text-sm bottom-8 left-8 text-white/80 font-Inter">
        <span className="text-2xl font-bold text-white">
          {String(currentSlide + 1).padStart(2, "0")}
        </span>
        <span className="mx-2">/</span>
        <span>{String(carouselData.length).padStart(2, "0")}</span>
      </div>
    </div>
  );
};

export default BlogHeader;
