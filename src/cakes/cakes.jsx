import React, { useState } from 'react';
import Cart from './cart'; 

const cakes = [
  {
    name: 'Chocolate Beet Cake',
    price: 2500,
    rating: 4.9,
    reviews: 5893,
    img: 'https://www.kitchenaid.com/is/image/content/dam/business-unit/kitchenaid/en-us/marketing-content/site-assets/page-content/pinch-of-help/35-types-of-cakes/35-Types-of-Cakes_Image-CC8_v2.jpg?fit=constrain&fmt=png-alpha&wid=2875',
  },
  {
    name: 'Butterfly Cake',
    price: 3599,
    rating: 4.8,
    reviews: 6873,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJeNNUi3JkfvYoxTFcG-NQmlYPpvmU3C_y5g&s',
  },
  {
    name: 'Black Forest',
    price: 549,
    rating: 4.7,
    reviews: 2333,
    img: 'https://m.media-amazon.com/images/I/71vFNICkp3L._AC_UF1000,1000_QL80_.jpg',
  },
  {
    name: 'Whiteforest Cake',
    price: 425,
    rating: 4.6,
    reviews: 1999,
    img: 'https://media.wishque.com/data/images/products/10607/72090352_165099655174_0.39559000-1697694487.jpg',
  },
  {
    name: 'Enchanted Forest',
    price: 5999,
    rating: 4.9,
    reviews: 6873,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4YNBUDZx_KUMRMu0fRdvlXnLO973tz_glmQ&s',
  },
  {
    name: 'Fairy Land Cake',
    price: 3500,
    rating: 4.7,
    reviews: 6873,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUkl1N9YqZl-Eaxcxr-jSIYNvXSAWOd4zqhQ&s',
  },
];

export default function Cakes() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (cakeName, cakePrice, cakeImg) => {
    setCartItems([...cartItems, { name: cakeName, price: cakePrice, img: cakeImg }]);
  };

  return (
    <div className="cakes-page">
      <h2>Taste the Magic in Every Bite</h2>
      <div id="shop">
        <div className="row">
          {cakes.map((cake, index) => (
            <div key={index} className="cake-item">
              <img src={cake.img} alt={cake.name} className="cake-img" />
              <p>{cake.name}</p>
              <p>₹{cake.price}</p>
              <p>Rating: {cake.rating} <span className="star">&#9733;</span> ({cake.reviews} reviews)</p>
              <button onClick={() => addToCart(cake.name, cake.price, cake.img)} className="cart">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>

      
      <Cart cartItems={cartItems} />
    </div>
  );
}
