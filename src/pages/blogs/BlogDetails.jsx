import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BASE_API_URL } from "../../../Api.Config";
import Sidebar from "./SideBar";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      <div className="flex justify-center items-center h-screen">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
          </div>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <p className="text-red-500 text-lg">Error: {error}</p>
        </div>
      </div>
    );

  if (!blog)
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 text-3xl font-bold">No blog found</p>
      </div>
    );

  const formattedDate = new Date(blog.createdAt).toLocaleDateString();

  return (
    <div className="mb-8 py-6 px-4 sm:px-6 lg:px-8 mt-6 lg:mt-16">
      <div className="relative">
        {/* Blog Image */}
        <img
          src={`${BASE_API_URL}/${blog.image}`}
          alt={blog.title}
          className="w-full object-cover rounded-md shadow-lg"
        />

        {/* Title and Author Information */}
        <div className="relative mx-6 sm:mx-[190px] inset-x-4 sm:inset-x-5  transform -translate-y-1/2 text-center bg-white p-4 sm:p-6 lg:p-8 rounded-lg">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-Playfair mb-4 text-black leading-snug sm:leading-snug md:leading-tight lg:leading-tight">
            {blog.title}
          </h1>
          <p className="text-base sm:text-lg font-semibold text-black">
            <span className="text-gray-900">Author:</span> {blog.authorName}
          </p>
        </div>
      </div>

      {/* Blog Content */}
      <div className="mx-auto gap-6 flex flex-col lg:flex-row ">
        <div className="max-w-[90%] sm:max-w-[80%] lg:max-w-[70%] flex-wrap text-left ">
          <div
            className="blog-content text-gray-700 mb-4 font-Montserrat text-sm sm:text-base lg:text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blog.description }}
          ></div>
          <div className="text-gray-600 mb-4">
            <p className="font-semibold">
              <span className="text-gray-900">Read Time:</span> {blog.readTime}
            </p>
            <p className="font-semibold">
              <span className="text-gray-900">Created At:</span> {formattedDate}
            </p>
          </div>

          <div className="mb-4 flex flex-col justify-center gap-6">
            {/* Categories */}
            <div className="flex items-center text-sm sm:text-base text-gray-800">
              <p className="font-semibold text-gray-900 mr-2">Category:</p>
              <div className="flex gap-2">
                {blog.category.map((cat, index) => (
                  <span key={cat} className="flex items-center">
                    {cat}
                    {index < blog.category.length - 1 && (
                      <span className="mx-2">|</span>
                    )}
                  </span>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="flex items-center text-sm sm:text-base text-gray-800">
              <p className="font-semibold text-gray-900 mr-2">Tags:</p>
              <div className="flex gap-2">
                {blog.tags.map((tag, index) => (
                  <span key={tag} className="flex items-center">
                    {tag}
                    {index < blog.tags.length - 1 && (
                      <span className="mx-2">|</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
