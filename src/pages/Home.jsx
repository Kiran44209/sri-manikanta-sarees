import { Link } from "react-router-dom";
function Home() {
  const categories = [
    {
      name: "Kanchipuram Silk",
      description: "Rich traditional silk sarees from South India.",
      image: "/Kanchipuram.png",
      link: "/categories/kanchipuram",
    },
    {
      name: "Mysore Silk",
      description: "Elegant silk sarees with beautiful traditional design.",
      image: "/Mysore.png",
      link: "/categories/mysore",
    },
    {
      name: "Dharmavaram Silk",
      description: "Vibrant silj sarees with rich traditional designs.",
      image: "/Dharmavaram.png",
      link: "/categories/dharmavaram"
    },
  ];
  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <p className="hero-small-title">TRADITION • ELEGANCE • STYLE</p>
            <h1>Discover the Beauty of <span>Sri Manikanta Sarees</span></h1>
            <p className="hero-description">Explore our collections of exquisite traditional silk sarees,carfted with heritage, elegance and timeless beauty.</p>
            <Link to="/products" className="shop-button">SHOP NOW → </Link>
          </div>
        </div>
      </section>
      <section className="features-section">
        <div className="feature">
          <div className="feature-icon">💎</div>
          <div>
            <h3>Premium Quality</h3>
            <p>Handpicked sarees with finest craftsmanship.</p>
          </div>
        </div>
        <div className="feature">
          <div className="feature-icon">🚚</div>
          <div>
            <h3>Fast Delivery</h3>
            <p>Get your favorite sarees deliveredto your doorstep.</p>
          </div>
        </div>
        <div className="feature">
          <div className="feature-icon">🛡️</div>
          <div>
            <h3>Secure Payment</h3>
            <p>Safe and convenient payment experience.</p>
          </div>
        </div>
      </section>
      <section className="collections-section">
        <div className="section-heading">
          <h2>Explore Our Collections</h2>
          <div className="heading-decoration"> ✦ </div>
          <p>Traditional weaves. Timeless elegance.</p>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <div className="category-card" key={category.name} >
              {category.image && (
                <img src={category.image} alt={category.name} />
             )}
             <div className="category-overlay">
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <Link to={category.link}>Explore Collection →</Link>
             </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
export default Home;
