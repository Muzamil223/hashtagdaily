import Slider from "react-slick";
import { banner1, banner2 } from "../assets";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const BlogHeader = () => {
  // Define the ArrowButton component before using it
  const ArrowButton = ({ direction, onClick }) => (
    <button
      onClick={onClick}
      className={`absolute top-1/2 transform -translate-y-1/2 ${
        direction === "left" ? "left-4" : "right-4"
      } text-white p-2 rounded-full shadow-lg z-10`}
      style={{ fontSize: "24px" }}
    >
      {direction === "left" ? <FaChevronLeft /> : <FaChevronRight />}
    </button>
  );

  // Define the settings for the slider
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
      <div style={{ position: "absolute", bottom: "10px", width: "100%" }}>
        <ul style={{ margin: "0", padding: "0", textAlign: "center" }}>
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          background: "#fff",
          opacity: 0.5,
          cursor: "pointer",
        }}
      />
    ),
  };

  return (
    <div className="py-16 relative">
      <Slider {...settings}>
        <div className="relative h-screen overflow-hidden shadow-lg">
          <img
            src={banner1}
            alt="Background"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent px-6 py-12 flex flex-col justify-end items-center md:items-start text-center md:text-left">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
              Step into a World of Wisdom
              <br />
              Discover Fresh Insights and Engaging Content
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-100 leading-relaxed drop-shadow-md">
              "Explore thought-provoking articles and expert insights that keep
              you ahead of the curve."
            </p>
          </div>
        </div>
        <div className="relative h-screen overflow-hidden shadow-lg">
          <img
            src={banner2}
            alt="Background"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent px-6 py-12 flex flex-col justify-end items-center md:items-start text-center md:text-left">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
              Step into a World of Wisdom
              <br />
              Discover Fresh Insights and Engaging Content
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-100 leading-relaxed drop-shadow-md">
              "Explore thought-provoking articles and expert insights that keep
              you ahead of the curve."
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default BlogHeader;
