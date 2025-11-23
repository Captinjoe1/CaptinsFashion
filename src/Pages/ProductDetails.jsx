import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import { addToCart } from "../features/cart/cartslice";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) =>
    state.product.items.find((p) => p.id === parseInt(id))
  );

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Product Not Found</h2>
        <p className="text-gray-500 mb-6">
          The product you’re looking for doesn’t exist or has been removed.
        </p>
        <Link
          to="/"
          className="text-white bg-blue-600 px-6 py-3 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* 🔙 Back Link */}
      <Link
        to="/"
        className="inline-flex items-center text-gray-700 hover:text-blue-600 transition duration-200 mb-8"
      >
        <ArrowLeft size={18} className="mr-2" /> Back to Products
      </Link>

      {/* 🖼️ Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Product Image */}
        <div className="shadow-lg rounded-2xl overflow-hidden bg-white">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[450px] object-contain p-6"
          />
        </div>

        {/* Right: Product Info */}
        <div>
          <h1 className="text-4xl font-bold mb-4 text-gray-900">{product.name}</h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">{product.description}</p>

          <div className="mb-6">
            <span className="text-3xl font-semibold text-blue-700">
              ₵{product.price.toFixed(2)}
            </span>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Category</h3>
            <span className="text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
              {product.category}
            </span>
          </div>

          <button
            onClick={() => dispatch(addToCart(product))}
            className="w-full md:w-auto bg-blue-500 text-white px-8 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-blue-700 transition duration-200 shadow-md"
          >
            <ShoppingCart size={20} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
