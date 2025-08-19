import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <>
      <section className="hero">
        {/* Background video */}
        <video
          className="hero-video"
          src="/images/vid.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* Overlay content */}
        <div className="hero-overlay">
          <h1>About Us</h1>
          <p>
            Empowering Digital Futures with Scalable IT Solutions.
          </p>
        </div>
      </section>

      




      <section className="about-section">
      <div className="about-content">
        <h2>Who We Are</h2>
        <p>
          We are a trusted IT services provider focused on delivering innovative and scalable digital solutions. With deep expertise in software development, AI integration, cloud transformation, and business automation, we empower organizations to achieve digital excellence. Our collaborative approach and commitment to quality drive impactful outcomes for enterprises worldwide.
        </p>

      </div>
      <div className="about-image">
        <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" alt="Team meeting" />
      </div>
    </section>









<section class="mission-section">
  <div class="mission-image">
    <img src="images/its3.jpg" alt="Mission Image" />
  </div>
  <div class="mission-content">
    <small>Our Mission</small>
    <h2>Delivering innovative IT solutions that drive business success</h2>
    <p>
      We are committed to empowering businesses through scalable and secure IT services, including software development, cloud transformation, and digital automation. Our mission is to help organizations achieve operational excellence and foster growth with cutting-edge technology.
    </p>
  </div>
</section>




<section className="vision-section">
      <div className="vision-content">
        <small>Our Vision</small>
            <h2>Shaping the Future of Businesses Through Technology</h2>

        <p>
      Our vision is to become a global leader in IT services by driving digital transformation for organizations across industries. We aim to create intelligent, agile, and sustainable solutions that enhance productivity, foster innovation, and empower businesses to thrive in a connected digital world.
        </p>

      </div>
      <div className="vision-image">
        <img src="Images/its4.jpg" alt="Vision Image" />
      </div>
    </section>







<section class="team-testimonials">
  <h2>Meet Our Expert Team</h2>
  <p class="subtitle">Trusted professionals committed to finding your dream home.</p>

  <div class="testimonial-cards">

    <div class="testimonial-card">
      <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="John Doe" class="testimonial-photo" />
      <div class="testimonial-name">John Doe</div>
      <div class="testimonial-position">Cloud Migration Specialist@Stackly</div>
      <div class="testimonial-text">
John's tech expertise and commitment made our system migration
 seamless and hassle-free. He ensured clear communication at 
 every step.   </div>
    </div>

    <div class="testimonial-card">
      <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah Smith" class="testimonial-photo" />
      <div class="testimonial-name">Sarah Smith</div>
      <div class="testimonial-position">Technical Project Manager @ stackly</div>
      <div class="testimonial-text">
Sarah took the time to truly understand our business needs and 
delivered a custom solution that fit our infrastructure perfectly.      </div>
    </div>

    <div class="testimonial-card">
      <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="Michael Brown" class="testimonial-photo" />
      <div class="testimonial-name">Michael Brown</div>
      <div class="testimonial-position">Solutions Architect @ stackly</div>
      <div class="testimonial-text">
"Michael’s tech insights and system design helped us optimize performance and cut cloud costs by 40% in a competitive SaaS market."     </div>
    </div>

  </div>
</section>









<section className="testimonial-section">
  <h2 className="testimonial-title">Client Success: Before & After</h2>

  <div className="testimonial-box-container">

    {/* Testimonial 1 */}
    <div className="testimonial-wrapper" data-aos="fade-right">
      <div className="testimonial">
        <div className="testimonial-card">
          <h3>Before:</h3>
          <p>We were constantly fighting outages, ballooning costs, and poor backend integration.</p>
        </div>
        <div className="testimonial-card after">
          <h3>After:</h3>
          <p>In just 6 weeks, the team re-architected our system. Downtime is now near zero, and the cost savings speak for themselves. Truly transformative.</p>
        </div>
      </div>
      <div className="client-info">– Derek K., Head of Engineering, FinTechPro</div>
    </div>

    {/* Testimonial 2 */}
    <div className="testimonial-wrapper" data-aos="fade-left">
      <div className="testimonial">
        <div className="testimonial-card">
          <h3>Before:</h3>
          <p>Our deployment cycles were slow, error-prone, and lacked automation, which cost us valuable time.</p>
        </div>
        <div className="testimonial-card after">
          <h3>After:</h3>
          <p>After implementing CI/CD pipelines and container orchestration, deployments became 80% faster and fully automated.</p>
        </div>
      </div>
      <div className="client-info">– Priya S., VP of Technology, CloudNova</div>
    </div>

  </div>
</section>








    </>
  );
}

export default AboutUs;
