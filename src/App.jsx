import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import About from "./Components/About.jsx";
import Services from "./Components/Services.jsx";
import Contact from "./Components/Contact.jsx";

import Navbar from "./Components/Navbar.jsx";
import Center from "./Components/Center.jsx";
import Products from "./Components/Products.jsx";
import CartPage from "./Components/CartPage.jsx";
import Footer from "./Components/Footer.jsx";
import ProductDetails from "./Components/ProductDetails.jsx";

function App() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <BrowserRouter>
      <Navbar cartCount={cart.length} search={search} setSearch={setSearch} />

      {/* 👇 Center will show on ALL pages */}
      <Center />

      <Routes>
        <Route
          path="/"
          element={
            <Products
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              cart={cart}
              search={search}
            />
          }
        />
         <Route
           path= "/product/:id"
           element={< ProductDetails addToCart={addToCart}/>}
         
         />

        <Route
          path="/cart"
          element={<CartPage cart={cart} removeFromCart={removeFromCart} />}
        />

        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
