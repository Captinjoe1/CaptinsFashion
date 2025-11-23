import React from 'react';
import logo from "../../assets/image/logo.png"
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white shadow-md mt-10">
      
      {/* NEWSLETTER SECTION */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center py-10">
          <h2 className="text-lg font-semibold">
            Subscribe to Our Newsletter
          </h2>

          <form className="md:w-1/3 w-full mt-8 md:mt-0 relative">
            <input
              type="email"
              placeholder="Enter your Email.."
              className="py-4 px-4 rounded shadow-md w-full text-black outline-none"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-3 px-4 rounded-full absolute right-3 top-1 hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className='bg-slate-800 text-white py-8'>
        <div className='container mx-auto px-4'>
          
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
            
            {/* LOGO + DESCRIPTION + SOCIAL ICONS */}
            <div>
              <img
                src={logo}
                alt="Logo"
                className="w-32 mb-4 bg-slate-50 rounded-full"
              />

              <p className="text-sm text-gray-400">
                Your go-to fashion store for modern, classy, and stylish looks.
              </p>

              {/* SOCIAL ICONS — FIXED */}
              <div className='flex items-center gap-8 mt-5'>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/share/177N6bdLsz/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook
                    size={40}
                    className='bg-white text-black rounded-md p-2 transition-all duration-200 transform hover:scale-110'
                  />
                </a>

                {/* Twitter */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter
                    size={40}
                    className='bg-white text-black rounded-md p-2 transition-all duration-200 transform hover:scale-110'
                  />
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube
                    size={40}
                    className='bg-white text-black rounded-md p-2 transition-all duration-200 transform hover:scale-110'
                  />
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram
                    size={40}
                    className='bg-white text-black rounded-md p-2 transition-all duration-200 transform hover:scale-110'
                  />
                </a>

              </div>
            </div>

            {/* PAGES */}
            <div>
              <h2 className='text-2xl font-semibold my-4'>Pages</h2>
              <ul className="space-y-2">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/FAQs">FAQs</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
              </ul>
            </div>

            {/* CATEGORY */}
            <div>
              <h2 className='text-2xl font-semibold my-4'>Category</h2>
              <ul className="space-y-2">
                <li><Link to="/">Dresses</Link></li>
                <li><Link to="/">Shoes</Link></li>
                <li><Link to="/">Tops</Link></li>
                <li><Link to="/">Jeans</Link></li>
                <li><Link to="/">Accessories</Link></li>
                <li><Link to="/">Jackets</Link></li>
              </ul>
            </div>

            {/* CONTACTS */}
            <div>
              <h2 className='text-2xl font-semibold my-4'>Contacts</h2>
              <p>Accra, Teshi-Tebibianor Near Calvary-School</p>
              <p>+233 55 827 1971</p>
              <p>+233 24 043 6659</p>
            </div>

          </div>

        </div>
      </div>

      {/* BOTTOM COPYRIGHT BAR */}
      <div className='container mx-auto text-center py-4 text-white'>
        <p>Copyright &copy; 2025 kcollectionsOnlineshop</p>
      </div>

    </footer>
  );
}

export default Footer;
