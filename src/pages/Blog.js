import React from "react";
import "./Blog.css"; // Optional: Add styles for your blog
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();

  const handleGetStarted = (path) => {
    navigate(path);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <video
          className="hero-video"
          src="/images/vid.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        <div className="hero-overlay">
          <h1>Blog</h1>
          <p>Empowering Digital Futures with Scalable IT Solutions.</p>
        </div>
      </section>

      {/* Blog Cards Section */}
      <section className="blog-cards-section">
        <h2 className="section-title">Latest Insights & Trends</h2>

        <div className="blog-cards-container">
          <div className="blog-card" onClick={() => handleGetStarted("/blog1")}>
            <img
              src="https://i.pinimg.com/1200x/88/83/e8/8883e86cb97ead6ad1e0b6d448176e7e.jpg"
              alt="Cybersecurity"
            />
            <div className="blog-card-content">
              <h3>5 Ways to Secure Your Cyber</h3>
              <p>
                Learn how to future-proof your business against the latest
                threats and stay compliant in an evolving digital landscape.
              </p>
              <span className="read-more">Read more →</span>
            </div>
          </div>

          <div className="blog-card" onClick={() => handleGetStarted("/blog2")}>
            <img
              src="https://i.pinimg.com/736x/ab/d2/4d/abd24de7e6d407557e802cc60bcc2eca.jpg"
              alt="Cloud Native"
            />
            <div className="blog-card-content">
              <h3>Future of Software: Cloud-Native</h3>
              <p>
                Discover the benefits of building cloud-native applications and
                how they enable speed, scalability, and innovation.
              </p>
              <span className="read-more">Read more →</span>
            </div>
          </div>

          <div className="blog-card" onClick={() => handleGetStarted("/blog3")}>
            <img
              src="https://i.pinimg.com/736x/6c/1b/7c/6c1b7c6dac22be46c02c60028d0c9361.jpg"
              alt="AI and Data"
            />
            <div className="blog-card-content">
              <h3>AI-Driven Business Intelligence</h3>
              <p>
                Explore how AI-powered analytics and smarter data pipelines can
                drive real-time decision-making.
              </p>
              <span className="read-more">Read more →</span>
            </div>
          </div>
        </div>
      </section>



<section className="featured-blogs">
  <h2 className="section-title">Featured Innovations</h2>

  <div className="feature-row">
    <div className="feature-text">
      <h3>The Rise of Quantum Computing</h3>
      <p>
Quantum computing is no longer science fiction it’s rapidly becoming a reality 
that's set to redefine how we approach complex problem-solving. Unlike 
classical computers that use bits, quantum computers use qubits, enabling 
them to perform calculations at speeds previously unimaginable.As major tech 
companies and governments invest heavily in this domain, understanding quantum 
computing’s potential and limitations is crucial. Whether you’re an enterprise,
 developer, or policymaker, staying ahead of this curve will be a competitive advantage.      </p>
    </div>
    <div className="feature-image">
      <img src="https://i.pinimg.com/1200x/72/39/a9/7239a91e57bd5af0470479a3ac6b9e0a.jpg" alt="Quantum Computing" />
    </div>
  </div>

  <div className="feature-row reverse">
    <div className="feature-text">
      <h3>5G & Beyond</h3>
      <p>
5G is more than just faster internet on your phone it's the backbone of tomorrow’s
 connected world. With ultra-low latency, higher bandwidth, and massive device
  connectivity, 5G enables a new generation of technologies that were previously 
  out of reach.Looking ahead, 6G and satellite-based connectivity are on the horizon, 
  promising even greater speed and global reach. Businesses that embrace the 5G wave today
   will be better prepared for the hyper-connected future of tomorrow.5G is more than just faster internet
    on your phone  it's the backbone of tomorrow’s connected world.With ultra-low latency, high reliability, and massive bandwidth.     </p>
    </div>
    <div className="feature-image">
      <img src="https://i.pinimg.com/1200x/d9/a3/bb/d9a3bb5d478910634f06b55a895a3ce1.jpg" alt="5G Technology" />
    </div>
  </div>

  <div className="feature-row">
    <div className="feature-text">
      <h3>AR & VR in Enterprise</h3>
      <p>
Augmented Reality (AR) and Virtual Reality (VR) are no longer
 limited to gaming. Enterprises across industries are embracing immersive
  technologies to enhance training, design, and collaboration. As AR glasses 
  and VR headsets become more accessible, businesses integrating these technologies
   will gain a distinct edge in innovation, efficiency, and customer experience.In manufacturing and engineering, VR is used to simulate production environments, while AR assists technicians with real-time overlays during complex repairs. In healthcare, doctors are training with VR simulations for surgery and patient care.     </p>
      
    </div>
    <div className="feature-image">
      <img src="https://i.pinimg.com/1200x/d8/fd/0b/d8fd0be2f17641cf2633c9c7cc423a91.jpg" alt="AR and VR" />
    </div>
  </div>
</section>






<section className="leadership-section">
  <h2 className="section-title">Leadership & Digital Strategy</h2>
  
  <div className="leadership-list">

    <article className="leadership-item" onClick={() => handleGetStarted("/blog10")}>
      <div className="leadership-text">
        <h3>Leading Digital Transformation</h3>
        <p>Key strategies for CIOs and CTOs to align tech with business goals and drive innovation at scale.</p>
      </div>
      <img src="https://i.pinimg.com/1200x/a0/9a/db/a09adb47fbd1529d7edb97cc2fd4b8b3.jpg" alt="Digital Transformation" />
    </article>

    <article className="leadership-item" onClick={() => handleGetStarted("/blog11")}>
      <div className="leadership-text">
        <h3>Building Remote-First Cultures</h3>
        <p>Learn how modern enterprises are creating connected, productive remote teams with digital-first workflows.</p>
      </div>
      <img src="https://i.pinimg.com/736x/40/85/53/40855388376cba2d42073e516c5f85f7.jpg" alt="Remote Work Culture" />
    </article>

    <article className="leadership-item" onClick={() => handleGetStarted("/blog12")}>
      <div className="leadership-text">
        <h3>Smart IT Budgeting </h3>
        <p>Explore how to balance cost optimization with innovation investment in uncertain times.</p>
      </div>
      <img src="https://i.pinimg.com/1200x/81/77/48/8177484a31bd9fc5608c98c91ee865b8.jpg" alt="Tech Budgeting" />
    </article>

  </div>
</section>

    </>
  );
};

export default Blog;
