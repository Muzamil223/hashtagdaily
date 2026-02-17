import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="relative">
        <div className="w-20 h-20 border-4 rounded-full border-amber-200"></div>
        <div className="absolute top-0 left-0 w-20 h-20 border-4 rounded-full border-amber-600 border-t-transparent animate-spin"></div>
      </div>
    </div>
  );
};

export default Loader;
