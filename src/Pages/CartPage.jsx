import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2 } from "lucide-react";
import { removeFromCart, updatQuantity } from "../features/cart/cartslice";

function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart?.items) || [];

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // 🛒 Empty cart message
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-semibold mb-2">Your Cart is Empty</h2>
        <p className="text-gray-600 mb-6">
          Add some products to your cart to see them here.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center lg:text-left">
        Shopping Cart
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 🛍️ Cart Items Section */}
        <div className="lg:col-span-2 bg-white shadow-md p-4 rounded-md">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 py-4 border-b last:border-b-0"
            >
              {/* Product Image */}
              <Link to={`/product/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-md"
                />
              </Link>

              {/* Product Info */}
              <div className="flex-1">
                <Link
                  to={`/product/${item.id}`}
                  className="font-semibold hover:text-blue-600"
                >
                  {item.name}
                </Link>
                <p className="text-gray-600">₵{item.price.toFixed(2)}</p>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2 mt-3">
                  <button
                    className="p-1 rounded-full hover:bg-gray-100 border"
                    onClick={() =>
                      dispatch(
                        updatQuantity({
                          id: item.id,
                          quantity: Math.max(1, item.quantity - 1),
                        })
                      )
                    }
                  >
                    <Minus size={16} />
                  </button>

                  <span className="min-w-[24px] text-center font-medium">
                    {item.quantity}
                  </span>

                  <button
                    className="p-1 rounded-full hover:bg-gray-100 border"
                    onClick={() =>
                      dispatch(
                        updatQuantity({
                          id: item.id,
                          quantity: item.quantity + 1,
                        })
                      )
                    }
                  >
                    <Plus size={16} />
                  </button>

                  {/* Delete Button */}
                  <button
                    className="ml-auto p-1 text-red-500 hover:text-red-700 transition"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    <Trash2 size={22} />
                  </button>
                </div>
              </div>

              {/* Item Total */}
              <div className="text-right font-semibold">
                ₵{(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        {/* 💳 Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white shadow-md p-6 rounded-md">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>

            <div className="space-y-2 mb-4 text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₵{total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Fee</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₵{total.toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
