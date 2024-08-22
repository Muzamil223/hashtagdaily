// AboutUs.js
import React from "react";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";
import TEAM_MEMBER1 from "../../assets/teamMember1.jpg";
import TEAM_MEMBER2 from "../../assets/teamMember2.jpg";
import DESIGN1 from "../../assets/design1.jpg";



// Sample author data
const authors = [
  {
    name: "Muzamil Ali",
    bio: "Muzamil is a seasoned writer with a passion for technology and lifestyle. He loves exploring new trends and sharing his insights with readers.",
    image: TEAM_MEMBER2, // Replace with actual path
  },
  {
    name: "Meerab Mushtaq",
    bio: "Meerab is a tech enthusiast and avid blogger who enjoys delving into the latest gadgets and software. Her reviews and tips are a hit among our readers.",
    image: TEAM_MEMBER1, // Replace with actual path
  },
];

const AboutUs = () => {
  return (
    <div className="py-16 mt-16 padding-x">
      {/* Heading Image */}
      <div className="relative text-center mb-16">
        <img
          src={DESIGN1}
          alt="About Us Background"
          className="absolute inset-0 w-full h-full object-cover filter brightness-50"
        />
        <div className="relative z-10">
          <h1
            className="text-4xl py-4 font-bold text-white mb-4"
            style={{ fontFamily: "Bodoni" }}
          >
            About Us
          </h1>
        </div>
      </div>

      {/* About Us Text */}
      <div className="text-center mb-16 px-4">
        <p className="text-lg text-black" style={{ fontFamily: "Poppins" }}>
          Welcome to Hashtag Daily! We are a dynamic blogging platform dedicated
          to providing you with the most up-to-date and engaging content in
          technology, lifestyle, and current trends. Our mission is to offer our
          readers insightful articles, detailed reviews, and practical tips to
          help them stay informed and make the most of their daily lives. From
          exploring the latest gadgets and software to diving into lifestyle
          trends and personal growth, we cover it all with a fresh and engaging
          perspective.
          <br />
          At Hashtag Daily, we believe in the power of storytelling. Our
          platform hosts a diverse community of writers, each with a unique
          voice and perspective. From tech trends to travel adventures, wellness
          tips to culinary delights, our blogs cover it all. Dive into
          thought-provoking opinion pieces, practical how-to guides, and
          in-depth explorations of current events – all crafted to enrich your
          reading experience. Navigating through Hashtag Daily is seamless and
          intuitive. <br />
          Our user-friendly interface ensures that you can easily discover
          content that resonates with your interests. Whether you're browsing
          from your desktop, tablet, or smartphone, our responsive design
          guarantees a visually pleasing experience every time. Explore our
          'About Us' section to get acquainted with the passionate minds behind
          Hashtag Daily. Learn about our mission to foster a community where
          ideas flourish and conversations thrive. Interested in contributing?
          Check out our 'Write for Us' page to learn how you can share your
          expertise and stories with our global audience. <br />
          Stay connected with us through social media to stay updated on the
          latest blog releases, special features, and community events. Follow
          us on Twitter, Instagram, and Facebook to join the conversation and
          interact with fellow readers and writers. For businesses looking to
          amplify their message, Hashtag Daily offers tailored advertising and
          sponsorship opportunities. Partner with us to reach a highly engaged
          audience eager to discover new products and services. Join us on this
          journey of discovery and exploration. <br />
          Whether you're here to learn, to share, or simply to be inspired,
          Hashtag Daily invites you to embark on a daily adventure through the
          power of words. Start exploring today and discover why Hashtag Daily
          is more than just a blog – it's a community of ideas, waiting to be
          explored.
        </p>
      </div>

      {/* Meet Our Team */}
      <div className="mb-12">
        <h2
          className="text-3xl font-bold text-center mb-8"
          style={{ fontFamily: "Lato" }}
        >
          Meet Our Team
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {authors.map((author, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={author.image}
                  alt={author.name}
                  className="w-full h-96 object-cover"
                />
                <div className="p-4">
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ fontFamily: "Palanquin" }}
                  >
                    {author.name}
                  </h3>
                  <p className="text-gray-700" style={{ fontFamily: "Roboto" }}>
                    {author.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
