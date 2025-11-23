import React from "react";
import Footer from "../assets/Components/Footer";
// SAMPLE IMAGES (Replace with your actual image paths)
import { ShoppingBag, Scissors, MapPin, PhoneCall, Truck, CreditCard, RotateCcw, Headset } from "lucide-react";

function FAQs() {
  return (
    <div>
      {/* MAIN CONTAINER */}
      <div className="container mx-auto px-4 py-12">

        {/* PAGE TITLE */}
        <h1 className="text-4xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h1>

        {/* INTRO */}
        <p className="max-w-2xl mx-auto text-center text-gray-700 text-lg leading-relaxed mb-12">
          Got questions? We’ve got answers. Here are some of the most common questions customers ask about <span className="font-semibold">Kcollections</span>.
        </p>

        {/* FAQ GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* FAQ ITEM 1 */}
          <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-lg transition">
            <ShoppingBag className="w-12 h-12 text-gray-600 mb-4" />
            <h3 className="font-bold text-xl mb-3">What products do you offer?</h3>
            <p className="text-gray-700">
              We offer premium men's and women’s clothing, casual wear, custom outfits, and seasonal fashion collections.
            </p>
          </div>

          {/* FAQ ITEM 2 */}
          <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-lg transition">
            <ShoppingBag className="w-12 h-12 text-gray-600 mb-4" />
            <h3 className="font-bold text-xl mb-3">Do you accept custom orders?</h3>
            <p className="text-gray-700">
              Yes! We create tailor-made outfits to match your exact style, size, and design preferences.
            </p>
          </div>

          {/* FAQ ITEM 3 */}
          <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-lg transition">
            <ShoppingBag className="w-12 h-12 text-gray-600 mb-4" />
            <h3 className="font-bold text-xl mb-3">What locations do you serve?</h3>
            <p className="text-gray-700">
              We currently serve customers across Ghana, with our main base in Accra, Teshi-Tebibianor.
            </p>
          </div>

          {/* FAQ ITEM 4 */}
          <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-lg transition">
            <ShoppingBag className="w-12 h-12 text-gray-600 mb-4" />
            <h3 className="font-bold text-xl mb-3">How can I place an order?</h3>
            <p className="text-gray-700">
              Orders can be placed through our social media, phone number, or in-person at our location.
            </p>
          </div>

          {/* FAQ ITEM 5 */}
          <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-lg transition">
            <ShoppingBag className="w-12 h-12 text-gray-600 mb-4" />
            <h3 className="font-bold text-xl mb-3">Do you deliver?</h3>
            <p className="text-gray-700">
              Yes, we offer nationwide delivery. Delivery fees depend on your location.
            </p>
          </div>

          {/* FAQ ITEM 6 */}
          <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-lg transition">
            <ShoppingBag className="w-12 h-12 text-gray-600 mb-4" />
            <h3 className="font-bold text-xl mb-3">What payment methods do you accept?</h3>
            <p className="text-gray-700">
              We accept Mobile Money (MTN, Vodafone, AirtelTigo) and cash payments for in-person pickups.
            </p>
          </div>

          {/* FAQ ITEM 7 */}
          <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-lg transition">
            <ShoppingBag className="w-12 h-12 text-gray-600 mb-4" />
            <h3 className="font-bold text-xl mb-3">Can I return or exchange an item?</h3>
            <p className="text-gray-700">
              Yes, items can be exchanged within 48 hours if unworn and in perfect condition. Custom-made outfits are not eligible for returns.
            </p>
          </div>

          {/* FAQ ITEM 8 */}
          <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-lg transition">
            <ShoppingBag className="w-12 h-12 text-gray-600 mb-4" />
            <h3 className="font-bold text-xl mb-3">How do I contact support?</h3>
            <p className="text-gray-700">
              You can reach us via phone, email, or through the Contact Us page for quick assistance.
            </p>
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default FAQs;
