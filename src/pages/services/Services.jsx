import serviceImage1 from "../../assets/design1.jpg"; // Add your images
import serviceImage2 from "../../assets/design2.jpg";
import serviceImage3 from "../../assets/Webp-compressed-10.jpg";

const services = [
  {
    title: "Content Creation",
    description:
      "Expertly crafted blog posts, articles, and stories that engage your audience and keep them coming back for more.",
    image: serviceImage1,
  },
  {
    title: "SEO Optimization",
    description:
      "Enhance your blog's visibility with our top-notch SEO services, ensuring your content reaches the right audience.",
    image: serviceImage2,
  },
  {
    title: "Social Media Management",
    description:
      "Expand your blog’s reach with our social media strategies, connecting you with a broader audience across various platforms.",
    image: serviceImage3,
  },
];

const Services = () => {
  return (
    <div className="py-12 padding-y mt-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-Playfair text-gray-900 mb-4">
          Our Services
        </h1>
        <p className="text-lg text-gray-700">
          At Hashtag Daily, we offer a variety of services to help your blog
          thrive.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="max-w-sm bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h2>
              <p className="text-gray-700">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
