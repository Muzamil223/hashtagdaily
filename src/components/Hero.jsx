// components/Hero.jsx
import React from "react";
import main from "../assets/design2.jpg";
import { motion } from "framer-motion";
import { TbArrowRight, TbBookmark, TbShare } from "react-icons/tb";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative py-16 overflow-hidden">
      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block"
            >
              <span className="px-4 py-2 text-sm font-medium border rounded-full bg-gradient-to-r from-brown-100 to-amber-100 text-brown-800 font-Inter border-brown-200">
                ✨ Welcome to HashtagDaily
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-Playfair leading-[1.2]"
            >
              <span className="text-brown-900">Discover Fresh Insights</span>
              <br />
              <span className="text-transparent bg-gradient-to-r from-brown-600 to-amber-600 bg-clip-text">
                Your Daily Dose
              </span>
              <br />
              <span className="text-brown-800">of Engaging Stories</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg leading-relaxed text-gray-600 font-Inter"
            >
              Welcome to our blog, where curiosity meets knowledge! Dive into a
              world of diverse topics, from the latest trends and in-depth
              analyses to personal stories and expert advice.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-center space-x-8"
            >
              <div>
                <span className="text-3xl font-bold font-Playfair text-brown-900">
                  10K+
                </span>
                <p className="text-sm text-gray-500 font-Inter">Articles</p>
              </div>
              <div>
                <span className="text-3xl font-bold font-Playfair text-brown-900">
                  5K+
                </span>
                <p className="text-sm text-gray-500 font-Inter">Writers</p>
              </div>
              <div>
                <span className="text-3xl font-bold font-Playfair text-brown-900">
                  50K+
                </span>
                <p className="text-sm text-gray-500 font-Inter">Readers</p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/blogs"
                className="relative inline-flex items-center px-8 py-4 space-x-3 overflow-hidden transition-all duration-500 shadow-xl group bg-gradient-to-r from-brown-800 to-brown-900 rounded-xl hover:shadow-2xl"
              >
                <span className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-r from-amber-600 to-brown-600 group-hover:opacity-100"></span>
                <span className="relative text-lg text-white font-Forum">
                  Start Reading
                </span>
                <TbArrowRight className="relative w-5 h-5 text-white transition-transform group-hover:translate-x-2" />
              </Link>

              <button className="relative inline-flex items-center px-8 py-4 space-x-3 transition-all duration-500 bg-white border-2 group border-brown-200 rounded-xl hover:border-brown-300 hover:shadow-lg">
                <span className="text-lg text-brown-800 font-Forum">
                  Learn More
                </span>
                <TbBookmark className="w-5 h-5 transition-transform text-brown-600 group-hover:rotate-12" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden shadow-2xl rounded-2xl group">
              {/* Image */}
              <img
                src={main}
                alt="Featured"
                className="w-full h-[600px] object-cover transform group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="absolute p-6 border bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md rounded-xl border-white/20"
              >
                <p className="text-lg leading-relaxed text-white font-Forum">
                  "Explore thought-provoking articles and expert insights that
                  keep you ahead of the curve."
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm text-amber-300 font-Inter">
                    Featured Article
                  </span>
                  <button className="flex items-center space-x-2 text-white transition-colors hover:text-amber-300">
                    <span>Share</span>
                    <TbShare className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute flex space-x-2 top-6 right-6">
                <div className="w-2 h-2 rounded-full bg-amber-500 animate-ping"></div>
                <div className="w-2 h-2 rounded-full bg-amber-500"></div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute w-64 h-64 rounded-full opacity-50 -z-10 -bottom-6 -right-6 bg-gradient-to-br from-brown-200 to-amber-200 blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
