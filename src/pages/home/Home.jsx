// pages/home/Home.jsx
import React from "react";
import Hero from "../../components/Hero";
import Features from "../../components/Features";
import BlogHeader from "../../components/BlogHeader";
import FeaturedBlogs from "../../components/FeaturedBlogs";
import { motion } from "framer-motion";
import { TbWriting, TbTrendingUp } from "react-icons/tb";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute rounded-full top-20 left-10 w-72 h-72 bg-gradient-to-br from-brown-600 to-amber-600 blur-3xl animate-pulse"></div>
        <div className="absolute delay-1000 rounded-full bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-brown-800 to-amber-800 blur-3xl animate-pulse"></div>
      </div>

      {/* Blog Header (Full-width Carousel) */}
      <BlogHeader />

      {/* Features Section with Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Features title="Inspire and Discover" />
      </motion.div>

      {/* Hero Section */}
      <Hero />

      {/* Featured Blogs Section */}
      <div className="relative py-16 bg-gradient-to-b from-white to-brown-50">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brown-200 to-transparent"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Features title="Featured Blogs" />
        </motion.div>

        <div className="mt-8 container-custom">
          <FeaturedBlogs />
        </div>

        {/* View All Blogs Button */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            to="/blogs"
            className="relative inline-flex items-center px-8 py-4 space-x-3 overflow-hidden transition-all duration-500 shadow-xl group bg-gradient-to-r from-brown-800 to-brown-900 rounded-xl hover:shadow-2xl"
          >
            <span className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-r from-amber-600 to-brown-600 group-hover:opacity-100"></span>
            <TbTrendingUp className="relative z-10 w-5 h-5 text-white transition-transform group-hover:rotate-12" />
            <span className="relative z-10 text-xl tracking-wide text-white font-Forum">
              View All Blogs
            </span>
            <FiArrowRight className="relative z-10 w-5 h-5 text-white transition-transform group-hover:translate-x-2" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
