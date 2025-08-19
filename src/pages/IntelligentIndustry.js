import './IntelligentIndustry.css';
import { useNavigate } from "react-router-dom";


function Intelligent() {
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
          src="/images/iis.jpg"
        
        ></img>

        {/* Overlay content */}
        <div className="hero-overlay">
          <h1>intelligent Industry</h1>
        
        </div>
      </section>











<section className="cloud-section">
  <div className="cloud-container">
    {/* Left Content */}
    <div className="cloud-content">
      <h2>Drive Growth with Intelligent Industry Solutions</h2>
      <p>
       Leverage advanced technologies to drive smart manufacturing, optimize operations, and accelerate innovation  whether you're modernizing production, enhancing supply chains, or enabling predictive maintenance.
      </p>

      <ul className="cloud-features">
        <li>🏭 <span>Smart Operations – Increase efficiency with real-time monitoring and automation.</span></li>
        <li>📦 <span>Connected Supply Chains – Improve agility and visibility from sourcing to delivery.</span></li>
        <li>🔧 <span>Predictive Maintenance – Minimize downtime with AI-driven equipment insights.</span></li>
      </ul>

      <button className="cloud-btn"onClick={()=>handleGetStarted("/contact")}>Get an Intelligent Industry Consultation</button>
    </div>

    {/* Right Side Image */}
    <div className="cloud-image">
      <img src="https://i.pinimg.com/736x/87/b6/18/87b618dc3b6387f81b0f9c800495e197.jpg" alt="Cloud Solutions" />
    </div>
  </div>
</section>















<section className="cloud-services-timeline">
    <h2>Our Intelligent Industry Services</h2>
      <p className="cloud-subtitle">
End-to-end intelligent industry solutions from integration to optimization.      </p>

  <div className="cloud-timeline-container">
    {/* Timeline and Image */}
    <div className="timeline">
      
      <div className="timeline-item">
        <div className="timeline-icon">⚙️</div>
        <div className="timeline-content">
          <h3>Intelligent Industry Integration</h3>
          <p>Seamless integration of smart systems with minimal disruption.</p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-icon">🔒</div>
        <div className="timeline-content">
          <h3>Data Security</h3>
          <p>Robust, enterprise-grade security to protect industrial data and ensure compliance..</p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-icon">⚡</div>
        <div className="timeline-content">
          <h3>Process Optimization</h3>
          <p>Enhance efficiency and reduce costs with intelligent automation strategies.</p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-icon">📱</div>
        <div className="timeline-content">
          <h3>Smart Applications</h3>
          <p>Develop, deploy, and scale industry-specific smart applications.</p>
        </div>
      </div>
    </div>

    <div className="timeline-image">
      <img src="https://i.pinimg.com/1200x/c6/0a/ef/c60aeff242d5fbb2508ebb6c2f3eb5d5.jpg" alt="Cloud Services" />
    </div>
  </div>
</section>










<section className="cloud-benefits">
  <div className="cloud-benefits-container">
    <h2>Why Choose Our Intelligent Industry Services?</h2>
    <p className="benefits-subtitle">
Discover the key benefits that make our intelligent industry solutions the smart choice.    </p>

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
  <h1>Explore Our Intelligent Industry Services</h1>
    <div className="cards">

      <div className="card">
        <div className="card-image">
          <img src="https://i.pinimg.com/1200x/73/e7/48/73e74835d46358a5d7933f903949c0b0.jpg" alt="Cloud with AWS" />
        </div>
        <div className="card-content">
          <h2>Intelligent Industry with AWS</h2>
          <p>We provide cutting-edge solutions using AWS to drive smart automation, predictive maintenance, and real-time data analytics that optimize industrial operations.</p>
        </div>
      </div>

      <div className="card">
        <div className="card-image">
        <img src="https://i.pinimg.com/1200x/fc/2c/93/fc2c93d19dffca501041254a85368583.jpg" alt="Cloud with AWS" />

        </div>
        <div className="card-content">
          <h2>Intelligent Industry with Google</h2>
          <p>Together, Stackly and Google Cloud enable industries to harness AI and machine learning for enhanced decision-making, process automation, and innovation.</p>
        </div>
      </div>

      <div className="card">
        <div className="card-image">
          <img src="https://i.pinimg.com/736x/b2/1f/91/b21f91e3a251f9cee8d4445463891384.jpg" alt="Cloud with Microsoft" />
        </div>
        <div className="card-content">
          <h2>Intelligent Industry with Microsoft</h2>
          <p>In partnership with Microsoft, we help industries implement IoT, AI, and cloud technologies to build connected factories and accelerate digital transformation.</p>
        </div>
      </div>

    </div>
  
</section>









<section className="contact-section">
  <img src="https://i.pinimg.com/736x/79/e8/87/79e887acf66a1b3ed1f3a3ac657812cc.jpg" alt="Background" className="background-img" />
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

export default Intelligent;
