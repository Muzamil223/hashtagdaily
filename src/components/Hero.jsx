import main from "../assets/design2.jpg";

const Hero = () => {
  return (
    <div className="px-4 md:py-16 md:px-8 lg:px-16 text-center md:text-left md:mt-10 lg:mt-12">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-Playfair leading-tight text-gray-900 mb-4">
        Discover Fresh Insights
        <br />
        Your Daily Dose of Engaging Stories and Expert Opinions
      </h1>
      <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-2xl font-Inter mt-6 mx-auto md:mx-0">
        Welcome to our blog, where curiosity meets knowledge! Dive into a world
        of diverse topics, from the latest trends and in-depth analyses to
        personal stories and expert advice.
      </p>
      <div className="relative h-screen mt-7 rounded-2xl overflow-hidden">
        <img
          src={main}
          alt="Background"
          className="object-cover w-full h-full rounded-2xl"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 py-8 px-4 text-center md:text-left">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold font-poppins text-white mb-4">
            Step into a World of Wisdom
            <br />
            Discover Fresh Insights and Engaging Content
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-gray-200">
            "Explore thought-provoking articles and expert insights that keep
            you ahead of the curve."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
