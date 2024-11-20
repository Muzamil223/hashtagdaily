// Contact.js
import React from "react";
import { call, location, mail } from "../../assets";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "7c4dc468-8461-4e41-ab8c-3454733a902e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <div
      id="contact"
      className="flex mt-16 sm:padding-x flex-col items-center px-4 py-16 md:py-24  rounded-lg shadow-lg"
    >
      <div className="w-full max-w-7xl p-6">
        <h1 className="text-4xl font-bold font-Playfair text-gray-900 mb-12 text-center">
          Get in Touch
        </h1>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          <div className="flex flex-col gap-6 lg:gap-12 lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800">Let's Talk</h2>
            <p className="text-lg text-gray-600">
              I'm currently available to take on new projects. So feel free to
              send me a message about anything you want me to work on. You can
              contact me anytime.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <img src={mail} alt="Mail" className="w-6 h-6 text-gray-600" />
                <p className="text-gray-800">muzamil987614@gmail.com</p>
              </div>
              <div className="flex items-center gap-4">
                <img src={call} alt="Call" className="w-6 h-6 text-gray-600" />
                <p className="text-gray-800">03008430810</p>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src={location}
                  alt="Location"
                  className="w-6 h-6 text-gray-600"
                />
                <p className="text-gray-800">Lahore - Iqbal Town, Pakistan</p>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="flex flex-col gap-8 lg:w-1/2">
            <label
              htmlFor="name"
              className="text-lg font-semibold text-gray-700"
            >
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              className="border border-gray-300 rounded-lg p-4 text-gray-700 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            />

            <label
              htmlFor="email"
              className="text-lg font-semibold text-gray-700"
            >
              Your Email
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              className="border border-gray-300 rounded-lg p-4 text-gray-700 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            />

            <label
              htmlFor="message"
              className="text-lg font-semibold text-gray-700"
            >
              Write Your Message Here
            </label>
            <textarea
              name="message"
              rows="6"
              placeholder="Enter Your Message"
              className="border border-gray-300 rounded-lg p-4 text-gray-700 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            />

            <button
              type="submit"
              className="bg-black text-white rounded-lg py-3 px-6 text-lg font-semibold shadow-md hover:bg-primary-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
