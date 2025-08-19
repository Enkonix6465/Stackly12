import './Enterprise Management.css';
import { useNavigate } from "react-router-dom";




function Enterprise () {
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
          src="Images/em.jpg"
        
        ></img>

        {/* Overlay content */}
        <div className="hero-overlay">
          <h1>Enterprise Management</h1>
        
        </div>
      </section>











<section className="cloud-section">
  <div className="cloud-container">
    {/* Left Content */}
    <div className="cloud-content">
      <h2>Smarter Enterprises with Data & AI
</h2>
      <p>
        Our enterprise solutions empower you to drive smarter decisions, optimize operations, and accelerate innovation whether you're integrating AI, managing data at scale, or automating core business processes.
      </p>

      <ul className="cloud-features">
<li>🏢 <span>Centralized Operations – Manage all business units from a unified platform.</span></li>
<li>📊 <span>Data-Driven Insights – Make informed decisions with real-time analytics.</span></li>
<li>🤖 <span>Process Automation – Streamline workflows and boost efficiency using AI.</span></li>

      </ul>

      <button className="cloud-btn"onClick={()=>handleGetStarted("/contact")}>Get a Enterprise Management Consultation</button>
    </div>

    {/* Right Side Image */}
    <div className="cloud-image">
      <img src="https://i.pinimg.com/1200x/e2/b5/ce/e2b5ce44c0295e9dbf4c219f519b9e3b.jpg" alt="Cloud Solutions" />
    </div>
  </div>
</section>















<section className="cloud-services-timeline">
    <h2>Our Enterprise Management Services</h2>
      <p className="cloud-subtitle">
Streamline Operations,Empower Decisions,Drive Enterprise Growth      </p>

  <div className="cloud-timeline-container">
    {/* Timeline and Image */}
    <div className="timeline">
      
      <div className="timeline-item">
        <div className="timeline-icon">🏢</div>
        <div className="timeline-content">
          <h3>Business Process Integration</h3>
          <p>Seamlessly connect operations, departments, and data flows across your organization to drive collaboration and efficiency.</p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-icon">🔐</div>
        <div className="timeline-content">
          <h3>Data Governance & Compliance</h3>
          <p>Implement enterprise-wide policies to ensure ecure data handling, regulatory compliance, and audit readiness..</p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-icon">📊</div>
        <div className="timeline-content">
          <h3>Performance Optimization</h3>
          <p>Improve enterprise productivity and reduce inefficiencies through data-driven insights, automation, and streamlined workflows.</p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-icon">🤖</div>
        <div className="timeline-content">
          <h3>AI-Driven Decision Support</h3>
          <p>Empower leadership with real-time analytics and intelligent recommendations powered by artificial intelligence.</p>
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
    <h2>Why Choose Our Enterprise Management Services?</h2>
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
        <div className="benefit-icon">📊</div>
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
          <img src="https://i.pinimg.com/1200x/da/16/b3/da16b3e5f39e094ba72608c899c894df.jpg" alt="Cloud with AWS" />
        </div>
        <div className="card-content">
          <h2>Enterprise Management with AWS</h2>
          <p>Leverage AWS to build agile, scalable enterprise systems. Our solutions enhance operational efficiency, centralize data governance, and automate workflows—empowering enterprises to lead with speed .</p>
        </div>
      </div>

      <div className="card">
        <div className="card-image">
        <img src="https://i.pinimg.com/1200x/fb/cc/84/fbcc84aad82ace6afd42bb16ab68705a.jpg" alt="Cloud with AWS" />

        </div>
        <div className="card-content">
          <h2>Enterprise Management with Google</h2>
          <p>Partnering with Google Cloud, we deliver intelligent enterprise platforms that unify data, streamline decision-making, and harness AI to drive productivity, optimize processes, and support innovation at scale.</p>
        </div>
      </div>

      <div className="card">
        <div className="card-image">
          <img src="https://i.pinimg.com/736x/01/53/f2/0153f26a7879185be32573c89f1ee2ae.jpg" alt="Cloud with Microsoft" />
        </div>
        <div className="card-content">
          <h2>Enterprise Management with Microsoft</h2>
          <p>With Microsoft technologies, we modernize legacy systems and implement robust enterprise solutions. From integrated business apps to AI-driven insights, we help enterprises improve performance and adaptability.</p>
        </div>
      </div>

    </div>
  
</section>









<section className="contact-section">
  <img src="https://i.pinimg.com/1200x/1a/5f/f8/1a5ff812d3896824a20ab807aec09435.jpg" alt="Background" className="background-img" />
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

export default Enterprise ;
