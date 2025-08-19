import './Cloud.css';
import { useNavigate } from "react-router-dom";


function Cloud() {
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
          src="/images/cloud.jpg"
        
        ></img>

        {/* Overlay content */}
        <div className="hero-overlay">
          <h1>Cloud</h1>
        
        </div>
      </section>











<section className="cloud-section">
  <div className="cloud-container">
    {/* Left Content */}
    <div className="cloud-content">
      <h2>Empower Your Business with Scalable Cloud Solutions</h2>
      <p>
        Our cloud services help you innovate faster, reduce costs, and stay
        secure — whether you’re migrating, optimizing, or building
        cloud-native applications.
      </p>

      <ul className="cloud-features">
        <li>☁️ <span>Seamless Migration – Move workloads with minimal disruption.</span></li>
        <li>🔒 <span>Enterprise-Grade Security – Built-in compliance & monitoring.</span></li>
        <li>⚡ <span>Scalable Performance – Auto-adjust resources to demand.</span></li>
      </ul>

      <button className="cloud-btn"onClick={()=>handleGetStarted("/contact")}>Get a Cloud Consultation</button>
    </div>

    {/* Right Side Image */}
    <div className="cloud-image">
      <img src="/Images/cloud solutions.jpg" alt="Cloud Solutions" />
    </div>
  </div>
</section>















<section className="cloud-services-timeline">
    <h2>Our Cloud Services</h2>
      <p className="cloud-subtitle">
        From migration to optimization, we provide end-to-end cloud expertise.
      </p>

  <div className="cloud-timeline-container">
    {/* Timeline and Image */}
    <div className="timeline">
      
      <div className="timeline-item">
        <div className="timeline-icon">🚀</div>
        <div className="timeline-content">
          <h3>Cloud Migration</h3>
          <p>Seamless transfer of your workloads with minimal downtime.</p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-icon">🔒</div>
        <div className="timeline-content">
          <h3>Cloud Security</h3>
          <p>Enterprise-grade security to protect data and meet compliance.</p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-icon">⚡</div>
        <div className="timeline-content">
          <h3>Optimization</h3>
          <p>Reduce costs and improve performance with smart cloud strategies.</p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-icon">☁️</div>
        <div className="timeline-content">
          <h3>Cloud-Native Apps</h3>
          <p>Build, deploy, and scale apps designed for the cloud.</p>
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
    <h2>Why Choose Our Cloud Services?</h2>
    <p className="benefits-subtitle">
      Discover the key advantages that make our cloud solutions the perfect choice.
    </p>

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
  <h1>Explore Our Cloud Services</h1>
    <div className="cards">

      <div className="card">
        <div className="card-image">
          <img src="https://i.pinimg.com/736x/23/11/2e/23112ee11a68a60344adad9250589d5b.jpg" alt="Cloud with AWS" />
        </div>
        <div className="card-content">
          <h2>Cloud with AWS</h2>
          <p>We have developed a range of market ready solutions featuring
             AWS technology that focuses on a cloud-first strategy that 
             enables growth, innovation, cost-efficiency, and business model
              disruption.</p>
        </div>
      </div>

      <div className="card">
        <div className="card-image">
        <img src="https://i.pinimg.com/1200x/49/16/c0/4916c031725e347a74d9c7c307cc2756.jpg" alt="Cloud with AWS" />

        </div>
        <div className="card-content">
          <h2>Cloud with Google</h2>
          <p>Together, Stackly and AWS empower organizations to adapt to a rapidly evolving world, drive innovation for future growth, navigate economic challenges, and reinvent their business models.</p>
        </div>
      </div>

      <div className="card">
        <div className="card-image">
          <img src="https://i.pinimg.com/736x/60/7e/dd/607edd18f483e204cc8693ce36e26975.jpg" alt="Cloud with Microsoft" />
        </div>
        <div className="card-content">
          <h2>Cloud with Microsoft</h2>
          <p>We work in partnership with Microsoft to help companies 
            harness cloud technologies, turbo-charge them, and point 
            them at individual business goals. So that organizations can go 
            further and get there faster.</p>
        </div>
      </div>

    </div>
  
</section>









<section className="contact-section">
  <img src="https://i.pinimg.com/1200x/85/1b/74/851b74e4e5e8f285409f567c86a377dc.jpg" alt="Background" className="background-img" />
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

export default Cloud;
