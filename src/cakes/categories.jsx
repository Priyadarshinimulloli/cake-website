import React from 'react';
import './style.css';

const Categories = () => {
  return (
    <div className="category">
      <div id="card">
        <CategorySection title="Wedding Cakes" cakes={[
          { image: "https://www.brides.com/thmb/XMPNsDSy3h22HXzaqw8MhA6yR9o=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/31b-elegant-ritz-paris-wedding-whimsical-lavender-cake-oliver-fly-0823-bd25814db48b48e88155ce2bd0a0501c.jpg", name: "Pretty Pastels" },
          { image: "https://www.brides.com/thmb/UwxcK3ExGaz90MoT0W76O7gRmc4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/carloscatie047-a8656c0a4ba54a378961623315356ba0.jpg", name: "Lambeth Frosting" },
          { image: "https://www.brides.com/thmb/GrRQU6h0zn-QSTviCGJ-ae3uuzE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/24-private-estate-cape-cod-wedding-floral-buttercream-cake-stephanie-vegliante-1023-ee297e772a4b4deaa11b8984a60a2359.jpg", name: "Buttercream Floral Cascade" }
        ]} />

        <CategorySection title="Birthday Cakes" cakes={[
          { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbOx_wLnVSVxeQ3h8eMwDVNoB0f9n-o8rLcw&s", name: "Classic Chocolate Cake" },
          { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFliq8D_UU__1IytTK7D9wRjLuBMf4AH-Byg&s", name: "Red Velvet Cake" },
          { image: "https://i0.wp.com/smittenkitchen.com/wp-content/uploads//2007/06/strawberry-chiffon-shortcake.jpg?fit=750%2C500&ssl=1", name: "Strawberry Chiffon Shortcake" }
        ]} />

        <CategorySection title="Anniversary Cakes" cakes={[
          { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq2wcHlp3kFjcZtHXocV_OgwqkER_bi_Pwsw&s", name: "Heart-Shaped Cakes" },
          { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8zXiC4K-0RycY2mSBOA1-zhIHZHgkUC0EyA&s", name: "Photo Print Cakes" },
          { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Vavc_NXFTofxFuC8X_D3q9KSpXUvLZoXCA&s", name: "Vintage Style Cakes" }
        ]} />

        <CategorySection title="Seasonal Celebration Cakes" cakes={[
          { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSeRpdjOsrRaRaJxLjBJB1eT4nQ91JEQPFaA&s", name: "Floral and Berry Cake", season: "Spring" },
          { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCjgZ_s9SBHD6ExVVQ-mi7GtAqpN8PUSAjVg&s", name: "Tropical Fruit Cake", season: "Summer" },
          { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfjpJSFWgUjEEAzSQ2B6K3G-IJlgnRo1-c1w&s", name: "Caramel Apple Cake", season: "Autumn" }
        ]} />
      </div>
    </div>
  );
};

const CategorySection = ({ title, cakes }) => (
  <div id="card">
    <ul>
      <li style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '28px',fontFamily: 'Arial, Helvetica, sans-serif' }}>{title}</li>
      <br />
    </ul>
    <ul className="categories">
      {cakes.map((cake, index) => (
        <li key={index} id="cat1">
          {cake.season && <span>{cake.season}</span>}
          <br />
          <img src={cake.image} width="200" height="220" alt={cake.name} />
          <span>{cake.name}</span>
        </li>
      ))}
    </ul>
  </div>
);



export default Categories;

