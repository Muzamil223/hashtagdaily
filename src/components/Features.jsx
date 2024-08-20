const Features = ({ title }) => {
  return (
    <div>
      {" "}
      <div className="py-12 lg:py-0 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          {/* Left Bar */}
          <div className=" flex items-center">
            <div className="w-16 sm:w-24 h-1 bg-gray-800"></div>
          </div>
          {/* Heading */}
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-Space  px-4">
            {title}
          </h1>
          {/* Right Bar */}
          <div className=" flex items-center justify-end">
            <div className="w-16 sm:w-24 h-1 bg-gray-800"></div>
          </div>
        </div>
      </div>
      {/* Cards */}
    </div>
  );
};

export default Features;
