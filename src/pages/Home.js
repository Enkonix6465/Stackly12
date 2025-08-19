import React from "react";
import "./Home.css";
import { useDarkMode } from "../context/Darkmodecontext";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleGetStarted = (path) => {
    navigate(path); // or any other route
  };
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>

      <section className="hero">
        {/* Backgrounad video */}
        <video
          className="hero-video"
          src="/images/it1.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* Overlay content */}
        <div className="hero-overlay">
          <h1>Powering Your Business with Cutting-Edge IT Solutions</h1>
          <p>
            From cloud migration to cybersecurity, we deliver scalable, reliable, and
            innovative technology services that drive growth and efficiency.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={()=>handleGetStarted("/about")}>Get Started</button>
            <button className="btn btn-secondary" onClick={()=>handleGetStarted("/contact")}>Talk to an Expert</button>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-container">
          <div className="about-image">
            <img src="images/process.jpg" alt="About Us" />
          </div>
          <div className="about-content">
            <h4 className="about-subtitle">About Us</h4>
            <h1 className="about-title">
              Where Ideas Meet Execution
            </h1>
            <p className="about-text">
              We are a team of tech enthusiasts, problem solvers, and innovators dedicated to transforming the way businesses use technology.
              Our mission is to provide tailored IT solutions that help companies operate smarter, safer, and faster in a digital-first world.
              With a deep understanding of emerging trends, we deliver future-ready strategies that give businesses a competitive edge.
              We believe in combining cutting-edge tools with human creativity to solve complex challenges.
              From startups to enterprises, our solutions are designed to scale with your growth.
              Our commitment to excellence drives us to continuously improve, innovate, and exceed expectations.
            </p>
            <button className="read-more-btn"onClick={()=>handleGetStarted("/about")}>Read More</button>
          </div>
        </div>
      </section>



      <section className="stats-section">
        <div className="stat-card">
          <h2>655+</h2>
          <h4>Completed Projects</h4>
          <p>Delivering top-quality construction projects on time and within budget.</p>
        </div>
        <div className="stat-card">
          <h2 className="highlight">91%</h2>
          <h4>Happy Clients</h4>
          <p>Trusted by homeowners, builders, and businesses across the region.</p>
        </div>
        <div className="stat-card">
          <h2>2k+</h2>
          <h4>Skilled Workers</h4>
          <p>Experienced professionals dedicated to precision and craftsmanship.</p>
        </div>
        <div className="stat-card">
          <h2 className="highlight">42+</h2>
          <h4>Awards Won</h4>
          <p>Recognized for excellence and innovation in construction services.</p>
        </div>
      </section>




      <section className="it-services">
        <h2 className="section-title">WE'RE HERE TO HELP YOU</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="icon">💻</div>
            <h3>Cloud Solutions</h3>
            <p>
              Scalable and secure cloud services that enhance flexibility, reduce costs,
              and drive innovation for your business.
            </p>
            <button className="service-btn"onClick={()=>handleGetStarted("/cloud")}>Explore Cloud</button>
          </div>
          <div className="service-card">
            <div className="icon">🔒</div>
            <h3>Cybersecurity</h3>
            <p>
              Protect your digital assets with advanced threat detection,
              compliance management, and 24/7 monitoring.
            </p>
            <button className="service-btn"onClick={()=>handleGetStarted("/cybersecurity")}>Explore Security</button>
          </div>
          <div className="service-card">
            <div className="icon">⚙️</div>
            <h3>IT Consulting</h3>
            <p>
              Tailored IT strategies and expert guidance to streamline processes
              and maximize business efficiency.
            </p>
            <button className="service-btn"onClick={()=>handleGetStarted("/contact")}>Explore Consulting</button>
          </div>
        </div>
      </section>



      <section className="industries-section">
        <div className="industries-container">
          <div className="industries-text">
            <h2>Smart IT Solutions for Every Industry</h2>
            <p>We provide tailored IT strategies to solve industry-specific challenges, helping your business grow with technology.</p>
            <ul>
              <li>💰 <strong>Finance:</strong> Secure, compliant, and scalable IT systems for financial operations.</li>
              <li>🏥 <strong>Healthcare:</strong> Protect patient data and streamline care with advanced IT solutions.</li>
              <li>🛒 <strong>E-Commerce:</strong> Optimize sales, logistics, and customer experience with smart tools.</li>
              <li>🎓 <strong>Education:</strong> Modernize classrooms and online learning platforms.</li>
              <li>🏭 <strong>Manufacturing:</strong> Optimize production and supply chain with connected IT systems.</li>
              <li>🚀 <strong>Startups:</strong> Fast, flexible, and scalable tech solutions for innovation.</li>
            </ul>
            <a href="#contact" className="flat-btn"onClick={()=>handleGetStarted("/services")}>Explore More</a>
          </div>
          <div className="industries-visual">
            <img src="/images/ii.jpg" alt="Industries Visual" />
          </div>
        </div>
      </section>




      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Read how our IT solutions 
            have helped businesses like yours succeed.</p>
          <div className="testimonials-grid">
            <article className="testimonial-card" data-aos="fade-right">
              <blockquote>
                <p>"The team's expertise and proactive support have been a game-changer for our business. They not only solved our immediate IT issues but also provided a strategic roadmap that has improved our efficiency and security."</p>
              </blockquote>
              <div className="client-info">
                <div className="client-photo-placeholder"></div>
                <div className="client-details">
                  <h4>Jane Doe</h4>
                  <p>CEO, TechForward Solutions</p>
                </div>
              </div>
            </article>
            <article className="testimonial-card" data-aos="fade-up">
              <blockquote>
                <p>"We've worked with many IT providers, but this company stands out.
                  Their communication is excellent, and they truly understand our 
                  unique needs. Their managed services have given us complete peace 
                  of mind.
                </p>
              </blockquote>
              <div className="client-info">
                <div className="client-photo-placeholder"></div>
                <div className="client-details">
                  <h4>John Smith</h4>
                  <p>CEO, Global Innovations Inc.</p>
                </div>
              </div>
            </article>
            <article className="testimonial-card" data-aos="fade-left">
              <blockquote>
                <p>"From a seamless cloud migration to ongoing cybersecurity 
                  support, their service has been absolutely flawless. They 
                  have become a truly reliable partner and an invaluable extension
                  of our team. Their team's deep expertise "</p>
              </blockquote>
              <div className="client-info">
                <div className="client-photo-placeholder"></div>
                <div className="client-details">
                  <h4>Sarah Chen</h4>
                  <p>CTO, FutureLink Technologies</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>









<section className="contact-cta">
  <div className="cta-container">
    <div className="cta-image">
      <img src="images/cu.jpg" alt="IT Support Team" />
    </div>
    <div className="cta-content">
      <h2 className="cta-title">Let’s Talk Tech!</h2>
      <p className="cta-text">
                Have a project in mind or need support? Our team is ready to help you find the right IT solutions. Get in touch today.

      </p>
      <button className="cta-btn"onClick={()=>handleGetStarted("/contact")}>Start Your Project</button>
    </div>
  </div>
</section>

    </div>
  );
}

export default Home;