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
  TbX,
} from "react-icons/tb";
import { BASE_API_URL } from "../../Api.Config";
import FeaturedBlogSlider from "../pages/blogs/FeaturedBlogSlider";
import BlogSidebar from "../pages/blogs/BlogSidebar";
import OptimizedImage from "./OptimizedImage";
import { preloadImages } from "../utils/imageUtils";
import Loader from "./Loader";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [allBlogs, setAllBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(6);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(null);
  const [initialLoad, setInitialLoad] = useState(true);

  const stripHtmlTags = (str) => {
    return str.replace(/<\/?[^>]+(>|$)/g, "");
  };

  // Initial fetch of all blogs
  useEffect(() => {
    fetchAllBlogs();
  }, []);

  const fetchAllBlogs = async () => {
    try {
      const response = await axios.get(`${BASE_API_URL}/api/blogs`);
      setAllBlogs(response.data);
      setBlogs(response.data); // Set blogs immediately with all data
      
      // Preload featured blog images
      const featuredImages = response.data
        .filter((blog) => blog.featured)
        .map((blog) => blog.image);

      if (featuredImages.length > 0) {
        preloadImages(featuredImages);
      }

      setLoading(false);
      setInitialLoad(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
      setInitialLoad(false);
    }
  };

  // Search function using backend API
  const performSearch = async (term) => {
    if (!term.trim()) {
      // If search is empty, show all blogs
      setBlogs(allBlogs);
      setSearchResults(null);
      return;
    }

    setSearchLoading(true);
    try {
      const response = await axios.get(`${BASE_API_URL}/api/blogs/search?q=${encodeURIComponent(term)}`);
      setSearchResults(response.data);
      // If API returns results, use them; otherwise use empty array
      setBlogs(response.data.results || []);
      setCurrentPage(1);
    } catch (err) {
      console.error("Search error:", err);
      // Fallback to client-side filtering
      const filtered = allBlogs.filter(blog => 
        !blog.featured &&
        (blog.title?.toLowerCase().includes(term.toLowerCase()) ||
        blog.description?.toLowerCase().includes(term.toLowerCase()) ||
        blog.authorName?.toLowerCase().includes(term.toLowerCase()) ||
        (blog.tags && blog.tags.some(tag => tag?.toLowerCase().includes(term.toLowerCase()))) ||
        (blog.category && blog.category.some(cat => cat?.toLowerCase().includes(term.toLowerCase()))))
      );
      setBlogs(filtered);
    } finally {
      setSearchLoading(false);
    }
  };

  // Handle search input change with debounce
  useEffect(() => {
    if (!initialLoad && allBlogs.length > 0) {
      const timer = setTimeout(() => {
        performSearch(searchTerm);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [searchTerm, allBlogs, initialLoad]);

  // Filter and sort blogs (exclude featured)
  const getFilteredBlogs = () => {
    return blogs
      .filter(
        (blog) =>
          !blog.featured &&
          (selectedCategory === "All" ||
            (blog.category && blog.category.includes(selectedCategory)))
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
  };

  const filteredBlogs = getFilteredBlogs();
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setBlogs(allBlogs);
    setSearchResults(null);
    setCurrentPage(1);
  };

  if (loading) {
    return (
    <Loader/>
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
      {/* Full-width Featured Blog Slider */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <FeaturedBlogSlider />
      </motion.div>

      {/* Header Section */}
      <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8 md:py-8">
        <div className="mb-8 text-center md:mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl font-Playfair"
          >
            Our <span className="text-amber-600">Blog</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-base text-gray-600 md:text-lg font-Inter"
          >
            Discover stories, insights, and ideas from our community of writers
          </motion.p>
        </div>

        {/* Main Content with Sidebar */}
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
          {/* Main Content - Blog Grid */}
          <div className="lg:w-2/3">
            {/* Search and Filter Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col gap-3 mb-6 sm:flex-row sm:items-center sm:justify-between md:mb-8"
            >
              {/* Search with clear button */}
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search articles by title, author, tags, or categories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 pl-10 pr-10 text-sm transition-all duration-300 border-2 border-gray-200 rounded-xl md:py-3 md:pl-12 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                />
                <TbSearch className="absolute w-4 h-4 text-gray-400 -translate-y-1/2 left-3 top-1/2 md:w-5 md:h-5 md:left-4" />
                
                {/* Clear search button */}
                {searchTerm && (
                  <button
                    onClick={clearSearch}
                    className="absolute text-gray-400 transition-colors -translate-y-1/2 right-3 top-1/2 hover:text-amber-600"
                  >
                    <TbX className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                )}
                
                {/* Loading indicator */}
                {searchLoading && (
                  <div className="absolute -translate-y-1/2 right-10 top-1/2">
                    <div className="w-4 h-4 border-2 rounded-full border-amber-600 border-t-transparent animate-spin"></div>
                  </div>
                )}
              </div>

              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 text-sm transition-all duration-300 bg-white border-2 border-gray-200 rounded-xl md:px-4 md:py-3 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="title">Title A-Z</option>
              </select>
            </motion.div>

            {/* Search Results Info */}
            {searchResults && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-4 text-sm text-gray-600"
              >
                Found <span className="font-semibold text-amber-600">{searchResults.total}</span> results for "{searchResults.query}"
              </motion.div>
            )}

            {/* Blog Grid */}
            {currentBlogs.length > 0 ? (
              <>
                <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
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
                        className="block overflow-hidden transition-all duration-500 bg-white shadow-lg rounded-xl md:rounded-2xl hover:shadow-xl hover:-translate-y-2"
                      >
                        {/* Image Container */}
                        <div className="relative h-40 overflow-hidden sm:h-44 md:h-48">
                          <OptimizedImage
                            src={blog.image}
                            alt={blog.title}
                            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                          />

                          {/* Category Badge */}
                          {blog.category && blog.category[0] && (
                            <div className="absolute top-2 left-2 md:top-3 md:left-3">
                              <span className="px-1.5 py-0.5 text-xs font-medium text-white rounded-full md:px-2 md:py-1 bg-amber-600">
                                {blog.category[0]}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="p-3 md:p-5">
                          {/* Meta Info */}
                          <div className="flex items-center mb-2 space-x-2 text-xs text-gray-500 md:space-x-3 md:mb-3">
                            <span className="flex items-center space-x-1">
                              <TbUser className="w-3 h-3" />
                              <span className="truncate max-w-[50px] md:max-w-none">{blog.authorName}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <TbClock className="w-3 h-3" />
                              <span>{blog.readTime}</span>
                            </span>
                          </div>

                          {/* Title */}
                          <h2 className="mb-1 text-base font-bold text-gray-900 transition-colors md:text-lg font-Playfair group-hover:text-amber-600 line-clamp-2">
                            {blog.title}
                          </h2>

                          {/* Description */}
                          <p className="mb-2 text-xs text-gray-600 md:text-sm font-Inter line-clamp-2 md:mb-3">
                            {stripHtmlTags(blog.description).substring(0, 80)}...
                          </p>

                          {/* Read More */}
                          <div className="flex items-center justify-between pt-2 mt-2 border-t border-gray-100 md:pt-3 md:mt-3">
                            <span className="text-xs font-medium text-amber-600 md:text-sm">
                              Read More
                            </span>
                            <TbArrowRight className="w-3 h-3 transition-transform text-amber-600 md:w-4 md:h-4 group-hover:translate-x-1" />
                          </div>
                        </div>
                      </Link>
                    </motion.article>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center mt-8 md:mt-10">
                    <nav className="flex items-center space-x-1 md:space-x-2">
                      <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`px-3 py-1 text-xs rounded-lg md:px-4 md:py-2 md:text-sm font-Inter transition-all duration-300 ${
                          currentPage === 1
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                            : "bg-white text-gray-700 hover:bg-amber-600 hover:text-white shadow-md hover:shadow-lg"
                        }`}
                      >
                        Prev
                      </button>

                      {[...Array(totalPages)].map((_, i) => (
                        <button
                          key={i + 1}
                          onClick={() => paginate(i + 1)}
                          className={`w-7 h-7 text-xs rounded-lg md:w-9 md:h-9 md:text-sm font-Inter transition-all duration-300 ${
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
                        className={`px-3 py-1 text-xs rounded-lg md:px-4 md:py-2 md:text-sm font-Inter transition-all duration-300 ${
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
                className="py-12 text-center"
              >
                <div className="inline-block p-6 bg-gray-100 rounded-xl md:p-8 md:rounded-2xl">
                  <p className="text-xl font-medium text-gray-500 md:text-2xl font-Playfair">
                    {searchTerm ? "No matching articles found" : "No articles found"}
                  </p>
                  <p className="mt-1 text-xs text-gray-400 md:mt-2 md:text-sm font-Inter">
                    {searchTerm ? "Try different keywords or clear search" : "Try adjusting your search or filter"}
                  </p>
                  {searchTerm && (
                    <button
                      onClick={clearSearch}
                      className="px-4 py-2 mt-4 text-sm text-white transition-colors rounded-lg bg-amber-600 hover:bg-amber-700"
                    >
                      Clear Search
                    </button>
                  )}
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