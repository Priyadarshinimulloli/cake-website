import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './cakes/navbar';
import Home from './cakes/home';
import Cakes from './cakes/cakes';
import Categories from './cakes/categories';
import Cart from './cakes/cart';
import About from './cakes/about';
import './cakes/style.css';
import Footer from './cakes/footer'

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} /> {/* Pass addToCart to Home */}
          <Route path="/cakes" element={<Cakes />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} /> {/* Pass cartItems to Cart */}
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
