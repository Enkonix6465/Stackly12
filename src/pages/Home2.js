import React from "react";
import { useDarkMode } from "../context/Darkmodecontext";

import "./Home2.css"; // Styling for hero section
import { useNavigate } from "react-router-dom";



function Home2() {
  const navigate = useNavigate();
    const handleGetStarted = (path) => {
      navigate(path); 
    }    
      const { darkMode, toggleDarkMode } = useDarkMode();
    
    return (
        <>
            <section className="hero">
                {/* Background video */}
                <img
                    className="hero-video"
                    src="/images/ho2.jpg" // Place your video in public/images or public/videos
                    autoPlay
                    loop
                    muted
                    playsInline
                ></img>

                {/* Overlay content */}
                <div className="hero-overlay">
                    <h1>Powering Your Business with Cutting-Edge IT Solutions</h1>
                    <p>
                        From cloud migration to cybersecurity, we deliver scalable, reliable, and
                        innovative technology services that drive growth and efficiency.
                    </p>

                    {/* Buttons */}
                    <div className="hero-buttons">
                        <button className="btn btn-primary"onClick={()=>handleGetStarted("/services")}>Browse More</button>

                    </div>
                </div>
            </section>







            <section className="trusted-section">
                <div className="trusted-text">
                    <h2>Trusted by businesses that<br />are serious about efficiency</h2>
                </div>

                <div className="trusted-logos-scroll">
                    <img src="/images/logo1.jpg" alt="Company 1" />
                    <img src="/images/logo2.jpg" alt="Company 2" />
                    <img src="/images/logo3.jpg" alt="Company 3" />
                    <img src="/images/logo4.jpg" alt="Company 4" />
                    <img src="/images/logo5.jpg" alt="Company 5" />
                </div>
            </section>








<section class="explore-section">
  <h2 class="explore-title">Explore Stackly</h2>

  <div class="explore-grid">
    <div class="explore-card">
      <div class="image-container">
        <img src="/images/ls.jpg" alt="Life at Stackly" />
      </div>
      <a href="" class="explore-link"onClick={()=>handleGetStarted("/about")}>Life at Stackly</a>
    </div>

    <div class="explore-card">
      <div class="image-container">
        <img src="/images/cr.jpg" alt="Corporate social responsibility" />
      </div>
      <a href="/services" class="explore-link"onClick={()=>handleGetStarted("/services")}>Corporate social responsibility</a>
    </div>

    <div class="explore-card">
      <div class="image-container">
        <img src="/images/ln.jpg" alt="Latest news" />
      </div>
      <a href="" class="explore-link"onClick={()=>handleGetStarted("/contact")}>Latest news</a>
    </div>
  </div>
</section>







<section class="tech-insights-section">
  <h2 class="section-title">Tech Insights Hub</h2>
  <p class="section-subtitle">Real-time trends shaping the future of IT services.</p>

  <div class="insights-grid">
    <div class="insight-card">
      <div class="insight-icon">📈</div>
      <h3>93% Cloud Adoption</h3>
      <p>By 2025, nearly all businesses will be cloud-driven. We help you lead, not follow.</p>
    </div>

    <div class="insight-card">
      <div class="insight-icon">🔐</div>
      <h3>$10.5T in Cybercrime</h3>
      <p>Stay ahead of threats with our real-time cybersecurity and incident response.</p>
    </div>

    <div class="insight-card">
      <div class="insight-icon">🤖</div>
      <h3>AI Task Automation</h3>
      <p>AI is reshaping work. We build intelligent automation tailored to you.</p>
    </div>

    <div class="insight-card">
      <div class="insight-icon">🌐</div>
      <h3>5G + Edge Computing</h3>
      <p>Next-gen connectivity is here. Are your networks ready for the future?</p>
    </div>
  </div>

  <a href="/services" class="insight-cta-button">Explore Our Services</a>
</section>





  <h2 class="section-heading">Business Insights & Corporate Impact</h2>
<section class="info-section">
  <div class="info-box left" data-aos="fade-right">
    <h3>Share price</h3>
    <p><strong>Stackly - Paris</strong> <span>CAP</span></p>
    <p>16 Aug 2025 12:04 CET</p>
    <h2>123.05 <span>EUR</span></h2>
    <p class="price-change">↑ 1.10 0.9%</p>
    <p class="disclaimer">Disclaimer</p>
  </div>

  <div class="info-box center" data-aos="fade-up">
    <h3>Find out more about Stackly</h3>
    <p>
      <strong>Stackly</strong> is a trusted leader in <strong>digital transformation, consulting, technology</strong>, 
and <strong>engineering solutions</strong>. We empower organizations to innovate and scale by delivering 
cutting-edge services across the <strong>cloud, digital platforms, and modern tech ecosystems</strong>.

    </p>
    <img src="images/logo.png" alt="Logo" class="logo" />
    <a href="/about" class="link">About us →</a>
  </div>

  <div class="info-box right" data-aos="fade-left">
    <div class="img-bg">
      <h4>ESG</h4>
      <img src="images/its1.jpg" alt="ESG" />
    </div>
    <p>
      Discover how we integrate Environmental, Social, and Governance principles into every aspect of our business to drive sustainable growth. Stay informed with detailed reports on our initiatives, milestones, and commitments toward a responsible future. Join us on our journey to create lasting positive impact across communities and industries.
    </p>
    
  </div>
</section>








<section className="contact-cta">
  <div className="cta-container">
    <div className="cta-image">
      <img src="https://i.pinimg.com/1200x/4a/25/70/4a2570d2a8ea8f23138ff662c8f81edc.jpg" alt="IT Support Team" />
    </div>
    <div className="cta-content">
      <h2 className="cta-title">Ready to Innovate?</h2>
      <p className="cta-text">
Have a project in mind or need assistance? Our team is here to help you discover the best IT solutions. Contact us today.
      </p>
      <button className="cta-btn"onClick={()=>handleGetStarted("/contact")}>Know More</button>
    </div>
  </div>
</section>
        </>
    );
}

export default Home2;
