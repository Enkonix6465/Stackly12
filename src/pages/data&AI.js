import './data&AI.css';
import { useNavigate } from "react-router-dom";

function Data() {
  const navigate = useNavigate();
  
  const handleGetStarted = (path) => {
    navigate(path); 
  }

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <img
          className="hero-video"
          src="/images/data ai.jpg"
          alt="Data and AI"
        />
        <div className="hero-overlay">
          <h1>Data & AI</h1>
        </div>
      </section>

      {/* CLOUD SECTION */}
      <section className="cloud-section">
        <div className="cloud-container">
          <div className="cloud-content">
            <h2>Harness Data and AI to Drive Smarter Business Decisions</h2>
            <p>
              Our Data & AI solutions empower you to innovate faster, extract deeper 
              insights, and enhance security whether you’re modernizing data infrastructure, optimizing AI workflows, or building intelligent applications.
            </p>
            <ul className="cloud-features">
              <li>🧠 <span>Intelligent Insights – Unlock actionable data-driven decisions.</span></li>
              <li>🔍 <span>Advanced Security – Protect your AI models and data assets.</span></li>
              <li>⚙️ <span>Scalable AI Workflows – Automate and optimize at any scale.</span></li>
            </ul>
            <button className="cloud-btn" onClick={() => handleGetStarted("/contact")}>
              Get a Data & AI Consultation
            </button>
          </div>

          <div className="cloud-image">
            <img src="https://i.pinimg.com/736x/4d/f5/bf/4df5bf2f639f530346fd922a90a416ab.jpg" alt="Cloud Solutions" />
          </div>
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="cloud-services-timeline">
        <h2>Our Data & AI Services</h2>
        <p className="cloud-subtitle">
          From data integration to AI optimization, we provide end-to-end expertise for your data-driven transformation.
        </p>

        <div className="cloud-timeline-container">
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-icon">🔗</div>
              <div className="timeline-content">
                <h3>Data Integration</h3>
                <p>Seamless consolidation of your data sources with minimal disruption.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">🛡️</div>
              <div className="timeline-content">
                <h3>AI Security & Governance</h3>
                <p>Enterprise-grade security to protect data and meet compliance.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">🤖</div>
              <div className="timeline-content">
                <h3>AI Optimization</h3>
                <p>Reduce costs and boost performance with intelligent AI model tuning.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">🚀</div>
              <div className="timeline-content">
                <h3>AI-Native Applications</h3>
                <p>Build scalable, cloud-native AI-powered applications to drive innovation.</p>
              </div>
            </div>
          </div>

          <div className="timeline-image">
            <img src="/Images/cloud-services.jpg" alt="Cloud Services" />
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="cloud-benefits">
        <div className="cloud-benefits-container">
          <h2>Why Choose Our Data & AI Services?</h2>
          <p className="benefits-subtitle">
            Discover the key advantages that make our data and AI solutions the perfect choice for your business transformation.
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
              <div className="benefit-icon">🤖</div>
              <h3>Flexible & Scalable</h3>
              <p>Easily scale resources up or down as your business grows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE CARDS SECTION */}
      <section id="cloud-services">
        <h1>Explore Our Data & AI Services</h1>
        <div className="cards">
          <div className="card">
            <div className="card-image">
              <img src="https://i.pinimg.com/736x/be/86/14/be86142e5323788a4e0b495872d8c7ef.jpg" alt="Cloud with AWS" />
            </div>
            <div className="card-content">
              <h2>Data & AI with AWS</h2>
              <p>We offer AI-powered data solutions using AWS technology that accelerate insights, automate processes, and drive intelligent decision-making with scalable, secure infrastructure.</p>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <img src="https://i.pinimg.com/1200x/5b/59/1a/5b591ac56f20337445b413a24f4e9616.jpg" alt="Cloud with Google" />
            </div>
            <div className="card-content">
              <h2>Data & AI with Google</h2>
              <p>Together, Stackly and Google Cloud enable organizations to harness advanced AI and data analytics to innovate faster, optimize operations, and build predictive models.</p>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <img src="https://i.pinimg.com/736x/ee/d4/ba/eed4babda7074cf18caad6ca2dde972e.jpg" alt="Cloud with Microsoft" />
            </div>
            <div className="card-content">
              <h2>Data & AI with Microsoft</h2>
              <p>We collaborate with Microsoft to integrate AI and data platforms, empowering businesses to unlock actionable intelligence, enhance productivity and achieve.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA SECTION */}
      <section className="contact-section">
        <img src="https://i.pinimg.com/1200x/c1/fe/0d/c1fe0d4c306e76f59dbed880b0935f2a.jpg" alt="Background" className="background-img" />
        <div className="contact-content">
          <h2>Contact Us for Reliable IT Services</h2>
          <p>
            We help organizations modernize their infrastructure, secure their systems,
            and drive digital transformation through tailored IT solutions.
            Let’s build your future together.
          </p>
          <a href="#contact" className="cta-button" onClick={() => handleGetStarted("/contact")}>
            Know more →
          </a>
        </div>
      </section>
    </>
  );
}

export default Data;
