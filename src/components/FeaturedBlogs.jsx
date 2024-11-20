import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_API_URL } from "../../Api.Config";

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

  // Filter out the featured blogs and limit to a maximum of 3
  const featuredBlogs = blogs.filter((blog) => blog.featured).slice(0, 3);

  if (featuredBlogs.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-gray-500 text-center">No featured blogs available</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-6 md:gap-8">
        {/* Top featured blog */}
        <div className="w-full lg:w-2/3 mx-auto bg-white rounded-lg shadow-lg p-4">
          <img
            src={`${BASE_API_URL}/${featuredBlogs[0].image}`}
            alt={featuredBlogs[0].title}
            className="w-full h-64 object-cover mb-4 rounded-md"
          />
          <h2 className="text-2xl font-bold mb-2">{featuredBlogs[0].title}</h2>
          <p className="text-gray-700 mb-4">
            {featuredBlogs[0].description.substring(0, 150)}...
          </p>
          <Link
            to={`/blogs/${featuredBlogs[0]._id}`}
            className="text-blue-500 hover:underline"
          >
            Read More
          </Link>
        </div>

        {/* Smaller featured blogs in a responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredBlogs.slice(1).map((blog) => (
            <div key={blog._id} className="bg-white rounded-lg shadow-lg p-4">
              <img
                src={`${BASE_API_URL}/${blog.image}`}
                alt={blog.title}
                className="w-full h-40 object-cover mb-4 rounded-md"
              />
              <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
              <p className="text-gray-700 mb-4">
                {stripHtmlTags(blog.description).substring(0, 150)}...
              </p>
              <Link
                to={`/blogs/${blog._id}`}
                className="text-blue-500 hover:underline"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlogs;
