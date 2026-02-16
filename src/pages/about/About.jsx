// pages/about/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  TbWriting,
  TbHeart,
  TbUsers,
  TbTarget,
  TbEye,
  TbSparkles,
  TbArrowRight,
  TbBrandTwitter,
  TbBrandLinkedin,
  TbBrandGithub,
  TbWorld,
  TbMail,
} from "react-icons/tb";
import {
  FaQuoteLeft,
  FaQuoteRight,
  FaRegEnvelope,
  FaRegLightbulb,
  FaRocket,
} from "react-icons/fa";
import TEAM_MEMBER1 from "../../assets/teamMember1.jpg";
import TEAM_MEMBER2 from "../../assets/teamMember2.jpg";
import DESIGN1 from "../../assets/design1.jpg";

// Team members data
const teamMembers = [
  {
    name: "Muzamil Ali",
    role: "Founder & Editor-in-Chief",
    bio: "Muzamil is a seasoned writer with a passion for technology and lifestyle. He loves exploring new trends and sharing his insights with readers.",
    image: TEAM_MEMBER2,
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
      email: "muzamil@hashtagdaily.com",
    },
    expertise: ["Technology", "Leadership", "Content Strategy"],
    quote: "Writing is the art of turning thoughts into impact.",
  },
  {
    name: "Meerab Mushtaq",
    role: "Senior Tech Editor",
    bio: "Meerab is a tech enthusiast and avid blogger who enjoys delving into the latest gadgets and software. Her reviews and tips are a hit among our readers.",
    image: TEAM_MEMBER1,
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
      email: "meerab@hashtagdaily.com",
    },
    expertise: ["AI & ML", "Gadgets", "Software Reviews"],
    quote: "Technology is best when it brings people together.",
  },
];

// Company stats
const stats = [
  { number: "5K+", label: "Articles Published", icon: <TbWriting /> },
  { number: "10K+", label: "Happy Readers", icon: <TbHeart /> },
  { number: "50+", label: "Expert Writers", icon: <TbUsers /> },
  { number: "3+", label: "Years of Excellence", icon: <TbSparkles /> },
];

// Values
const values = [
  {
    title: "Authenticity",
    description:
      "We believe in genuine stories and real experiences that resonate with our readers.",
    icon: <TbTarget />,
    color: "from-amber-500 to-amber-600",
  },
  {
    title: "Innovation",
    description:
      "Constantly evolving to bring you the latest trends and cutting-edge insights.",
    icon: <FaRegLightbulb />,
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Community",
    description:
      "Building a space where ideas flourish and conversations thrive.",
    icon: <TbUsers />,
    color: "from-green-500 to-green-600",
  },
  {
    title: "Excellence",
    description:
      "Committed to delivering high-quality content that adds value to your day.",
    icon: <FaRocket />,
    color: "from-purple-500 to-purple-600",
  },
];

// Milestones
const milestones = [
  {
    year: "2021",
    event: "HashtagDaily Founded",
    description: "Started with a vision to create meaningful content.",
  },
  {
    year: "2022",
    event: "10K Readers Milestone",
    description: "Reached our first major audience milestone.",
  },
  {
    year: "2023",
    event: "Global Expansion",
    description: "Welcomed writers from 20+ countries.",
  },
  {
    year: "2024",
    event: "Featured Stories",
    description: "Recognized as top emerging blog platform.",
  },
];

