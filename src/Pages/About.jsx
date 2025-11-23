import React from "react";
import { Check, HeartHandshake, Shirt, Sparkles, Target, Star } from "lucide-react"; // Icons
import Footer from "../assets/Components/Footer";

function About() {
  return (
    <div>
      {/* MAIN WRAPPER */}
      <div className="container mx-auto px-4 py-10">

        {/* PAGE HEADER */}
        <h1 className="text-4xl font-bold text-center mb-8">
          About Us
        </h1>

        {/* INTRO PARAGRAPH */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-gray-700 text-lg leading-relaxed">
            Welcome to <span className="font-semibold">Kcollections</span>,
            where fashion meets confidence. We create stylish, premium-quality
            clothing for individuals who want to express themselves boldly,
            beautifully, and effortlessly. Our designs blend contemporary trends
            with timeless elegance to bring you pieces that stand out wherever 
            you go.
          </p>
        </div>

        {/* SECTION: OUR PHILOSOPHY & MISSION WITH ICONS */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-lg transition flex gap-4">
            <Sparkles className="w-12 h-12 text-gray-900" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Our Philosophy</h2>
              <p className="text-gray-700 leading-relaxed">
                At <span className="font-semibold">Kcollections</span>,
                we believe fashion should be comfortable, expressive, and affordable.
                Every design is made to inspire confidence, elevate your everyday
                look, and reflect your personality.
              </p>
            </div>
          </div>

          <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-lg transition flex gap-4">
            <Target className="w-12 h-12 text-gray-900" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to produce high-quality, trendy, and well-tailored
                clothing that empowers individuals to look good, feel great, 
                and stand out with elegance everywhere they go.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION: WHAT WE OFFER WITH ICONS */}
        <div className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            What We Offer
          </h2>

          <ul className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <li className="flex items-center gap-3"><Shirt /> Stylish Men’s & Women’s Clothing</li>
            <li className="flex items-center gap-3"><Shirt /> Premium Casual Wear</li>
            <li classname="flex items-center gap-3"><HeartHandshake /> Custom and Tailor-Made Outfits</li>
            <li className="flex items-center gap-3"><Sparkles /> Seasonal Fashion Collections</li>
            <li className="flex items-center gap-3"><Star /> High-Quality Fabric & Craftsmanship</li>
          </ul>
        </div>

        {/* SECTION: WHY CHOOSE US */}
        <div className="p-8 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-xl shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-center mb-4">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-lg">
            <p className="flex gap-2 items-center"><Check /> Trendy and timeless designs</p>
            <p className="flex gap-2 items-center"><Check /> High-quality fabric and stitching</p>
            <p className="flex gap-2 items-center"><Check /> Excellent customer service</p>
            <p className="flex gap-2 items-center"><Check /> Perfect fit guarantee</p>
            <p className="flex gap-2 items-center"><Check /> Custom orders available</p>
            <p className="flex gap-2 items-center"><Check /> Fashion that boosts confidence</p>
          </div>
        </div>

        {/* SECTION: VISION WITH ICON */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Target className="w-12 h-12 mx-auto mb-4 text-gray-900" />
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            To become a global fashion brand known for creativity, uniqueness,
            and empowering people everywhere through clothing that makes them
            feel confident and beautiful.
          </p>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default About;