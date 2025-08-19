import './CustomerFirst.css';
import { useNavigate } from "react-router-dom";


function CustomerFirst() {
    const navigate = useNavigate();
    const handleGetStarted = (path) => {
      navigate(path); 
    }
  return (
    <>
      <section className="hero">
        {/* Background video */}
        <img
          className="hero-video"
          src="/images/cf.jpg"
        
        ></img>

        {/* Overlay content */}
        <div className="hero-overlay">
          <h1>Customer First</h1>
        
        </div>
      </section>











<section className="cloud-section">
  <div className="cloud-container">
    {/* Left Content */}
    <div className="cloud-content">
      <h2>IT Services Tailored to Your Unique Needs</h2>
      <p>
        We help you innovate faster, cut costs, and stay secure — whether 
        you’re migrating to the cloud, optimizing your current setup, or building 
        cloud-native applications tailored to your needs.
      </p>

      <ul className="cloud-features">
        <li>☁️ <span>Seamless Migration – Move workloads with minimal disruption.</span></li>
        <li>🔒 <span>Enterprise-Grade Security – Built-in compliance & monitoring.</span></li>
        <li>⚡ <span>Scalable Performance – Auto-adjust resources to demand.</span></li>
      </ul>

      <button className="cloud-btn"onClick={()=>handleGetStarted("/contact")}>Get a Consultation</button>
    </div>

    {/* Right Side Image */}
    <div className="cloud-image">
      <img src="https://i.pinimg.com/1200x/54/a5/13/54a513e042059fed8d20f090f3ef10c1.jpg" alt="Cloud Solutions" />
    </div>
  </div>
</section>















<section className="cloud-services-timeline">
    <h2>Our Customer Services</h2>
      <p className="cloud-subtitle">
Get responsive, reliable support from experts who are committed to your success.      </p>

  <div className="cloud-timeline-container">
    {/* Timeline and Image */}
    <div className="timeline">
      
      <div className="timeline-item">
        <div className="timeline-icon">🚀</div>
        <div className="timeline-content">
          <h3>Reassuring & Practical</h3>
          <p>Customer Support That’s Always There for You.</p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-icon">🔒</div>
        <div className="timeline-content">
          <h3>Friendly & Empowering</h3>
          <p>Real People. Real Help. Right When You Need It.
</p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-icon">⚡</div>
        <div className="timeline-content">
          <h3>Outcome-Focused</h3>
          <p>Your Success Is Our Priority</p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-icon">☁️</div>
        <div className="timeline-content">
          <h3>Trust-Built & Proactive</h3>
          <p>Support You Can Rely On, Before You Even Ask.</p>
        </div>
      </div>
    </div>

    <div className="timeline-image">
      <img src="/Images/cloud-services.jpg" alt="Cloud Services" />
    </div>
  </div>
</section>










<section className="cloud-benefits">
  <div className="cloud-benefits-container">
    <h2>Why Our Customer Service Works for You?</h2>
    <p className="benefits-subtitle">
Get real help from real experts fast, friendly, and focused on your success    </p>

    <div className="benefits-grid">
      <div className="benefit-card">
        <div className="benefit-icon">⚡</div>
        <h3>High Performance</h3>
        <p>Fast, reliable, and scalable cloud solutions for your business needs.</p>
      </div>

      <div className="benefit-card">
        <div className="benefit-icon">🔒</div>
        <h3>Secure & Compliant</h3>
        <p>Protect your data with enterprise-grade security and compliance.</p>
      </div>

      <div className="benefit-card">
        <div className="benefit-icon">☁️</div>
        <h3>Flexible & Scalable</h3>
        <p>Easily scale resources up or down as your business grows.</p>
      </div>
    </div>
  </div>
</section>












<section id="cloud-services">
  <h1>Explore Our Client Services</h1>
    <div className="cards">

      <div className="card">
        <div className="card-image">
          <img src="https://i.pinimg.com/736x/09/a6/18/09a6182483da40be6d05ab61b20b5899.jpg" alt="Cloud with AWS" />
        </div>
        <div className="card-content">
          <h2>Support with Speed</h2>
          <p>We deliver responsive, 24/7 support that gets you the help you
             need  fast. From the moment you reach out, our experts are 
             working to resolve your issue with urgency and care.</p>
        </div>
      </div>

      <div className="card">
        <div className="card-image">
        <img src="https://i.pinimg.com/736x/87/10/14/871014e67bd034d06a296ef2f35634f6.jpg" alt="Cloud with AWS" />

        </div>
        <div className="card-content">
          <h2>Trusted Support</h2>
          <p>We listen first so we can offer support that fits your exact situation. Whether it’s a quick fix or complex issue, our team is here with clear answers and patient guidance.</p>
        </div>
      </div>

      <div className="card">
        <div className="card-image">
          <img src="https://i.pinimg.com/736x/21/37/0c/21370c28e2ae8c449054afcda84ffe13.jpg" alt="Cloud with Microsoft" />
        </div>
        <div className="card-content">
          <h2>Consistent Success</h2>
          <p>Our goal isn’t just to close tickets it’s to move your business forward. We focus on long-term success by offering proactive solutions, personalized support, and a human-first approach.</p>
        </div>
      </div>

    </div>
  
</section>









<section className="contact-section">
  <img src="https://i.pinimg.com/1200x/e6/cd/f6/e6cdf68ad3b4789a6e0ff556d63b9bbe.jpg" alt="Background" className="background-img" />
  <div className="contact-content">
    <h2>Contact Us for Reliable IT Services</h2>
    <p>
      We help organizations modernize their infrastructure, secure their systems,
      and drive digital transformation through tailored IT solutions.
      Let’s build your future together.
    </p>
    <a href="#contact" className="cta-button"onClick={()=>handleGetStarted("/contact")}>Know more →</a>
  </div>
</section>









    </>
  );
}

export default CustomerFirst;
