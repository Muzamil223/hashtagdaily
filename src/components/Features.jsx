// components/Features.jsx
import React from "react";
import { motion } from "framer-motion";
import { TbSparkles } from "react-icons/tb";

const Features = ({ title }) => {
  return (
    <div className="relative px-4 py-16 sm:px-6 lg:px-8">
      {/* Background Decoration */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <TbSparkles className="w-32 h-32 text-brown-600 animate-spin-slow" />
      </div>

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center justify-center space-x-4"
        >
          {/* Left Bar with Animation */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-0.5 bg-gradient-to-r from-transparent via-brown-600 to-brown-800"
          ></motion.div>

          {/* Title with Icon */}
          <div className="flex items-center px-6 space-x-3">
            <TbSparkles className="w-6 h-6 text-amber-600 animate-pulse" />
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl font-Playfair text-brown-900 whitespace-nowrap">
              {title}
            </h1>
            <TbSparkles className="w-6 h-6 delay-300 text-amber-600 animate-pulse" />
          </div>

          {/* Right Bar with Animation */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-0.5 bg-gradient-to-l from-transparent via-brown-600 to-brown-800"
          ></motion.div>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute w-24 h-1 -translate-x-1/2 rounded-full -bottom-4 left-1/2 bg-gradient-to-r from-brown-600 via-amber-600 to-brown-600"
        ></motion.div>
      </div>
    </div>
  );
};

export default Features;
