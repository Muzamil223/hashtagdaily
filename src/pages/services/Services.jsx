// pages/services/Services.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  TbWriting, 
  TbSearch, 
  TbShare, 
  TbArrowRight,
  TbSparkles,
  TbChartBar,
  TbUsers,
  TbDeviceAnalytics,
  TbCamera,
  TbBrandInstagram,
  TbBrandTwitter,
  TbBrandFacebook,
  TbRocket,
  TbHeart,
  TbStar,
  TbCheck
} from "react-icons/tb";
import { 
  FiPenTool, 
  FiTrendingUp, 
  FiShare2,
  FiCamera,
  FiBarChart2,
  FiUsers
} from "react-icons/fi";
import { BsLightbulb, BsRocket, BsShieldCheck } from "react-icons/bs";
import serviceImage1 from "../../assets/design1.jpg";
import serviceImage2 from "../../assets/design2.jpg";
import serviceImage3 from "../../assets/Webp-compressed-10.jpg";

const services = [
  {
    title: "Content Creation",
    description: "Expertly crafted blog posts, articles, and stories that engage your audience and keep them coming back for more.",
    image: serviceImage1,
    icon: <TbWriting className="w-8 h-8" />,
    color: "from-amber-500 to-amber-600",
    features: [
      "Professional writing",
      "Storytelling expertise",
      "Audience engagement",
      "Original content"
    ],
    stats: { projects: "500+", satisfaction: "98%" }
  },
  {
    title: "SEO Optimization",
    description: "Enhance your blog's visibility with our top-notch SEO services, ensuring your content reaches the right audience.",
    image: serviceImage2,
    icon: <TbSearch className="w-8 h-8" />,
    color: "from-blue-500 to-blue-600",
    features: [
      "Keyword research",
      "On-page SEO",
      "Analytics tracking",
      "Rank improvement"
    ],
    stats: { projects: "300+", satisfaction: "95%" }
  },
  {
    title: "Social Media Management",
    description: "Expand your blog's reach with our social media strategies, connecting you with a broader audience across various platforms.",
    image: serviceImage3,
    icon: <TbShare className="w-8 h-8" />,
    color: "from-purple-500 to-purple-600",
    features: [
      "Platform strategy",
      "Content scheduling",
      "Engagement tracking",
      "Growth analytics"
    ],
    stats: { projects: "400+", satisfaction: "96%" }
  }
];

// Additional service highlights
const highlights = [
  {
    icon: <TbRocket className="w-6 h-6" />,
    title: "Fast Delivery",
    description: "Quick turnaround without compromising quality"
  },
  {
    icon: <TbHeart className="w-6 h-6" />,
    title: "Client Focused",
    description: "Your success is our top priority"
  },
  {
    icon: <TbStar className="w-6 h-6" />,
    title: "Premium Quality",
    description: "Excellence in every project we deliver"
  },
  {
    icon: <TbChartBar className="w-6 h-6" />,
    title: "Results Driven",
    description: "Data-backed strategies that work"
  }
];

// Process steps
const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "We learn about your brand, goals, and target audience"
  },
  {
    step: "02",
    title: "Strategy",
    description: "Custom plan tailored to your specific needs"
  },
  {
    step: "03",
    title: "Execution",
    description: "Implementation with regular updates and communication"
  },
  {
    step: "04",
    title: "Growth",
    description: "Continuous optimization and scaling your success"
  }
];

