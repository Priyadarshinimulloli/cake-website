import React from 'react';
import './style.css';

function About() {
  return (
    <div>
      <div id="abt">
        <section className="introduction">
          <h2>Welcome to Euphoria Cakes!</h2>
          <p>
            At Euphoria Cakes, we don’t just bake; we create experiences. Each cake is a labor of love, crafted to bring joy and sweetness to your celebrations. Whether it’s a birthday, wedding, or any special occasion, we believe that our cakes should not only taste delightful but also look stunning and tell a story.
          </p>
        </section>

        <section className="mission-vision">
          <h2>Our Mission & Vision</h2>
          <div className="mission-vision-content">
            <p><strong>Mission:</strong> Our mission is to spread joy through our delicious cakes, made from the finest ingredients and a sprinkle of love. We aim to create lasting memories for our customers, one slice at a time.</p>
            <p><strong>Vision:</strong> We envision Euphoria Cakes as a beloved bakery where everyone can find their favorite cake. Our goal is to become a community hub for cake lovers, fostering connections through shared experiences and delightful flavors.</p>
          </div>
        </section>

        <section className="why-choose-us">
          <h2>Why Choose Us?</h2>
          <p>Here’s what sets Euphoria Cakes apart:</p>
          <ul>
            <li>✨ <strong>Artisan Quality:</strong> We use only the finest, locally sourced ingredients, ensuring every bite is fresh and flavorful.</li>
            <li>🎨 <strong>Custom Creations:</strong> Our cakes are tailored to reflect your vision, whether it's a whimsical design or an elegant classic.</li>
            <li>🌟 <strong>Community-Focused:</strong> We are dedicated to giving back. A portion of our proceeds goes to local charities and initiatives.</li>
            <li>🥳 <strong>Memorable Experiences:</strong> Beyond cakes, we create moments of happiness, making your celebrations unforgettable.</li>
          </ul>
        </section>

        <section className="community-engagement">
          <h2>Our Commitment to the Community</h2>
          <p>
            At Euphoria Cakes, we believe in the power of community. That's why we actively engage in local events and initiatives. From sponsoring local sports teams to hosting charity bake sales, we strive to give back and support the neighborhoods that have supported us.
          </p>
          <ul>
            <li>❤️ <strong>Baking Classes:</strong> Join our hands-on baking classes where we teach you the art of cake making while fostering a love for baking in our community.</li>
            <li>🤝 <strong>Collaboration with Local Farms:</strong> We partner with local farms to source fresh, organic ingredients, ensuring quality while supporting our community's economy.</li>
            <li>🌍 <strong>Sustainable Practices:</strong> We are committed to sustainability, using eco-friendly packaging and minimizing food waste through creative solutions.</li>
          </ul>
        </section>

        <section className="join-us">
          <h2>Join Our Cake Family!</h2>
          <p>
            We invite you to be part of our journey. Whether you're a lifelong fan or a first-time visitor, there's always a place for you at Euphoria Cakes. Sign up for our newsletter to stay updated on new flavors, special offers, and events. We can't wait to celebrate with you!
          </p>
          <form>
            <label htmlFor="email">Subscribe to our newsletter:</label>
            <input type="email" id="email" name="email" placeholder="Your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </section>
      </div>

   
    </div>
  );
}

export default About;
