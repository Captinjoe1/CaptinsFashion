import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, User, Menu, X, Search } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../../features/products/productSlice";
import logo from "../image/logo.png";

function Navbar() {
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.product.searchTerm);
  const userRef = useRef(null);

  const cartItems = useSelector((state)=>state.cart.items);
  const itemCount = cartItems.reduce((total,item)=>total + item.quantity,0);

  const toggleUser = () => setIsUserOpen((prev) => !prev);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // 🧠 Close user dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userRef.current && !userRef.current.contains(e.target)) {
        setIsUserOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 🔍 Handle search
  const handleSearch = (e) => {
    const value = e.target.value;
    dispatch(setSearchTerm(value));
  };

  return (
    <header className="bg-white shadow-md w-full">
      {/* Top Menu */}
      <div className="py-3 border-b">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Left Links */}
          <div className="hidden md:flex gap-6 text-lg font-medium">
            <Link to="/" className="hover:text-blue-600 transition">
              Home
            </Link>
            <Link to="/about" className="hover:text-blue-600 transition">
              About
            </Link>
            <Link to="/faqs" className="hover:text-blue-600 transition">
              FAQs
            </Link>
            <Link to="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center text-gray-700"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* User Dropdown */}
          <div className="relative" ref={userRef}>
            <User
              size={36}
              className="bg-gray-200 p-2 text-black rounded cursor-pointer hover:bg-gray-300 transition"
              onClick={toggleUser}
            />

            {isUserOpen && (
              <ul className="absolute right-0 top-12 bg-white shadow-md rounded-md p-4 flex flex-col gap-2 z-50 min-w-[150px]">
                <li>
                  <Link to="/signin" className="hover:text-blue-600">
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link to="/account" className="hover:text-blue-600">
                    My Account
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Mobile Links Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col gap-3 text-lg">
            <Link to="/" onClick={toggleMenu} className="hover:text-blue-600">
              Home
            </Link>
            <Link to="/about" onClick={toggleMenu} className="hover:text-blue-600">
              About
            </Link>
            <Link to="/faqs" onClick={toggleMenu} className="hover:text-blue-600">
              FAQs
            </Link>
            <Link to="/contact" onClick={toggleMenu} className="hover:text-blue-600">
              Contact
            </Link>
          </div>
        )}
      </div>

      {/* Bottom Nav (Logo + Search + Cart on one line) */}
      <nav className="bg-slate-100 py-3">
        <div className="container mx-auto flex justify-between items-center px-4 gap-3">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Anni’s Collection Logo"
              className="w-24 md:w-28 object-contain"
            />
          </Link>

          {/* Search Bar (smaller width) */}
          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <Search
                size={20}
                className="absolute left-3 top-2.5 text-gray-400 pointer-events-none"
              />
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-md border border-zinc-300 bg-white py-2 pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                value={searchTerm}
                onChange={(e)=>dispatch(setSearchTerm(e.target.value))}
              />
            </div>
          </div>

          <div className="relative">
            {/* Shopping Cart */}
          <Link to="/cart" >
            <ShoppingCart
              size={35}
              className="cursor-pointer rounded-full bg-white p-1 hover:bg-gray-200 transition"
            />
           {itemCount > 0 && (
              <span className="absolute -top-2 -right-5 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {itemCount}
            </span>
               )}

          </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