const About = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-brown-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute rounded-full top-20 left-10 w-72 h-72 bg-gradient-to-br from-amber-200/30 to-brown-200/30 blur-3xl animate-pulse"></div>
        <div className="absolute delay-1000 rounded-full bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-brown-200/30 to-amber-200/30 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-amber-100/10 to-brown-100/10 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section with Image */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={DESIGN1}
            alt="About Us Background"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brown-900/90 via-brown-800/80 to-transparent"></div>
        </div>

        {/* Animated Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              borderRadius: ["50%", "25%", "50%"],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute w-64 h-64 rounded-full -top-20 -right-20 bg-gradient-to-r from-amber-500/20 to-brown-500/20 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, delay: 2 }}
            className="absolute rounded-full -bottom-32 -left-32 w-80 h-80 bg-gradient-to-r from-brown-500/20 to-amber-500/20 blur-3xl"
          />
        </div>

        {/* Hero Content */}
        <div className="relative flex items-center h-full container-custom">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-white"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 text-sm tracking-wider border rounded-full bg-white/10 backdrop-blur-md font-Inter border-white/20">
                ✨ Since 2021
              </span>
            </motion.div>

            {/* Title with Animated Letters */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold font-Playfair mb-6 leading-[1.2]"
            >
              Crafting Stories That{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-amber-300">Matter</span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="absolute left-0 h-3 bottom-2 bg-amber-500/30 -z-0"
                />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-2xl text-xl leading-relaxed text-gray-200 font-Inter"
            >
              We're more than just a blog – we're a community of curious minds,
              passionate writers, and lifelong learners exploring the world
              through words.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-center mt-8 space-x-8"
            >
              <div>
                <span className="text-3xl font-bold font-Playfair text-amber-300">
                  10K+
                </span>
                <p className="text-sm text-gray-300 font-Inter">Readers</p>
              </div>
              <div>
                <span className="text-3xl font-bold font-Playfair text-amber-300">
                  5K+
                </span>
                <p className="text-sm text-gray-300 font-Inter">Articles</p>
              </div>
              <div>
                <span className="text-3xl font-bold font-Playfair text-amber-300">
                  50+
                </span>
                <p className="text-sm text-gray-300 font-Inter">Writers</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute text-white -translate-x-1/2 bottom-8 left-1/2"
        >
          <div className="flex justify-center w-6 h-10 border-2 rounded-full border-white/50">
            <div className="w-1 h-2 mt-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20">
        <div className="container-custom">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="inline-block p-4 mb-4 transition-all duration-300 bg-gradient-to-br from-brown-100 to-amber-100 rounded-2xl group-hover:scale-110 group-hover:rotate-3">
                  <div className="text-3xl text-brown-800">{stat.icon}</div>
                </div>
                <h3 className="mb-2 text-3xl font-bold font-Playfair text-brown-900">
                  {stat.number}
                </h3>
                <p className="text-sm text-gray-600 font-Inter">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-4xl font-bold md:text-5xl font-Playfair text-brown-900">
                Our <span className="text-amber-600">Journey</span>
              </h2>

              <div className="space-y-6 leading-relaxed text-gray-700 font-Inter">
                <p>
                  Welcome to Hashtag Daily! We are a dynamic blogging platform
                  dedicated to providing you with the most up-to-date and
                  engaging content in technology, lifestyle, and current trends.
                </p>
                <p>
                  Our mission is to offer our readers insightful articles,
                  detailed reviews, and practical tips to help them stay
                  informed and make the most of their daily lives. From
                  exploring the latest gadgets to diving into lifestyle trends,
                  we cover it all with a fresh perspective.
                </p>
                <p>
                  At Hashtag Daily, we believe in the power of storytelling. Our
                  platform hosts a diverse community of writers, each with a
                  unique voice and perspective, all crafted to enrich your
                  reading experience.
                </p>
              </div>

              {/* Milestone Timeline */}
              <div className="mt-12 space-y-4">
                {milestones.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 group"
                  >
                    <div className="relative">
                      <div className="w-3 h-3 mt-2 transition-transform rounded-full bg-amber-600 group-hover:scale-150"></div>
                      {index < milestones.length - 1 && (
                        <div className="absolute top-5 left-1.5 w-0.5 h-12 bg-gradient-to-b from-amber-600 to-transparent"></div>
                      )}
                    </div>
                    <div>
                      <span className="text-lg font-bold font-Playfair text-brown-800">
                        {item.year}
                      </span>
                      <h4 className="font-bold text-brown-900">{item.event}</h4>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Image with Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden shadow-2xl rounded-2xl">
                <img
                  src={DESIGN1}
                  alt="Our Journey"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-900/70 via-transparent to-transparent"></div>

                {/* Floating Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="absolute p-4 border bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md rounded-xl border-white/20"
                >
                  <FaQuoteLeft className="mb-2 text-2xl text-amber-300" />
                  <p className="text-lg italic text-white font-Forum">
                    Our mission is to create a space where every voice matters
                    and every story finds its audience.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-b from-brown-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold md:text-5xl font-Playfair text-brown-900">
              Our Core <span className="text-amber-600">Values</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 font-Inter">
              The principles that guide everything we do, from content creation
              to community building.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${value.color} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>
                <div className="relative p-8 transition-all duration-500 bg-white border shadow-lg rounded-3xl hover:shadow-xl border-brown-100">
                  <div
                    className={`inline-block p-4 bg-gradient-to-br ${value.color} text-white rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                  >
                    <div className="text-2xl">{value.icon}</div>
                  </div>
                  <h3 className="mb-3 text-2xl font-bold font-Playfair text-brown-900">
                    {value.title}
                  </h3>
                  <p className="leading-relaxed text-gray-600 font-Inter">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold md:text-5xl font-Playfair text-brown-900">
              Meet the <span className="text-amber-600">Team</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 font-Inter">
              The passionate individuals behind HashtagDaily, dedicated to
              bringing you the best content.
            </p>
          </motion.div>

          <div className="grid max-w-4xl gap-12 mx-auto md:grid-cols-2">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative overflow-hidden transition-all duration-500 bg-white shadow-xl rounded-3xl hover:shadow-2xl">
                  {/* Image Container */}
                  <div className="relative overflow-hidden h-96">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-full transition-transform duration-700 transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brown-900/70 via-transparent to-transparent"></div>

                    {/* Quote Overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <FaQuoteLeft className="mb-2 text-2xl transition-opacity opacity-0 text-amber-300 group-hover:opacity-100" />
                      <p className="text-sm italic text-white transition-opacity delay-100 opacity-0 font-Forum group-hover:opacity-100">
                        {member.quote}
                      </p>
                    </div>

                    {/* Social Links */}
                    <div className="absolute flex space-x-2 transition-opacity opacity-0 top-6 right-6 group-hover:opacity-100">
                      <a
                        href={member.social.twitter}
                        className="flex items-center justify-center w-10 h-10 text-white transition-colors rounded-lg bg-white/10 backdrop-blur-md hover:bg-amber-500"
                      >
                        <TbBrandTwitter />
                      </a>
                      <a
                        href={member.social.linkedin}
                        className="flex items-center justify-center w-10 h-10 text-white transition-colors rounded-lg bg-white/10 backdrop-blur-md hover:bg-amber-500"
                      >
                        <TbBrandLinkedin />
                      </a>
                      <a
                        href={member.social.github}
                        className="flex items-center justify-center w-10 h-10 text-white transition-colors rounded-lg bg-white/10 backdrop-blur-md hover:bg-amber-500"
                      >
                        <TbBrandGithub />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="mb-2 text-2xl font-bold font-Playfair text-brown-900">
                      {member.name}
                    </h3>
                    <p className="mb-4 text-lg text-amber-600 font-Forum">
                      {member.role}
                    </p>
                    <p className="mb-6 text-sm leading-relaxed text-gray-600 font-Inter">
                      {member.bio}
                    </p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {member.expertise.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-full bg-brown-100 text-brown-800 font-Inter"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Email Contact */}
                    <a
                      href={`mailto:${member.social.email}`}
                      className="inline-flex items-center space-x-2 transition-colors text-brown-600 hover:text-amber-600 group/link"
                    >
                      <FaRegEnvelope className="w-4 h-4" />
                      <span className="text-sm font-Inter">
                        {member.social.email}
                      </span>
                      <TbArrowRight className="w-4 h-4 transition-all opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-2" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden bg-white">
        {/* Subtle Background Pattern */}
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

        {/* Decorative Line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent"></div>

        <div className="relative text-center container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-8"
            >
              <span className="px-6 py-3 text-sm font-medium tracking-wider uppercase rounded-full bg-amber-50 text-amber-700 font-Inter">
                ✨ Join the Community
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl font-Playfair"
            >
              Ready to Make Your{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-amber-600">
                  Voice Heard?
                </span>
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute left-0 h-3 bottom-2 bg-amber-100 -z-0"
                />
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-2xl mx-auto mb-12 text-xl text-gray-600 font-Inter"
            >
              Be part of something bigger. Share your stories, connect with
              like-minded people, and grow together with thousands of writers
              worldwide.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-6"
            >
              <Link
                to="/create-blog"
                className="relative inline-flex items-center px-8 py-4 space-x-3 overflow-hidden transition-all duration-300 group bg-amber-600 rounded-xl hover:bg-amber-700 hover:shadow-xl hover:shadow-amber-200 hover:-translate-y-1"
              >
                <TbWriting className="w-5 h-5 text-white" />
                <span className="text-lg text-white font-Forum">
                  Start Writing Today
                </span>
                <TbArrowRight className="w-5 h-5 text-white transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact"
                className="relative inline-flex items-center px-8 py-4 space-x-3 transition-all duration-300 border border-gray-200 group bg-gray-50 rounded-xl hover:bg-gray-100 hover:shadow-xl hover:-translate-y-1"
              >
                <TbMail className="w-5 h-5 text-gray-700" />
                <span className="text-lg text-gray-700 font-Forum">
                  Get in Touch
                </span>
              </Link>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center justify-center pt-12 mt-12 space-x-12 border-t border-gray-100"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 font-Playfair">
                  500+
                </div>
                <div className="mt-1 text-sm text-gray-500 font-Inter">
                  Daily Readers
                </div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 font-Playfair">
                  50+
                </div>
                <div className="mt-1 text-sm text-gray-500 font-Inter">
                  Expert Writers
                </div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 font-Playfair">
                  1K+
                </div>
                <div className="mt-1 text-sm text-gray-500 font-Inter">
                  Stories Shared
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
