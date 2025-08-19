import './CyberSecurity.css';
import { useNavigate } from "react-router-dom";


function CyberSecurity() {
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
          src="/images/cyber.jpg"
        
        ></img>

        {/* Overlay content */}
        <div className="hero-overlay">
          <h1>Cyber Security</h1>
        
        </div>
      </section>











<section className="cloud-section">
  <div className="cloud-container">
    {/* Left Content */}
    <div className="cloud-content">
      <h2>Protect Your Business with Robust Cybersecurity Solutions</h2>
      <p>
       Our cybersecurity services help you safeguard your data, prevent threats, and ensure compliance 
       whether you’re protecting networks, monitoring systems, or responding to incidents
      </p>

      <ul className="cloud-features">
<li>🛡️ <span>Threat Protection  Defend your business against evolving cyber risks.</span></li>
<li>🔐 <span>Data Encryption Secure sensitive information with advanced encryption.</span></li>
<li>⚠️ <span>Real-Time Monitoring  Detect and respond to threats instantly.</span></li>

      </ul>

      <button className="cloud-btn"onClick={()=>handleGetStarted("/contact")}>Get a CyberSecurity Consultation</button>
    </div>

    {/* Right Side Image */}
    <div className="cloud-image">
      <img src="https://i.pinimg.com/736x/2e/c2/c7/2ec2c719887c58f8315137ba45ed76b0.jpg" alt="Cloud Solutions" />
    </div>
  </div>
</section>















<section className="cloud-services-timeline">
    <h2>Our Cyber Security Services</h2>
      <p className="cloud-subtitle">
Shielding Your Data with Confidence      </p>

  <div className="cloud-timeline-container">
    {/* Timeline and Image */}
    <div className="timeline">
      
      <div className="timeline-item">
        <div className="timeline-icon">🛡️</div>
        <div className="timeline-content">
          <h3>Cyber Threat Protection</h3>
          <p>Stay ahead of cyber threats with proactive monitoring 
            and advanced defense systems to keep your data safe and 
            secure.</p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-icon">🔐</div>
        <div className="timeline-content">
          <h3>Data Privacy & Compliance</h3>
          <p>Ensure your business meets industry standards and regulations 
            with robust encryption and compliance measures.</p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-icon">⚡</div>
        <div className="timeline-content">
          <h3>Incident Response & Recovery</h3>
          <p>Rapidly detect, respond to, and recover from security incidents to minimize disruption and protect your assets.</p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-icon">☁️</div>
        <div className="timeline-content">
          <h3>Secure Cloud-Native Solutions</h3>
          <p>Design, deploy, and maintain cloud-native applications with built-in security to safeguard your business operations.</p>
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
    <h2>Why Choose Our CYberSecurity Services?</h2>
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
        <div className="benefit-icon">🛡️</div>
        <h3>Flexible & Scalable</h3>
        <p>Easily scale resources up or down as your business grows.</p>
      </div>
    </div>
  </div>
</section>












<section id="cloud-services">
  <h1>Explore Our Cybersecurity Services</h1>
    <div className="cards">

      <div className="card">
        <div className="card-image">
          <img src="https://i.pinimg.com/1200x/3b/2e/e0/3b2ee05b0c76143fc40732e1c7d739bc.jpg" alt="Cloud with AWS" />
        </div>
        <div className="card-content">
          <h2>Cybersecurity with AWS</h2>
          <p>We offer advanced security solutions using AWS technology, designed to protect your data, ensure compliance, and defend against evolving cyber threats..</p>
        </div>
      </div>

      <div className="card">
        <div className="card-image">
        <img src="https://i.pinimg.com/736x/17/9c/39/179c391a03481ff955d5dcc6e32df00b.jpg" alt="Cloud with AWS" />

        </div>
        <div className="card-content">
          <h2>Cybersecurity with Google</h2>
          <p>ogether, Stackly and Google deliver robust cybersecurity services that help organizations detect, respond, and recover from cyber incidents.</p>
        </div>
      </div>

      <div className="card">
        <div className="card-image">
          <img src="https://i.pinimg.com/736x/35/f1/86/35f186369b74c1bfcedb4405ad243095.jpg" alt="Cloud with Microsoft" />
        </div>
        <div className="card-content">
          <h2>Microsoft Cybersecurity</h2>
          <p>In partnership with Microsoft, we provide comprehensive 
            security tools and strategies to protect your infrastructure, secure identities, and manage risks.</p>
        </div>
      </div>

    </div>
  
</section>









<section className="contact-section">
  <img src="https://i.pinimg.com/736x/0b/8a/48/0b8a48d4343a1eb1fd9581e1048f2f45.jpg" alt="Background" className="background-img" />
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

export default CyberSecurity;
