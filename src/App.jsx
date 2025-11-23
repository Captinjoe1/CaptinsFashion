import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import CartPage from "./Pages/CartPage";
import Navbar from "./assets/Components/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import FAQs from "./Pages/FAQs";
import { Provider } from "react-redux";
import { store } from "./App/Store";



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
           <Route path="/About" element={<About/>} />
           <Route path="/Contact" element={<Contact/>} />
            <Route path="/FAQs" element={<FAQs/>} />
          
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
