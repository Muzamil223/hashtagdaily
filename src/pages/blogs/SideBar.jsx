import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_API_URL } from "../../../Api.Config";

const Sidebar = () => {
  const [popularBlogs, setPopularBlogs] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_API_URL}/api/blogs`)
      .then((res) => setPopularBlogs(res.data.slice(0, 20)))
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      {/* Latest Blogs */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-800 border-b pb-3 mb-6">
          Latest Blogs
        </h3>
        <div className="space-y-4">
          {popularBlogs.slice(0, 5).map((blog) => (
            <div
              key={blog._id}
              className="group border-b flex border-gray-200 pb-4 transition duration-200"
            >
              <img
                src={`${BASE_API_URL}/${blog.image}`}
                alt={blog.title}
                className="w-[80px] h-[80px] object-cover  mr-4"


              />
              <div className="flex flex-col justify-center">
                <Link to={`/blogs/${blog._id}`}>
                  <h3 className="font-poppins text-lg text-black mb-2 cursor-pointer transition duration-200 hover:text-gray-700">
                    {blog.title.length > 20
                      ? blog.title.slice(0, 30) + "..."
                      : blog.title}
                  </h3>
                </Link>
                <p className="text-gray-500 text-sm">{blog.authorName}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Blogs */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 border-b pb-3 mb-6">
          Popular Blogs
        </h3>
        <div className="space-y-4">
          {popularBlogs.slice(5, 10).map((blog) => (
            <div
              key={blog._id}
              className="group border-b flex border-gray-200 pb-4 transition duration-200"
            >
              <img
                src={`${BASE_API_URL}/${blog.image}`}
                alt={blog.title}
                className="w-[80px] h-[80px] object-cover rounded-lg mr-4"
              />
              <div className="flex flex-col justify-center">
                <Link to={`/blogs/${blog._id}`}>
                  <h3 className="font-poppins text-lg text-black mb-2 cursor-pointer transition duration-200 hover:text-gray-700">
                    {blog.title.length > 20
                      ? blog.title.slice(0, 20) + "..."
                      : blog.title}
                  </h3>
                </Link>
                <p className="text-gray-500 text-sm">{blog.authorName}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
