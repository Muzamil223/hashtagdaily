// components/FeaturedBlogs.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { TbArrowRight, TbClock, TbUser, TbHeart } from "react-icons/tb";
import { BASE_API_URL } from "../../Api.Config";
import OptimizedImage from "./OptimizedImage";

const FeaturedBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_API_URL}/api/blogs`)
      .then((response) => {
        setBlogs(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const stripHtmlTags = (str) => {
    return str.replace(/<\/?[^>]+(>|$)/g, "");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="relative">
          <div className="w-20 h-20 border-4 rounded-full border-amber-200"></div>
          <div className="absolute top-0 left-0 w-20 h-20 border-4 rounded-full border-amber-600 border-t-transparent animate-spin"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="p-8 text-center bg-red-50 rounded-2xl">
          <p className="text-lg text-red-600 font-Inter">Error: {error}</p>
        </div>
      </div>
    );
  }

  const featuredBlogs = blogs.filter((blog) => blog.featured).slice(0, 3);

  if (featuredBlogs.length === 0) {
    return (
      <div className="py-12 container-custom">
        <div className="p-12 text-center bg-gradient-to-br from-amber-50 to-amber-100 rounded-3xl">
          <p className="text-lg text-gray-500 font-Inter">
            No featured blogs available
          </p>
        </div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="space-y-8"
    >
      {/* Main Featured Blog */}
      {featuredBlogs[0] && (
        <motion.div variants={itemVariants}>
          <Link to={`/blogs/${featuredBlogs[0]._id}`} className="block group">
            <div className="relative overflow-hidden transition-all duration-500 bg-white shadow-xl rounded-3xl hover:shadow-2xl hover:-translate-y-1">
              <div className="grid gap-0 md:grid-cols-2">
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden md:h-full">
                  <OptimizedImage
                    src={featuredBlogs[0].image}
                    alt={featuredBlogs[0].title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    category={featuredBlogs[0].category?.[0]}
                    priority={true}
                    width={800}
                    height={600}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-900/50 to-transparent"></div>

                  {/* Featured Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 text-sm font-medium text-white rounded-full shadow-lg bg-gradient-to-r from-amber-500 to-amber-600 font-Inter">
                      ⭐ Featured Story
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col justify-center p-8 md:p-10">
                  {/* Meta Info */}
                  <div className="flex items-center mb-4 space-x-4 text-sm text-gray-500">
                    <span className="flex items-center space-x-1">
                      <TbUser className="w-4 h-4 text-amber-600" />
                      <span className="font-Inter">{featuredBlogs[0].authorName}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <TbClock className="w-4 h-4 text-amber-600" />
                      <span className="font-Inter">{featuredBlogs[0].readTime}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 transition-colors md:text-3xl font-Playfair group-hover:text-amber-700">
                    {featuredBlogs[0].title}
                  </h2>

                  {/* Description */}
                  <p className="mb-6 leading-relaxed text-gray-600 font-Inter">
                    {stripHtmlTags(featuredBlogs[0].description).substring(0, 180)}...
                  </p>

                  {/* Tags */}
                  {featuredBlogs[0].tags && featuredBlogs[0].tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredBlogs[0].tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-amber-100 text-amber-700 font-Inter"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Read More */}
                  <div className="flex items-center space-x-2 font-medium text-amber-600 group/link">
                    <span className="font-Inter">Read Full Story</span>
                    <TbArrowRight className="w-5 h-5 transition-transform group-hover/link:translate-x-2" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      )}

      {/* Smaller Featured Blogs Grid */}
      <motion.div
        variants={containerVariants}
        className="grid gap-8 md:grid-cols-2"
      >
        {featuredBlogs.slice(1).map((blog) => (
          <motion.div key={blog._id} variants={itemVariants}>
            <Link to={`/blogs/${blog._id}`} className="block h-full group">
              <div className="h-full overflow-hidden transition-all duration-500 bg-white shadow-lg rounded-2xl hover:shadow-xl hover:-translate-y-1">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <OptimizedImage
                    src={blog.image}
                    alt={blog.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    category={blog.category?.[0]}
                    width={400}
                    height={300}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                  {/* Category Badge */}
                  {blog.category && blog.category[0] && (
                    <span className="absolute px-3 py-1 text-xs font-medium rounded-full shadow-lg top-4 right-4 bg-white/90 backdrop-blur-sm text-amber-700 font-Inter">
                      {blog.category[0]}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors font-Playfair group-hover:text-amber-700 line-clamp-2">
                    {blog.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-4 text-sm leading-relaxed text-gray-600 font-Inter line-clamp-3">
                    {stripHtmlTags(blog.description).substring(0, 120)}...
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-3 text-sm text-gray-500">
                      <span className="flex items-center space-x-1">
                        <TbUser className="w-4 h-4 text-amber-600" />
                        <span className="font-Inter">{blog.authorName}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <TbClock className="w-4 h-4 text-amber-600" />
                        <span className="font-Inter">{blog.readTime}</span>
                      </span>
                    </div>

                    <button className="flex items-center space-x-1 transition-colors text-amber-600 hover:text-amber-700">
                      <TbHeart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default FeaturedBlogs;