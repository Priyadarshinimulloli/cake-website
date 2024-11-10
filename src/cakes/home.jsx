
import React from 'react';



export default function Home({ addToCart }) {
  return (
    <div className="home">
      <div className="Tag">
      <h1>Welcome to Euphoria Cakes</h1>
      <p>Explore our best-selling cakes!</p>
      </div> 

      <div className="banner">
              <img src="https://images.pexels.com/photos/3014858/pexels-photo-3014858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <img src="https://images.pexels.com/photos/1857157/pexels-photo-1857157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <img src="https://images.pexels.com/photos/27025532/pexels-photo-27025532/free-photo-of-birdcage-cake-display-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
              <img src="https://plus.unsplash.com/premium_photo-1663133737289-448f4954f042?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
      </div>

    <section className="best-sellers">
      <h2>Best Selling Cakes</h2>
      <div className="cake-grid">
        <div className="cake-item" >
          <img src="https://www.cakeie.com/public/images/Special%20Cake%20For%20Mother-img1-cakeie.webp" alt="Cotton Candy Fantasy" />
          <p>Cotton Candy Fantasy</p>
         <p>₹999</p>
         <p>Rating: 4.9 <span className="star">&#9733;</span> (5893 reviews)</p>
         <button onClick={() => addToCart({ name: 'Cotton Candy Fantasy', price: 999 })}>Add to Cart</button>


        </div>
        <div className="cake-item" >
          <img src="https://merakcakes.com/cdn/shop/files/78_51356252-e77a-474e-8d35-ecc8ac67e430.jpg?v=1695980286" alt="Chcolate Two Tire cake"  />
          <p>Chcolate Two Tire cake</p>
         <p>₹849</p>
         <p>Rating:4.7 <span className="star">&#9733;</span>(3434 reviews)</p>
         <button onClick={() => addToCart({ name: 'Chcolate Two Tire cake', price: 849 })}>Add to Cart</button>


        </div>
        <div className="cake-item" >
          <img src="https://i.pinimg.com/736x/d3/26/92/d326925b0711adc6811ee624126d7c58.jpg" alt="Lavender Bliss"  />
          <p>Lavender Bliss</p>
         <p>₹899</p>
         <p>Rating:4.8<span className="star">&#9733;</span>(4494 reviews)</p>
         <button onClick={() => addToCart({ name: 'Lavender Bliss', price: 899 })}>Add to Cart</button>

         <br/>
        </div>
      </div>
    </section>
    </div>
  );
}


