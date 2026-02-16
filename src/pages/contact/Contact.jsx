// pages/contact/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  TbMail,
  TbPhone,
  TbMapPin,
  TbSend,
  TbClock,
  TbMessage,
  TbUser,
  TbBrandTwitter,
  TbBrandLinkedin,
  TbBrandGithub,
  TbBrandInstagram,
  TbArrowRight,
  TbCheck,
} from "react-icons/tb";
import { FaRegPaperPlane } from "react-icons/fa";
import { call, location, mail } from "../../assets";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <TbMail className="w-6 h-6" />,
      title: "Email Us",
      value: "muzamil987614@gmail.com",
      link: "mailto:muzamil987614@gmail.com",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <TbPhone className="w-6 h-6" />,
      title: "Call Us",
      value: "+92 300 8430810",
      link: "tel:+923008430810",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <TbMapPin className="w-6 h-6" />,
      title: "Visit Us",
      value: "Lahore - Iqbal Town, Pakistan",
      link: "https://maps.google.com/?q=Lahore+Iqbal+Town+Pakistan",
      color: "from-amber-500 to-amber-600",
    },
    {
      icon: <TbClock className="w-6 h-6" />,
      title: "Working Hours",
      value: "Mon - Fri, 9:00 AM - 6:00 PM",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const socialLinks = [
    {
      icon: <TbBrandTwitter className="w-5 h-5" />,
      href: "https://twitter.com",
      label: "Twitter",
      color: "hover:bg-blue-400",
    },
    {
      icon: <TbBrandLinkedin className="w-5 h-5" />,
      href: "https://linkedin.com",
      label: "LinkedIn",
      color: "hover:bg-blue-600",
    },
    {
      icon: <TbBrandGithub className="w-5 h-5" />,
      href: "https://github.com",
      label: "GitHub",
      color: "hover:bg-gray-800",
    },
    {
      icon: <TbBrandInstagram className="w-5 h-5" />,
      href: "https://instagram.com",
      label: "Instagram",
      color: "hover:bg-pink-600",
    },
  ];

  const faqs = [
    {
      question: "How quickly do you respond?",
      answer: "We typically respond within 24 hours during business days.",
    },
    {
      question: "Do you offer international services?",
      answer: "Yes! We work with clients from all around the world.",
    },
    {
      question: "What's your preferred communication method?",
      answer:
        "Email is best for detailed inquiries, but we're happy to schedule calls too.",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-amber-50/30">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute rounded-full top-20 left-10 w-72 h-72 bg-amber-200/20 blur-3xl animate-pulse"></div>
        <div className="absolute delay-1000 rounded-full bottom-20 right-10 w-96 h-96 bg-amber-300/20 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-amber-100/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-amber-50/50"></div>

        {/* Decorative Line */}
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
                📬 Get in Touch
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl font-Playfair"
            >
              Let's{" "}
              <span className="relative">
                <span className="relative z-10 text-amber-600">Connect</span>
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
              className="text-xl text-gray-600 font-Inter"
            >
              Have a project in mind or just want to say hello? We'd love to
              hear from you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 transition-all duration-500 bg-white shadow-lg rounded-2xl group-hover:shadow-xl group-hover:-translate-y-1"></div>
                <div className="relative p-6 text-center">
                  {/* Icon with Gradient */}
                  <div
                    className={`inline-block p-4 mb-4 bg-gradient-to-r ${info.color} text-white rounded-xl shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                  >
                    {info.icon}
                  </div>

                  <h3 className="mb-2 text-lg font-bold text-gray-900 font-Playfair">
                    {info.title}
                  </h3>

                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-sm text-gray-600 transition-colors hover:text-amber-600 font-Inter"
                      target={
                        info.link.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        info.link.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm text-gray-600 font-Inter">
                      {info.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="p-8 bg-white shadow-xl rounded-3xl">
                <h2 className="mb-2 text-3xl font-bold text-gray-900 font-Playfair">
                  Send Us a Message
                </h2>
                <p className="mb-8 text-gray-600 font-Inter">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div className="group">
                    <label className="block mb-2 text-sm font-medium text-gray-700 font-Inter">
                      Your Name
                    </label>
                    <div className="relative">
                      <TbUser className="absolute w-5 h-5 text-gray-400 transition-colors -translate-y-1/2 left-4 top-1/2 group-focus-within:text-amber-500" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full py-4 pl-12 pr-4 text-gray-700 transition-all duration-300 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="group">
                    <label className="block mb-2 text-sm font-medium text-gray-700 font-Inter">
                      Email Address
                    </label>
                    <div className="relative">
                      <TbMail className="absolute w-5 h-5 text-gray-400 transition-colors -translate-y-1/2 left-4 top-1/2 group-focus-within:text-amber-500" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full py-4 pl-12 pr-4 text-gray-700 transition-all duration-300 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                      />
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div className="group">
                    <label className="block mb-2 text-sm font-medium text-gray-700 font-Inter">
                      Subject
                    </label>
                    <div className="relative">
                      <TbMessage className="absolute w-5 h-5 text-gray-400 transition-colors -translate-y-1/2 left-4 top-1/2 group-focus-within:text-amber-500" />
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="What's this about?"
                        className="w-full py-4 pl-12 pr-4 text-gray-700 transition-all duration-300 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                      />
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div className="group">
                    <label className="block mb-2 text-sm font-medium text-gray-700 font-Inter">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Tell us about your project..."
                      className="w-full p-4 text-gray-700 transition-all duration-300 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 font-Inter"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative w-full overflow-hidden group rounded-xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700"></div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>

                    <div className="relative flex items-center justify-center px-6 py-4 space-x-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
                          <span className="text-lg text-white font-Forum">
                            Sending...
                          </span>
                        </>
                      ) : isSubmitted ? (
                        <>
                          <TbCheck className="w-5 h-5 text-white" />
                          <span className="text-lg text-white font-Forum">
                            Message Sent!
                          </span>
                        </>
                      ) : (
                        <>
                          <FaRegPaperPlane className="w-5 h-5 text-white transition-transform group-hover:rotate-12" />
                          <span className="text-lg text-white font-Forum">
                            Send Message
                          </span>
                          <TbArrowRight className="w-5 h-5 text-white transition-transform group-hover:translate-x-2" />
                        </>
                      )}
                    </div>
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Right Column - Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map or Image Placeholder */}
              <div className="relative h-64 overflow-hidden rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-amber-800 opacity-90"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <TbMapPin className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="mb-2 text-2xl font-bold font-Playfair">
                      Visit Our Office
                    </h3>
                    <p className="font-Inter">Lahore - Iqbal Town, Pakistan</p>
                  </div>
                </div>

                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="absolute top-0 left-0 w-full h-full"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                      backgroundSize: "40px 40px",
                    }}
                  ></div>
                </div>
              </div>

              {/* Social Links */}
              <div className="p-8 bg-white shadow-xl rounded-3xl">
                <h3 className="mb-6 text-2xl font-bold text-gray-900 font-Playfair">
                  Connect With Us
                </h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-3 px-6 py-3 bg-gray-50 rounded-xl hover:text-white transition-all duration-300 group ${social.color}`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-gray-700 transition-colors group-hover:text-white">
                        {social.icon}
                      </span>
                      <span className="text-sm font-medium text-gray-700 transition-colors group-hover:text-white font-Inter">
                        {social.label}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* FAQ Section */}
              <div className="p-8 bg-gradient-to-br from-amber-50 to-white rounded-3xl">
                <h3 className="mb-6 text-2xl font-bold text-gray-900 font-Playfair">
                  Frequently Asked
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="p-4 bg-white rounded-xl"
                    >
                      <h4 className="mb-2 font-bold text-gray-900 font-Playfair">
                        {faq.question}
                      </h4>
                      <p className="text-sm text-gray-600 font-Inter">
                        {faq.answer}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden bg-white">
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-0 left-0 w-full h-full">
            <svg
              className="absolute bottom-0 w-full h-48"
              preserveAspectRatio="none"
              viewBox="0 0 1440 74"
            >
              <path
                fill="currentColor"
                d="M456.463 38.113c93.333 0 113.237-23.162 237.037-23.162 123.8 0 142.592 23.162 237.037 23.162 94.444 0 130.165-23.162 237.037-23.162 106.872 0 129.63 23.162 237.037 23.162V74H0V38.113c123.8 0 142.592-23.162 237.037-23.162 94.444 0 130.165 23.162 237.037 23.162z"
              ></path>
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
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full bg-amber-100 text-amber-700 font-Inter">
              💬 Let's Chat
            </span>

            <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl font-Playfair">
              Ready to Start a{" "}
              <span className="text-amber-600">Conversation?</span>
            </h2>

            <p className="max-w-2xl mx-auto mb-10 text-lg text-gray-600 font-Inter">
              Whether you have a question about our services, want to
              collaborate, or just want to say hi, we're here for you.
            </p>

            <a
              href="mailto:muzamil987614@gmail.com"
              className="inline-flex items-center px-8 py-4 space-x-3 text-white transition-all duration-300 bg-amber-600 rounded-xl hover:bg-amber-700 hover:shadow-xl hover:shadow-amber-200 hover:-translate-y-1"
            >
              <TbSend className="w-5 h-5" />
              <span className="text-lg font-Forum">Send us an Email</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