const Services = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-amber-50/30">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute rounded-full top-20 left-10 w-72 h-72 bg-amber-200/20 blur-3xl animate-pulse"></div>
        <div className="absolute delay-1000 rounded-full bottom-20 right-10 w-96 h-96 bg-amber-300/20 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-amber-100/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-amber-50/50"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300"></div>
        
        <div className="relative container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 text-sm font-medium rounded-full bg-amber-100 text-amber-700 font-Inter">
                ✨ What We Offer
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl lg:text-7xl font-Playfair"
            >
              Elevate Your{" "}
              <span className="relative">
                <span className="relative z-10 text-amber-600">Digital Presence</span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute left-0 h-3 bottom-2 bg-amber-200 -z-0"
                />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-10 text-xl text-gray-600 font-Inter"
            >
              At Hashtag Daily, we offer comprehensive solutions to help your blog 
              thrive in today's competitive digital landscape.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center justify-center pt-8 space-x-12"
            >
              <div>
                <span className="text-3xl font-bold text-amber-600 font-Playfair">1200+</span>
                <p className="text-sm text-gray-500 font-Inter">Projects Completed</p>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div>
                <span className="text-3xl font-bold text-amber-600 font-Playfair">98%</span>
                <p className="text-sm text-gray-500 font-Inter">Client Satisfaction</p>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div>
                <span className="text-3xl font-bold text-amber-600 font-Playfair">5+</span>
                <p className="text-sm text-gray-500 font-Inter">Years Experience</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-8 lg:grid-cols-3"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 transition-transform duration-500 bg-white shadow-2xl rounded-3xl group-hover:scale-105"></div>
                <div className="relative overflow-hidden bg-white shadow-xl rounded-3xl">
                  {/* Image with Overlay */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-${service.color.split(' ')[0].replace('from-', '')} via-transparent to-transparent opacity-60`}></div>
                    
                    {/* Icon */}
                    <div className="absolute top-4 right-4">
                      <div className={`p-3 bg-gradient-to-r ${service.color} text-white rounded-xl shadow-lg transform group-hover:rotate-6 transition-transform`}>
                        {service.icon}
                      </div>
                    </div>

                    {/* Stats Badge */}
                    <div className="absolute flex space-x-3 bottom-4 left-4">
                      <div className="px-3 py-1 text-xs text-white rounded-full bg-black/30 backdrop-blur-sm">
                        📊 {service.stats.projects}
                      </div>
                      <div className="px-3 py-1 text-xs text-white rounded-full bg-black/30 backdrop-blur-sm">
                        ⭐ {service.stats.satisfaction}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="mb-3 text-2xl font-bold text-gray-900 font-Playfair">
                      {service.title}
                    </h3>
                    <p className="mb-6 text-gray-600 font-Inter">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="mb-6 space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center space-x-2 text-sm text-gray-600">
                          <TbCheck className={`w-4 h-4 text-${service.color.split(' ')[1].replace('to-', '')}`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Learn More Link */}
                    <Link
                      to="/contact"
                      className="inline-flex items-center space-x-2 transition-colors text-amber-600 hover:text-amber-700 group/link"
                    >
                      <span className="font-medium">Learn More</span>
                      <TbArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>

                  {/* Decorative Corner */}
                  <div className={`absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl ${service.color} opacity-10 rounded-tl-3xl`}></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl font-Playfair">
              Why Choose{" "}
              <span className="text-amber-600">HashtagDaily?</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 font-Inter">
              We combine creativity with strategy to deliver exceptional results for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 text-center transition-all duration-300 bg-amber-50 rounded-2xl hover:shadow-xl group"
              >
                <div className="inline-block p-4 mb-4 transition-all duration-300 bg-white shadow-md text-amber-600 rounded-xl group-hover:scale-110 group-hover:rotate-3">
                  {item.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 font-Playfair">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 font-Inter">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-white to-amber-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl font-Playfair">
              How We{" "}
              <span className="text-amber-600">Work</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 font-Inter">
              A streamlined process designed to deliver outstanding results efficiently.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 hidden lg:block"></div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative text-center"
                >
                  <div className="relative z-10 inline-block mb-6">
                    <div className="flex items-center justify-center w-20 h-20 transition-all duration-300 transform bg-white shadow-xl rounded-2xl group-hover:scale-110">
                      <span className="text-2xl font-bold text-amber-600 font-Playfair">
                        {step.step}
                      </span>
                    </div>
                    {/* Pulse Ring */}
                    <div className="absolute inset-0 rounded-2xl animate-ping bg-amber-200/30"></div>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900 font-Playfair">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-Inter">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies & Tools */}
      <section className="py-16 bg-white border-gray-100 border-y">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="mb-8 text-sm font-medium tracking-wider text-gray-400 uppercase font-Inter">
              Trusted by leading brands
            </p>
            <div className="flex flex-wrap items-center justify-center gap-12 opacity-50">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-24 h-8 bg-gray-200 rounded animate-pulse"></div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Clean White */}
      <section className="relative py-20 overflow-hidden bg-white">
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-0 left-0 w-full h-full">
            <svg className="absolute bottom-0 w-full h-48" preserveAspectRatio="none" viewBox="0 0 1440 74">
              <path fill="currentColor" d="M456.463 38.113c93.333 0 113.237-23.162 237.037-23.162 123.8 0 142.592 23.162 237.037 23.162 94.444 0 130.165-23.162 237.037-23.162 106.872 0 129.63 23.162 237.037 23.162V74H0V38.113c123.8 0 142.592-23.162 237.037-23.162 94.444 0 130.165 23.162 237.037 23.162z"></path>
            </svg>
          </div>
        </div>

        <div className="relative text-center container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full bg-amber-100 text-amber-700 font-Inter">
              🚀 Get Started Today
            </span>

            <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl font-Playfair">
              Ready to Transform Your{" "}
              <span className="text-amber-600">Digital Presence?</span>
            </h2>
            
            <p className="max-w-2xl mx-auto mb-10 text-lg text-gray-600 font-Inter">
              Let's work together to create compelling content that resonates with your audience and drives results.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 space-x-3 text-white transition-all duration-300 bg-amber-600 rounded-xl hover:bg-amber-700 hover:shadow-xl hover:shadow-amber-200 hover:-translate-y-1"
              >
                <TbRocket className="w-5 h-5" />
                <span className="text-lg font-Forum">Start a Project</span>
              </Link>

              <Link
                to="/blogs"
                className="inline-flex items-center px-8 py-4 space-x-3 text-gray-700 transition-all duration-300 bg-gray-100 rounded-xl hover:bg-gray-200 hover:-translate-y-1"
              >
                <TbWriting className="w-5 h-5" />
                <span className="text-lg font-Forum">View Our Work</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;