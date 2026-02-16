// components/BlogsPage.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import {
  TbCalendar,
  TbUser,
  TbClock,
  TbArrowRight,
  TbSearch,
} from "react-icons/tb";
import { BASE_API_URL } from "../../Api.Config";
import FeaturedBlogSlider from "../pages/blogs/FeaturedBlogSlider";
import BlogSidebar from "../pages/blogs/BlogSidebar";
import OptimizedImage from "./OptimizedImage";
import { preloadImages } from "../utils/imageUtils";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(6);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  const stripHtmlTags = (str) => {
    return str.replace(/<\/?[^>]+(>|$)/g, "");
  };

  useEffect(() => {
    axios.get(`${BASE_API_URL}/api/blogs`).then((response) => {
      setBlogs(response.data);

      // Preload featured blog images
      const featuredImages = response.data
        .filter((blog) => blog.featured)
        .map((blog) => blog.image);

      if (featuredImages.length > 0) {
        preloadImages(featuredImages);
      }

      setLoading(false);
    });
  }, []);
  // Filter and sort blogs
  const filteredBlogs = blogs
    .filter(
      (blog) =>
        !blog.featured &&
        (selectedCategory === "All" ||
          (blog.category && blog.category.includes(selectedCategory))) &&
        (searchTerm === "" ||
          blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.description.toLowerCase().includes(searchTerm.toLowerCase())),
    )
    .sort((a, b) => {
      if (sortBy === "newest") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      } else if (sortBy === "oldest") {
        return new Date(a.createdAt) - new Date(b.createdAt);
      } else if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="relative">
          <div className="w-20 h-20 border-4 rounded-full border-amber-200"></div>
          <div className="absolute top-0 left-0 w-20 h-20 border-4 rounded-full border-amber-600 border-t-transparent animate-spin"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="p-8 text-center bg-red-50 rounded-2xl">
          <p className="text-lg text-red-600 font-Inter">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden">
      {/* Full-width Featured Blog Slider - NO CONTAINER RESTRICTIONS */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <FeaturedBlogSlider />
      </motion.div>

      {/* Header Section - Now with container */}
      <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl font-Playfair"
          >
            Our <span className="text-amber-600">Blog</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-gray-600 font-Inter"
          >
            Discover stories, insights, and ideas from our community of writers
          </motion.p>
        </div>

        {/* Main Content with Sidebar */}
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Main Content - Blog Grid */}
          <div className="lg:w-2/3">
            {/* Search and Filter Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col gap-4 mb-8 sm:flex-row sm:items-center sm:justify-between"
            >
              {/* Search */}
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 transition-all duration-300 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                />
                <TbSearch className="absolute w-5 h-5 text-gray-400 -translate-y-1/2 left-4 top-1/2" />
              </div>

              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 transition-all duration-300 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="title">Title A-Z</option>
              </select>
            </motion.div>

            {/* Blog Grid */}
            {currentBlogs.length > 0 ? (
              <>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {currentBlogs.map((blog, index) => (
                    <motion.article
                      key={blog._id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group"
                    >
                      <Link
                        to={`/blogs/${blog._id}`}
                        className="block overflow-hidden transition-all duration-500 bg-white shadow-lg rounded-2xl hover:shadow-xl hover:-translate-y-2"
                      >
                        {/* Image Container */}
                        <div className="relative h-48 overflow-hidden">
                          <OptimizedImage
                            src={blog.image}
                            alt={blog.title}
                            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                          />

                          {/* Category Badge */}
                          {blog.category && blog.category[0] && (
                            <div className="absolute top-3 left-3">
                              <span className="px-2 py-1 text-xs font-medium text-white rounded-full bg-amber-600">
                                {blog.category[0]}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="p-5">
                          {/* Meta Info */}
                          <div className="flex items-center mb-3 space-x-3 text-xs text-gray-500">
                            <span className="flex items-center space-x-1">
                              <TbUser className="w-3 h-3" />
                              <span>{blog.authorName}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <TbClock className="w-3 h-3" />
                              <span>{blog.readTime}</span>
                            </span>
                          </div>

                          {/* Title */}
                          <h2 className="mb-2 text-lg font-bold text-gray-900 transition-colors font-Playfair group-hover:text-amber-600 line-clamp-2">
                            {blog.title}
                          </h2>

                          {/* Description */}
                          <p className="mb-3 text-sm text-gray-600 font-Inter line-clamp-2">
                            {stripHtmlTags(blog.description).substring(0, 100)}
                            ...
                          </p>

                          {/* Read More */}
                          <div className="flex items-center justify-between pt-3 mt-3 border-t border-gray-100">
                            <span className="text-xs font-medium text-amber-600">
                              Read More
                            </span>
                            <TbArrowRight className="w-4 h-4 transition-transform text-amber-600 group-hover:translate-x-1" />
                          </div>
                        </div>
                      </Link>
                    </motion.article>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center mt-10">
                    <nav className="flex items-center space-x-2">
                      <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 rounded-xl font-Inter text-sm transition-all duration-300 ${
                          currentPage === 1
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                            : "bg-white text-gray-700 hover:bg-amber-600 hover:text-white shadow-md hover:shadow-lg"
                        }`}
                      >
                        Previous
                      </button>

                      {[...Array(totalPages)].map((_, i) => (
                        <button
                          key={i + 1}
                          onClick={() => paginate(i + 1)}
                          className={`w-9 h-9 rounded-xl font-Inter text-sm transition-all duration-300 ${
                            currentPage === i + 1
                              ? "bg-amber-600 text-white shadow-lg shadow-amber-200 scale-110"
                              : "bg-white text-gray-700 hover:bg-amber-100 hover:text-amber-700"
                          }`}
                        >
                          {i + 1}
                        </button>
                      ))}

                      <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 rounded-xl font-Inter text-sm transition-all duration-300 ${
                          currentPage === totalPages
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                            : "bg-white text-gray-700 hover:bg-amber-600 hover:text-white shadow-md hover:shadow-lg"
                        }`}
                      >
                        Next
                      </button>
                    </nav>
                  </div>
                )}
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-16 text-center"
              >
                <div className="inline-block p-8 bg-gray-100 rounded-2xl">
                  <p className="text-2xl font-medium text-gray-500 font-Playfair">
                    No articles found
                  </p>
                  <p className="mt-2 text-gray-400 font-Inter">
                    Try adjusting your search or filter
                  </p>
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <BlogSidebar
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
