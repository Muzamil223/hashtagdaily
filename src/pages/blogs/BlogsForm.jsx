// pages/blogs/BlogsForm.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import {
  TbWriting,
  TbPhoto,
  TbTags,
  TbCategory,
  TbUser,
  TbClock,
  TbStar,
  TbArrowLeft,
  TbCheck,
  TbAlertCircle,
  TbUpload,
  TbPlus,
  TbX,
} from "react-icons/tb";
import { BASE_API_URL, testApiConnection } from "../../../Api.Config";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreateBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    tags: "",
    categories: [], // Changed to array for multiple categories
    featured: false,
    authorName: "",
    readTime: "",
  });

  const [categoryInput, setCategoryInput] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [apiStatus, setApiStatus] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageError, setImageError] = useState(false);
  const navigate = useNavigate();

  // Available categories for suggestions
  const availableCategories = [
    "Sports",
    "Health",
    "Fashion",
    "Sci & Technology",
    "Nature",
    "Travel",
    "Food",
    "Business",
    "Lifestyle",
    "Education",
    "Entertainment",
    "Politics",
  ];

  // Test API connection on component mount
  useEffect(() => {
    const testConnection = async () => {
      const result = await testApiConnection();
      setApiStatus(result ? "connected" : "disconnected");
    };
    testConnection();
  }, []);

  // Update image preview when URL changes
  useEffect(() => {
    if (formData.image) {
      setImagePreview(formData.image);
      setImageError(false);
    } else {
      setImagePreview(null);
    }
  }, [formData.image]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleDescriptionChange = (value) => {
    setFormData({ ...formData, description: value });
  };

  // Add category
  const addCategory = () => {
    if (
      categoryInput.trim() &&
      !formData.categories.includes(categoryInput.trim())
    ) {
      setFormData({
        ...formData,
        categories: [...formData.categories, categoryInput.trim()],
      });
      setCategoryInput("");
    }
  };

  // Remove category
  const removeCategory = (categoryToRemove) => {
    setFormData({
      ...formData,
      categories: formData.categories.filter((cat) => cat !== categoryToRemove),
    });
  };

  // Handle key press in category input
  const handleCategoryKeyPress = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addCategory();
    }
  };

  const validateForm = () => {
    if (!formData.title.trim()) return "Title is required";
    if (!formData.description.trim()) return "Description is required";
    if (!formData.image.trim()) return "Image URL is required";

    // Basic URL validation
    try {
      new URL(formData.image);
    } catch {
      return "Please enter a valid image URL";
    }

    if (formData.categories.length === 0)
      return "At least one category is required";
    if (!formData.authorName.trim()) return "Author name is required";
    if (!formData.readTime.trim()) return "Read time is required";

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      toast.error(validationError);
      return;
    }

    setError(null);
    setLoading(true);

    // Prepare data
    const submitData = {
      title: formData.title.trim(),
      description: formData.description.trim(),
      image: formData.image.trim(),
      tags: formData.tags
        ? formData.tags
            .split(",")
            .map((tag) => tag.trim())
            .filter((tag) => tag)
        : [],
      category: formData.categories, // Send as array
      featured: formData.featured,
      authorName: formData.authorName.trim(),
      readTime: formData.readTime.trim(),
    };

    try {
      const response = await axios({
        method: "post",
        url: `${BASE_API_URL}/api/blogs`,
        data: submitData,
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 10000,
      });

      toast.success("Blog created successfully! 🎉");

      // Reset form
      setFormData({
        title: "",
        description: "",
        image: "",
        tags: "",
        categories: [],
        featured: false,
        authorName: "",
        readTime: "",
      });
      setCategoryInput("");

      // Navigate after delay
      setTimeout(() => {
        navigate("/blogs");
      }, 2000);
    } catch (err) {
      let errorMessage = "Failed to create blog. ";

      if (err.code === "ECONNABORTED") {
        errorMessage += "Request timeout. Server might be down.";
      } else if (!err.response) {
        errorMessage +=
          "Cannot connect to server. Make sure backend is running.";
      } else {
        errorMessage += err.response?.data?.error || err.message;
      }

      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Quill modules configuration with fixed header toolbar
  const quillModules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ color: [] }, { background: [] }],
        ["link", "image", "blockquote"],
        ["clean"],
      ],
    },
  };

  return (
    <div className="min-h-screen px-4 py-8 mt-20 bg-gradient-to-b from-amber-50/30 to-white">
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate(-1)}
        className="flex items-center mb-6 space-x-2 text-gray-600 transition-colors group hover:text-amber-600"
      >
        <TbArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
        <span className="font-Inter">Back to Blogs</span>
      </motion.button>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-amber-100 rounded-2xl">
            <TbWriting className="w-8 h-8 text-amber-600" />
          </div>
          <h1 className="mb-2 text-4xl font-bold text-gray-900 font-Playfair">
            Create a New <span className="text-amber-600">Story</span>
          </h1>
          <p className="text-gray-600 font-Inter">
            Share your ideas with the world. Fill in the details below to
            publish your blog post.
          </p>
        </motion.div>

        {/* API Status Indicator */}
        {apiStatus !== "connected" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-6 p-4 rounded-xl flex items-center space-x-3 ${
              apiStatus === "disconnected"
                ? "bg-red-50 text-red-700"
                : "bg-yellow-50 text-yellow-700"
            }`}
          >
            <TbAlertCircle className="flex-shrink-0 w-5 h-5" />
            <div className="flex-1">
              <p className="font-medium">
                {apiStatus === "disconnected"
                  ? "Backend Disconnected"
                  : "Checking API Connection..."}
              </p>
              {apiStatus === "disconnected" && (
                <p className="mt-1 text-sm">
                  Make sure the backend server is running at {BASE_API_URL}
                </p>
              )}
            </div>
          </motion.div>
        )}

        {/* Main Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          onSubmit={handleSubmit}
          className="p-8 space-y-8 bg-white shadow-xl rounded-3xl"
        >
          {/* Title Field */}
          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 font-Inter">
              <TbWriting className="w-4 h-4 text-amber-600" />
              <span>Blog Title</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter an engaging title..."
              className="w-full px-4 py-3 text-gray-900 transition-all duration-300 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
              required
            />
          </div>

          {/* Description Field with ReactQuill - Fixed header */}
          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 font-Inter">
              <TbWriting className="w-4 h-4 text-amber-600" />
              <span>Description</span>
            </label>
            <div className="overflow-hidden border-2 border-gray-200 rounded-xl focus-within:border-amber-500 focus-within:ring-2 focus-within:ring-amber-200">
              <ReactQuill
                value={formData.description}
                onChange={handleDescriptionChange}
                modules={quillModules}
                className="h-96" // Increased height for better editing
                placeholder="Write your blog content here..."
              />
            </div>
            <p className="mt-2 text-xs text-gray-400">
              Use the toolbar to format your text. You can add headings, lists,
              and more.
            </p>
          </div>

          {/* Image URL Field */}
          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 font-Inter">
              <TbPhoto className="w-4 h-4 text-amber-600" />
              <span>Image URL</span>
            </label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://images.unsplash.com/photo-..."
              className="w-full px-4 py-3 text-gray-900 transition-all duration-300 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
              required
            />

            {/* Image Preview */}
            {imagePreview && (
              <div className="relative mt-4 overflow-hidden rounded-xl">
                {!imageError ? (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="object-cover w-full h-48"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-48 bg-gray-100">
                    <div className="text-center">
                      <TbPhoto className="w-8 h-8 mx-auto text-gray-400" />
                      <p className="mt-2 text-sm text-gray-500">
                        Invalid image URL
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Tags Field */}
          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 font-Inter">
              <TbTags className="w-4 h-4 text-amber-600" />
              <span>Tags (comma separated)</span>
            </label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              placeholder="react, javascript, webdev"
              className="w-full px-4 py-3 text-gray-900 transition-all duration-300 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
            />
          </div>

          {/* Categories Field - Multiple Selection */}
          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 font-Inter">
              <TbCategory className="w-4 h-4 text-amber-600" />
              <span>Categories (add multiple)</span>
            </label>

            {/* Category Input */}
            <div className="flex gap-2">
              <input
                type="text"
                value={categoryInput}
                onChange={(e) => setCategoryInput(e.target.value)}
                onKeyPress={handleCategoryKeyPress}
                placeholder="Type a category and press Enter or comma"
                className="flex-1 px-4 py-3 text-gray-900 transition-all duration-300 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
              />
              <button
                type="button"
                onClick={addCategory}
                className="px-6 py-3 font-medium text-white transition-all duration-300 bg-amber-600 rounded-xl hover:bg-amber-700 hover:shadow-lg"
              >
                <TbPlus className="w-5 h-5" />
              </button>
            </div>

            {/* Selected Categories */}
            {formData.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {formData.categories.map((cat) => (
                  <span
                    key={cat}
                    className="inline-flex items-center px-3 py-1 space-x-1 text-sm font-medium text-white rounded-full bg-amber-600"
                  >
                    <span>{cat}</span>
                    <button
                      type="button"
                      onClick={() => removeCategory(cat)}
                      className="p-1 rounded-full hover:bg-amber-700"
                    >
                      <TbX className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}

            {/* Category Suggestions */}
            <div className="mt-3">
              <p className="mb-2 text-xs text-gray-500">
                Suggested categories:
              </p>
              <div className="flex flex-wrap gap-2">
                {availableCategories
                  .filter((cat) => !formData.categories.includes(cat))
                  .map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        if (!formData.categories.includes(cat)) {
                          setFormData({
                            ...formData,
                            categories: [...formData.categories, cat],
                          });
                        }
                      }}
                      className="px-3 py-1 text-xs text-gray-600 transition-colors bg-gray-100 rounded-full hover:bg-amber-600 hover:text-white"
                    >
                      {cat}
                    </button>
                  ))}
              </div>
            </div>
          </div>

          {/* Author and Read Time Row */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Author Name Field */}
            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 font-Inter">
                <TbUser className="w-4 h-4 text-amber-600" />
                <span>Author Name</span>
              </label>
              <input
                type="text"
                name="authorName"
                value={formData.authorName}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 text-gray-900 transition-all duration-300 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                required
              />
            </div>

            {/* Read Time Field */}
            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 font-Inter">
                <TbClock className="w-4 h-4 text-amber-600" />
                <span>Read Time</span>
              </label>
              <input
                type="text"
                name="readTime"
                value={formData.readTime}
                onChange={handleChange}
                placeholder="5 min read"
                className="w-full px-4 py-3 text-gray-900 transition-all duration-300 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                required
              />
            </div>
          </div>

          {/* Featured Checkbox */}
          <div className="flex items-center p-4 space-x-3 bg-amber-50 rounded-xl">
            <input
              type="checkbox"
              name="featured"
              id="featured"
              checked={formData.featured}
              onChange={handleChange}
              className="w-5 h-5 border-2 border-gray-300 rounded text-amber-600 focus:ring-amber-500"
            />
            <label
              htmlFor="featured"
              className="flex items-center space-x-2 text-gray-700"
            >
              <TbStar className="w-4 h-4 text-amber-600" />
              <span className="font-medium">Feature this blog post</span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={loading || apiStatus !== "connected"}
              className={`relative w-full group overflow-hidden rounded-xl ${
                loading || apiStatus !== "connected"
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>

              <div className="relative flex items-center justify-center px-6 py-4 space-x-3">
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
                    <span className="text-lg text-white font-Forum">
                      Creating Post...
                    </span>
                  </>
                ) : (
                  <>
                    <TbUpload className="w-5 h-5 text-white transition-transform group-hover:rotate-12" />
                    <span className="text-lg text-white font-Forum">
                      Publish Blog Post
                    </span>
                    <TbCheck className="w-5 h-5 text-white transition-opacity opacity-0 group-hover:opacity-100" />
                  </>
                )}
              </div>
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 text-red-700 bg-red-50 rounded-xl"
            >
              {error}
            </motion.div>
          )}
        </motion.form>

        {/* Image URL Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 mt-6 bg-white shadow-lg rounded-2xl"
        >
          <h3 className="flex items-center mb-3 text-lg font-bold text-gray-900 font-Playfair">
            <TbPhoto className="w-5 h-5 mr-2 text-amber-600" />
            Image URL Tips
          </h3>
          <ul className="space-y-2 text-sm text-gray-600 font-Inter">
            <li className="flex items-start space-x-2">
              <span className="text-amber-600">•</span>
              <span>
                Use Unsplash:{" "}
                <span className="text-amber-600">
                  https://images.unsplash.com/...
                </span>
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-amber-600">•</span>
              <span>Use Imgur: Upload image and get direct link</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-amber-600">•</span>
              <span>
                Make sure the URL ends with an image extension (.jpg, .png,
                .webp)
              </span>
            </li>
          </ul>
        </motion.div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default CreateBlog;
