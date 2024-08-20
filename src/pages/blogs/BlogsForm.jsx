import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_API_URL } from "../../../Api.Config";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import styles

const CreateBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
    tags: "",
    category: "",
    featured: false,
    authorName: "",
    readTime: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formDataToSubmit = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSubmit.append(key, formData[key]);
    });

    try {
      await axios.post(`${BASE_API_URL}/api/blogs`, formDataToSubmit, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Blog created successfully!", {
        onClose: () => {
          setTimeout(() => {
            navigate("/blogs");
          }, 500);
        },
      });
    } catch (err) {
      setError(
        err.response?.data?.error || "Something went wrong. Please try again."
      );
      toast.error("Failed to create blog. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 mt-[140px] mb-[20px] max-w-3xl">
      <h1 className="text-3xl font-bold mb-8 text-center w-full text-gray-800">
        Create a New Blog
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
      >
        <div className="mb-6">
          <label className="block text-gray-800 font-semibold mb-2">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg font-Cormorant focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-800 font-Montserrat font-semibold mb-2">
            Description
          </label>
          <ReactQuill
            value={formData.description}
            onChange={handleDescriptionChange}
            className="h-40 focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-800 pt-8 font-semibold mb-2">
            Image
          </label>
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-800 font-semibold mb-2">
            Tags (comma separated)
          </label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-800 font-semibold mb-2">
            Category
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          >
            <option value="">Select a category</option>
            <option value="Sports">Sports</option>
            <option value="Health">Health</option>
            <option value="Fashion">Fashion</option>
            <option value="Sci & Technology">Sci & Technology</option>
            <option value="Nature">Nature</option>
          </select>
        </div>
        <div className="mb-6 flex items-center">
          <input
            type="checkbox"
            name="featured"
            checked={formData.featured}
            onChange={handleChange}
            className="mr-2 leading-tight"
          />
          <label className="text-gray-800 font-semibold">Set as Featured</label>
        </div>
        <div className="mb-6">
          <label className="block text-gray-800 font-semibold mb-2">
            Author Name
          </label>
          <input
            type="text"
            name="authorName"
            value={formData.authorName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-800 font-semibold mb-2">
            Read Time
          </label>
          <input
            type="text"
            name="readTime"
            value={formData.readTime}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <button
          type="submit"
          className={`w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200 relative ${
            loading ? "cursor-wait" : ""
          }`}
        >
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-5 h-5 border-t-4 border-white border-solid rounded-full animate-spin"></div>
            </div>
          )}
          {loading ? "" : "Create Blog"}
        </button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </form>
      <ToastContainer />
    </div>
  );
};

export default CreateBlog;
