// pages/blogs/BlogSidebar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import {
  TbCategory,
  TbTags,
  TbUser,
  TbClock,
  TbCalendar,
  TbHeart,
  TbMessageCircle,
  TbEye,
  TbSearch,
  TbArrowRight,
  TbTrendingUp,
  TbStar,
  TbBookmark,
} from "react-icons/tb";
import { BASE_API_URL } from "../../../Api.Config";
import OptimizedImage from "../../components/OptimizedImage";

const BlogSidebar = ({ selectedCategory, onCategoryChange }) => {
  const [blogs, setBlogs] = useState([]);
  const [popularPosts, setPopularPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${BASE_API_URL}/api/blogs`).then((response) => {
      const data = response.data;
      setBlogs(data);

      // Extract unique categories
      const allCategories = data
        .flatMap((blog) => blog.category || [])
        .filter((value, index, self) => self.indexOf(value) === index);
      setCategories(["All", ...allCategories]);

      // Extract unique tags
      const allTags = data
        .flatMap((blog) => blog.tags || [])
        .filter((value, index, self) => self.indexOf(value) === index)
        .slice(0, 15);
      setTags(allTags);

      // Get most recent posts for popular section
      const recent = [...data]
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 4);
      setPopularPosts(recent);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="p-6 bg-white shadow-lg rounded-2xl">
        <div className="space-y-4 animate-pulse">
          <div className="w-3/4 h-6 bg-gray-200 rounded"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="w-5/6 h-4 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <aside className="space-y-8">
      {/* Categories Widget */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="p-6 transition-shadow bg-white shadow-lg rounded-2xl hover:shadow-xl"
      >
        <h3 className="flex items-center mb-4 text-xl font-bold text-gray-900 font-Playfair">
          <TbCategory className="w-5 h-5 mr-2 text-amber-600" />
          Categories
        </h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <button
                onClick={() => onCategoryChange(category)}
                className={`flex items-center justify-between w-full px-4 py-2.5 rounded-xl transition-all duration-300 group ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-md"
                    : "hover:bg-amber-50 text-gray-700"
                }`}
              >
                <span className="text-sm font-medium font-Inter">{category}</span>
                <TbArrowRight
                  className={`w-4 h-4 transition-all ${
                    selectedCategory === category
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Popular Posts Widget */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="p-6 transition-shadow bg-white shadow-lg rounded-2xl hover:shadow-xl"
      >
        <h3 className="flex items-center mb-4 text-xl font-bold text-gray-900 font-Playfair">
          <TbTrendingUp className="w-5 h-5 mr-2 text-amber-600" />
          Popular Posts
        </h3>
        <div className="space-y-4">
          {popularPosts.map((post) => (
            <Link
              key={post._id}
              to={`/blogs/${post._id}`}
              className="flex space-x-3 group"
            >
              <div className="relative flex-shrink-0 w-16 h-16 overflow-hidden rounded-lg shadow-md">
                <OptimizedImage
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  category={post.category?.[0]}
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-900 transition-colors font-Playfair line-clamp-2 group-hover:text-amber-600">
                  {post.title}
                </h4>
                <p className="mt-1 text-xs text-gray-500 font-Inter">
                  {new Date(post.createdAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Tags Widget */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="p-6 transition-shadow bg-white shadow-lg rounded-2xl hover:shadow-xl"
      >
        <h3 className="flex items-center mb-4 text-xl font-bold text-gray-900 font-Playfair">
          <TbTags className="w-5 h-5 mr-2 text-amber-600" />
          Popular Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              className="px-3 py-1.5 text-xs font-medium text-gray-600 transition-all duration-300 bg-gray-100 rounded-full hover:bg-amber-600 hover:text-white hover:shadow-md transform hover:-translate-y-0.5"
            >
              #{tag}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Newsletter Widget */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="p-6 text-white transition-shadow shadow-xl bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl hover:shadow-2xl"
      >
        <h3 className="flex items-center mb-2 text-xl font-bold font-Playfair">
          <TbBookmark className="w-5 h-5 mr-2" />
          Newsletter
        </h3>
        <p className="mb-4 text-sm text-amber-100 font-Inter">
          Get the latest posts delivered straight to your inbox.
        </p>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-3 text-gray-900 transition-all rounded-xl focus:outline-none focus:ring-2 focus:ring-white placeholder:text-gray-400"
          />
          <button
            type="submit"
            className="w-full px-4 py-3 font-medium transition-all duration-300 bg-white rounded-xl text-amber-600 hover:bg-amber-50 hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Subscribe Now
          </button>
        </form>
        <p className="mt-3 text-xs text-center text-amber-200">
          No spam, unsubscribe anytime.
        </p>
      </motion.div>
    </aside>
  );
};

export default BlogSidebar;