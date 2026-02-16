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
      {/* Hero Image Container */}
      <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
        <OptimizedImage
          src={blog.image}
          alt={blog.title}
          className="object-cover w-full h-full"
          category={blog.category?.[0]}
          priority={true}
          width={1920}
          height={1080}
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20"></div>

        {/* Centered Title Card */}
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
                className="inline-block px-4 py-2 mb-6 text-sm font-medium text-white rounded-full shadow-lg bg-amber-600"
              >
                {blog.category[0]}
              </motion.span>
            )}

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-6 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl font-Playfair drop-shadow-lg"
            >
              {blog.title}
            </motion.h1>

            {/* Author and Meta Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-6 text-gray-200"
            >
              <div className="flex items-center space-x-2">
                <div className="p-1 rounded-lg bg-amber-500/20">
                  <TbUser className="w-5 h-5 text-amber-400" />
                </div>
                <span className="font-Inter">{blog.authorName}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="p-1 rounded-lg bg-amber-500/20">
                  <TbClock className="w-5 h-5 text-amber-400" />
                </div>
                <span className="font-Inter">{blog.readTime}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="p-1 rounded-lg bg-amber-500/20">
                  <TbCalendar className="w-5 h-5 text-amber-400" />
                </div>
                <span className="font-Inter">{formattedDate}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute z-20 transform -translate-x-1/2 bottom-8 left-1/2"
        >
          <div className="flex justify-center w-6 h-10 border-2 rounded-full border-white/30 backdrop-blur-sm">
            <div className="w-1 h-2 mt-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Back Button - Now properly placed in the content area */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="flex items-center px-4 py-2 mb-8 space-x-2 text-gray-600 transition-colors bg-white border border-gray-200 shadow-md rounded-xl hover:bg-gray-50 hover:border-gray-300 group w-fit"
        >
          <TbArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          <span className="text-sm font-medium font-Inter">Back to Blogs</span>
        </motion.button>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 bg-white shadow-xl rounded-3xl"
            >
              <h2 className="pb-4 mb-6 text-2xl font-bold text-gray-900 border-b border-gray-100 font-Playfair">
                About this Article
              </h2>

              <div
                className="prose prose-lg max-w-none prose-headings:font-Playfair prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-img:rounded-xl prose-img:shadow-lg"
                dangerouslySetInnerHTML={{ __html: blog.description }}
              />

              {/* Tags */}
              {blog.tags && blog.tags.length > 0 && (
                <div className="pt-8 mt-8 border-t border-gray-100">
                  <div className="flex items-start gap-3">
                    <TbTags className="flex-shrink-0 w-5 h-5 mt-1 text-amber-600" />
                    <div>
                      <h3 className="mb-3 text-lg font-semibold text-gray-900 font-Playfair">
                        Tags
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {blog.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-4 py-2 text-sm text-gray-700 transition-all duration-300 bg-gray-100 rounded-full cursor-pointer hover:bg-amber-600 hover:text-white"
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
