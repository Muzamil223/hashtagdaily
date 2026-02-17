// pages/blogs/BlogDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  TbUser,
  TbClock,
  TbCalendar,
  TbCategory,
  TbTags,
  TbArrowLeft,
  TbHeart,
  TbBookmark,
  TbShare,
} from "react-icons/tb";
import { BASE_API_URL } from "../../../Api.Config";
import Sidebar from "./BlogSidebar";
import OptimizedImage from "../../components/OptimizedImage";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch(`${BASE_API_URL}/api/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative">
          <div className="w-20 h-20 border-4 rounded-full border-amber-200"></div>
          <div className="absolute top-0 left-0 w-20 h-20 border-4 rounded-full border-amber-600 border-t-transparent animate-spin"></div>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="p-8 text-center bg-red-50 rounded-2xl">
          <p className="text-lg text-red-600 font-Inter">Error: {error}</p>
        </div>
      </div>
    );

  if (!blog)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="p-8 text-center bg-gray-100 rounded-2xl">
          <p className="text-2xl font-medium text-gray-500 font-Playfair">
            No blog found
          </p>
        </div>
      </div>
    );

  const formattedDate = new Date(blog.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="relative">
      {/* Hero Image Container - Fixed for mobile */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[90vh] overflow-hidden">
        {/* Use regular img tag to ensure proper rendering */}
        <img
          src={blog.image}
          alt={blog.title}
          className="absolute inset-0 object-cover w-full h-full"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200';
          }}
        />
        
        {/* Dark Gradient Overlay - Enhanced for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40"></div>

        {/* Centered Title Card - Adjusted for mobile */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-4xl text-center"
          >
            {/* Category Badge */}
            {blog.category && blog.category[0] && (
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="inline-block px-3 py-1 mb-3 text-xs font-medium text-white rounded-full shadow-lg md:px-4 md:py-2 md:mb-6 md:text-sm bg-amber-600"
              >
                {blog.category[0]}
              </motion.span>
            )}

            {/* Title - Responsive sizing */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="px-2 mb-3 text-xl font-bold leading-tight text-white md:mb-6 md:text-3xl lg:text-4xl xl:text-5xl font-Playfair drop-shadow-lg"
            >
              {blog.title}
            </motion.h1>

            {/* Author and Meta Info - Compact on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-3 text-xs text-gray-200 md:gap-6 md:text-base"
            >
              <div className="flex items-center space-x-1 md:space-x-2">
                <div className="p-1 rounded-lg bg-amber-500/20">
                  <TbUser className="w-3 h-3 text-amber-400 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                </div>
                <span className="font-Inter truncate max-w-[80px] md:max-w-none">{blog.authorName}</span>
              </div>
              <div className="flex items-center space-x-1 md:space-x-2">
                <div className="p-1 rounded-lg bg-amber-500/20">
                  <TbClock className="w-3 h-3 text-amber-400 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                </div>
                <span className="font-Inter">{blog.readTime}</span>
              </div>
              <div className="flex items-center space-x-1 md:space-x-2">
                <div className="p-1 rounded-lg bg-amber-500/20">
                  <TbCalendar className="w-3 h-3 text-amber-400 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                </div>
                <span className="hidden font-Inter sm:inline">{formattedDate}</span>
                <span className="font-Inter sm:hidden">
                  {new Date(blog.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Adjusted for mobile */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute z-20 transform -translate-x-1/2 bottom-4 left-1/2 md:bottom-8"
        >
          <div className="flex justify-center w-5 h-8 border-2 rounded-full border-white/30 backdrop-blur-sm md:w-6 md:h-10">
            <div className="w-0.5 h-1.5 mt-2 bg-white rounded-full animate-pulse md:w-1 md:h-2"></div>
          </div>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8 md:py-16">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="flex items-center px-3 py-1.5 mb-4 space-x-1 text-gray-600 transition-colors bg-white border border-gray-200 shadow-md rounded-xl hover:bg-gray-50 hover:border-gray-300 group w-fit md:px-4 md:py-2 md:mb-8 md:space-x-2"
        >
          <TbArrowLeft className="w-4 h-4 transition-transform md:w-5 md:h-5 group-hover:-translate-x-1" />
          <span className="text-xs font-medium md:text-sm font-Inter">Back to Blogs</span>
        </motion.button>

        <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-4 bg-white shadow-xl md:p-8 rounded-2xl md:rounded-3xl"
            >
              <h2 className="pb-3 mb-4 text-xl font-bold text-gray-900 border-b border-gray-100 md:pb-4 md:mb-6 md:text-2xl font-Playfair">
                About this Article
              </h2>

              <div
                className="prose-sm prose max-w-none prose-headings:font-Playfair prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-img:rounded-xl prose-img:shadow-lg md:prose-base lg:prose-lg"
                dangerouslySetInnerHTML={{ __html: blog.description }}
              />

              {/* Tags */}
              {blog.tags && blog.tags.length > 0 && (
                <div className="pt-6 mt-6 border-t border-gray-100 md:pt-8 md:mt-8">
                  <div className="flex items-start gap-2 md:gap-3">
                    <TbTags className="flex-shrink-0 w-4 h-4 mt-1 text-amber-600 md:w-5 md:h-5" />
                    <div>
                      <h3 className="mb-2 text-base font-semibold text-gray-900 md:mb-3 md:text-lg font-Playfair">
                        Tags
                      </h3>
                      <div className="flex flex-wrap gap-1 md:gap-2">
                        {blog.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs text-gray-700 transition-all duration-300 bg-gray-100 rounded-full cursor-pointer md:px-3 md:py-1.5 md:text-sm hover:bg-amber-600 hover:text-white"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <Sidebar />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;