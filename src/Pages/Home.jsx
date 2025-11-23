import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../features/products/productSlice";
import ProductGrid from "../assets/Components/ProductGrid";
import Footer from "../assets/Components/Footer";

const categories = [
  "All",
  "Dresses",
  "Shoes",
  "Tops",
  "Jeans",
  "Accessories",
  "Jackets",
];

function Home() {
  const dispatch = useDispatch();
  const [active, setActive] = useState("All");

  const handleCategoryClick = (cat) => {
    setActive(cat);
    dispatch(setSelectedCategory(cat));
  };

  return (
    <div>
      <div className="container mx-auto my-10 px-4">
        <h2 className="text-3xl font-bold text-center mb-6">
          Explore by Category
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`px-6 py-2 rounded-full font-medium border transition-all duration-200 transform hover:scale-105 ${
                active === cat
                  ? "bg-gradient-to-r from-blue-500 to-blue-900 text-white shadow-lg"
                  : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <ProductGrid activeCategory={active} />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
