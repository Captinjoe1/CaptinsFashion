import React from "react";
import Footer from "../assets/Components/Footer";
import kc from "../assets/image/kc.jpeg";

function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* MAIN CONTAINER */}
      <div className="container mx-auto px-4 py-16">

        {/* HERO: Image + Contact on left, Header + Text on right */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          
          {/* LEFT COLUMN: Image + Contact Details */}
          <div className="flex flex-col justify-center space-y-6">
            {/* IMAGE */}
            <div className="w-full flex justify-center">
              <img
                src={kc}
                alt="Contact Us"
                className="rounded-2xl shadow-lg w-full max-w-md h-auto object-cover transition-all duration-200 transform hover:scale-105"
              />
            </div>

            {/* CONTACT DETAILS */}
            <div className="bg-white p-6 rounded-2xl shadow-md space-y-3 text-lg transition-all duration-200 transform hover:scale-105">
              <p>📍 <span className="font-semibold">Location:</span> Accra, Teshi-Tebibianor Near Calvary-School</p>
              <p>📞 <span className="font-semibold">Phone:</span> +23355 827 1971 / +23324 043 6659</p>
              <p>✉️ <span className="font-semibold">Email:</span> Kcollectionsghana@gmail.com</p>
              <p>🕒 <span className="font-semibold">Working Hours:</span> Mon–Sat, 8am–7pm</p>
            </div>
          </div>

          {/* RIGHT COLUMN: Header + Intro */}
          <div className="flex flex-col justify-center space-y-6 ">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
              Contact Us
            </h1>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              Whether you have questions about our products, need help with an
              order, or want to collaborate, we’re always happy to hear from you.
              Reach out to us through any of the platforms below.
            </p>
          </div>

        </div>

        {/* CONTACT FORM */}
        <div className="max-w-3xl mx-auto p-8 bg-white border rounded-2xl shadow-md hover:shadow-xl transition">
          <h2 className="text-3xl font-bold text-center mb-6">
            Send Us a Message
          </h2>

          <form className="space-y-6">
            <div>
              <label className="block font-semibold mb-2">Full Name</label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-gray-700 outline-none"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">Email Address</label>
              <input
                type="email"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-gray-700 outline-none"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">Message</label>
              <textarea
                className="w-full p-3 border rounded-lg h-32 resize-none focus:ring-2 focus:ring-gray-700 outline-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
