import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_API_URL } from "../../Api.Config";
import FeaturedBlogSlider from "../pages/blogs/FeaturedBlogSlider";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(9);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories] = useState([
    "All",
    "Sports",
    "Health",
    "Fashion",
    "Sci & Technology",
    "Nature",
  ]);

  const stripHtmlTags = (str) => {
    return str.replace(/<\/?[^>]+(>|$)/g, "");
  };

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

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;

  const filteredBlogs = blogs.filter(
    (blog) =>
      !blog.featured &&
      (selectedCategory === "All" || blog.category.includes(selectedCategory))
  );

  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <p className="text-red-500 text-lg">Error: {error}</p>
        </div>
      </div>
    );
  }


  return (
    <div className="container mx-auto px-4 py-8">

      {/* Featured Blog */}
      <div className="pb-10">
        <FeaturedBlogSlider />
      </div>

      {/* Category Navbar */}
      <div className="mb-6">
        <nav className="flex flex-wrap justify-center space-x-2 space-y-2 md:space-y-0">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md text-sm ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-400 text-white"
              } hover:bg-blue-500`}
            >
              {category}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* List of Blogs */}
        {currentBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentBlogs.map((blog) => (
              <div key={blog._id} className="bg-white rounded-lg shadow-lg p-4">
                <div className="overflow-hidden rounded-md">
                  <img
                    src={`${BASE_API_URL}/${blog.image}`}
                    alt={blog.title}
                    className="w-full h-48 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                  />
                </div>
                <Link
                  to={`/blogs/${blog._id}`}
                  className="mt-4 text-slate-950 hover:underline"
                >
                  <h2 className="text-xl my-2 cursor-pointer font-Roboto font-bold">
                    {blog.title}
                  </h2>
                </Link>
                <p className="text-gray-700 mb-4">
                  {stripHtmlTags(blog.description).substring(0, 150)}...
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500 text-3xl font-bold">
              No blogs available
            </p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {currentBlogs.length > 0 && (
        <div className="flex justify-center mt-6">
          <ul className="flex list-none">
            {[
              ...Array(Math.ceil(filteredBlogs.length / blogsPerPage)).keys(),
            ].map((number) => (
              <li key={number + 1} className="mx-1">
                <button
                  onClick={() => paginate(number + 1)}
                  className={`px-3 py-1 rounded-md ${
                    currentPage === number + 1
                      ? "bg-blue-600 text-white"
                      : "bg-gray-400 text-black"
                  } hover:bg-blue-500`}
                >
                  {number + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
