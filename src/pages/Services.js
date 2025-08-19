// src/pages/Services.js
import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


import "./Services.css";
const Services = () => {
  const navigate = useNavigate();
      const handleGetStarted = (path) => {
        navigate(path); 
      }
  return (
    <>
      <section className="hero">
        {/* Background video */}
        <video
          className="hero-video"
          src="/images/IT.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* Overlay content */}
        <div className="hero-overlay">
          <h1>Powerful Solutions, Proven Results.</h1>
          <p>
            Explore our wide range of digital services tailored to accelerate your business growth.
          </p>
        </div>
      </section>










      <section className="explore-services-section">
        <h2 className="explore-services-title">Explore our services</h2>

        <div className="explore-services-grid">

          <div className="explore-service-card">
            <div className="image-wrapper">
              <img src="/images/cloud.jpg" alt="Cloud" />
            </div>
            <Link to="/cloud" className="explore-service-label">Cloud</Link>
          </div>

          <div className="explore-service-card">
            <div className="image-wrapper">
              <img src="/images/cf.jpg" alt="Customer First" />
            </div>
            <Link to="/customer-first" className="explore-service-label">Customer First</Link>
          </div>

          <div className="explore-service-card">
            <div className="image-wrapper">
              <img src="/images/cyber.jpg" alt="Cybersecurity" />
            </div>
            <Link to="/cybersecurity" className="explore-service-label">Cybersecurity</Link>
          </div>

          <div className="explore-service-card">
            <div className="image-wrapper">
              <img src="/images/data ai.jpg" alt="Data and AI" />
            </div>
            <Link to="/data-ai" className="explore-service-label">Data & AI</Link>
          </div>

          <div className="explore-service-card">
            <div className="image-wrapper">
              <img src="/images/em.jpg" alt="Enterprise Management" />
            </div>
            <Link to="/enterprise-management" className="explore-service-label">Enterprise Management</Link>
          </div>

          <div className="explore-service-card">
            <div className="image-wrapper">
              <img src="/images/iis.jpg" alt="Intelligent Industry" />
            </div>
            <Link to="/intelligent-industry" className="explore-service-label">Intelligent Industry</Link>
          </div>

        </div>
      </section>
    












      <section className="features-section">
  <div className="features-content">
    <h2>Why Choose Our Services?</h2>
    <p>
      We provide tailored digital solutions with measurable results. 
      Our team of experts ensures your success every step of the way.
    </p>
    <ul>
      <li>Custom Web Development</li>
      <li>SEO & Digital Marketing</li>
      <li>Reliable 24/7 Support</li>
      <li>Innovative UI/UX Design</li>
    </ul>
  </div>
  <div className="features-image">
    <img src="/images/its6.jpg" alt="Features" />
  </div>
</section>











<section className="process-section">
  <div className="rotating-circle">
    <h3 className="center-text">Our Process</h3>
    <div className="step step1">
      <strong>Step 1</strong><br />Strategy & Consulting
    </div>
    <div className="step step2">
      <strong>Step 2</strong><br />Design Prototyping
    </div>
    <div className="step step3">
      <strong>Step 3</strong><br />Development
    </div>
    <div className="step step4">
      <strong>Step 4</strong><br />Testing & QA
    </div>
    <div className="step step5">
      <strong>Step 5</strong><br />Deployment & Support
    </div>
  </div>

  <div className="process-image-wrapper">
    <img src="/images/its5.jpg" alt="Process Diagram" />
  </div>
</section>










<section className="offerings-section">
  <h2>Our Offerings</h2>
  <div className="offerings-grid">
    <div className="offering-item">
      <div className="offering-icon">💻</div>
      <h3 className="offering-title">Enterprise Architecture</h3>
      <p className="offering-desc">
        Align your technology strategies with your business goals. We analyze,
        identify gaps, and design a future-proof blueprint.
      </p>
    </div>

    <div className="offering-item">
      <div className="offering-icon">☁️</div>
      <h3 className="offering-title">Journey to the Cloud</h3>
      <p className="offering-desc">
        Transition seamlessly to the cloud with scalable infrastructure,
        leveraging modern technologies and best practices.
      </p>
    </div>

    <div className="offering-item">
      <div className="offering-icon">📊</div>
      <h3 className="offering-title">Data & Analytics</h3>
      <p className="offering-desc">
        Unlock the power of data with collection, analysis, and visualization
        for smarter decision-making and growth.
      </p>
    </div>

    <div className="offering-item">
      <div className="offering-icon">⚙️</div>
      <h3 className="offering-title">Digital Engineering</h3>
      <p className="offering-desc">
        Combine technical expertise with innovation to design and implement
        digital solutions that enhance customer experiences.
      </p>
    </div>

    <div className="offering-item">
      <div className="offering-icon">🔒</div>
      <h3 className="offering-title">Data Governance</h3>
      <p className="offering-desc">
        Ensure agile and effective governance with strategies, 
        frameworks, and innovative tools that foster sustainable 
        business growth
      </p>
    </div>

    <div className="offering-item">
      <div className="offering-icon">🚀</div>
      <h3 className="offering-title">Emerging & Future Tech</h3>
      <p className="offering-desc">
        Leverage transformative innovations with tailored 
        solutions that drive sustainable growth and future-ready
         business readiness.
      </p>
    </div>
  </div>
</section>













<section className="timeline-section">
  <h2 className="timeline-title">Our Proven IT Transformation Journey</h2>
  <div className="timeline">
    <div className="timeline-step">
      <div className="icon">💡</div>
      <div className="content">
        <h3>Discovery & Consultation</h3>
        <p>Understanding client goals and challenges for tailored solutions.</p>
      </div>
    </div>

    <div className="timeline-step">
      <div className="icon">📝</div>
      <div className="content">
        <h3>Strategy & Planning</h3>
        <p>Designing scalable IT roadmaps aligned with business objectives.</p>
      </div>
    </div>

    <div className="timeline-step">
      <div className="icon">⚙️</div>
      <div className="content">
        <h3>Implementation</h3>
        <p>Deploying cloud, cybersecurity, and automation solutions seamlessly.</p>
      </div>
    </div>

    <div className="timeline-step">
      <div className="icon">🚀</div>
      <div className="content">
        <h3>Optimization</h3>
        <p>Continuously enhancing performance, speed, and security.</p>
      </div>
    </div>

    <div className="timeline-step">
      <div className="icon">🌐</div>
      <div className="content">
        <h3>Support & Growth</h3>
        <p>24/7 monitoring and scaling for future business expansion.</p>
      </div>
    </div>
  </div>
</section>














<section className="contact-cta">
  <div className="cta-container">
    <div className="cta-image">
      <img src="images/team.jpg" alt="IT Support Team" />
    </div>
    <div className="cta-content">
      <h2 className="cta-title">Ready to Elevate Your IT?</h2>
      <p className="cta-text">
        Whether you’re scaling your business, securing your data, or building new digital 
        solutions—our experts are here to help you every step of the way. Let’s create 
        technology that drives results.
      </p>
      <button className="cta-btn"onClick={()=>handleGetStarted("/contact")}>Start Your Project</button>
    </div>
  </div>
</section>

    </>
  );
};

export default Services;










