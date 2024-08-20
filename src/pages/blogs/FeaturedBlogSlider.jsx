import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import { BASE_API_URL } from "../../../Api.Config";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const FeaturedBlogSlider = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_API_URL}/api/blogs`)
      .then((response) => {
        setBlogs(response.data.filter((blog) => blog.featured));
      })
      .catch((err) => console.error(err));
  }, []);

  const ArrowButton = ({ direction, onClick }) => (
    <button
      onClick={onClick}
      className={`absolute top-1/2 transform -translate-y-1/2 ${
        direction === "left" ? "left-4 md:left-8" : "right-4 md:right-8"
      } text-white p-3 rounded-full shadow-lg z-10 bg-gray-800 bg-opacity-50 hover:bg-opacity-75`}
      style={{ fontSize: "24px" }}
    >
      {direction === "left" ? <FaChevronLeft /> : <FaChevronRight />}
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: <ArrowButton direction="left" />,
    nextArrow: <ArrowButton direction="right" />,
    appendDots: (dots) => (
      <div className="absolute bottom-6 w-full flex justify-center">
        <ul className="flex space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          background: "#fff",
          opacity: 0.8,
          cursor: "pointer",
        }}
      />
    ),
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="relative h-screen overflow-hidden shadow-lg"
          >
            <img
              src={`${BASE_API_URL}/${blog.image}`}
              alt={blog.title}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 md:p-8 flex flex-col justify-end items-center md:items-start text-center md:text-left">
              <Link to={`/blogs/${blog._id}`}>
                <h1 className="text-lg md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4 leading-tight drop-shadow-lg">
                  {blog.title}
                </h1>
              </Link>
              <p className="text-xs md:text-sm lg:text-base text-gray-100 leading-relaxed drop-shadow-md">
                {stripHtmlTags(blog.description).substring(0, 150)}...
              </p>
              <div className="flex flex-col md:flex-row justify-between items-center w-full mt-4">
                <div className="text-sm text-gray-300">
                  <span className="font-semibold">Author:</span>{" "}
                  <span className="text-white">{blog.authorName}</span>
                  <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                    {blog.tags.map((tag, index) => (
                      <span
                        key={tag}
                        className={`text-sm text-gray-100 ${
                          index !== blog.tags.length - 1
                            ? "after:content-['|'] after:mx-2 after:text-gray-400"
                            : ""
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const stripHtmlTags = (str) => str.replace(/<\/?[^>]+(>|$)/g, "");

export default FeaturedBlogSlider;
