import React from "react";
import "./Blog3.css";

const Blog3 = () => {
  return (
    <section className="ai-data-section">
      <div className="ai-data-card">
        <h2 className="ai-data-title">🧠 AI + Data: Transforming Business Intelligence</h2>

        <div className="ai-point" data-aos="fade-up">
          <h3>📊 1. Real-Time Decision-Making</h3>
          <p>
            AI-powered data platforms enable instant access to actionable insights, allowing businesses to make timely and informed decisions.
          </p>
        </div>

        <div className="ai-point" data-aos="fade-up" data-aos-delay="100">
          <h3>📈 2. Predictive Analytics</h3>
          <p>
            Machine learning models forecast trends and behaviors before they happen, improving forecasting and risk mitigation.
          </p>
        </div>

        <div className="ai-point" data-aos="fade-up" data-aos-delay="200">
          <h3>📉 3. Smarter Dashboards</h3>
          <p>
            AI-integrated dashboards highlight the most relevant KPIs and adapt dynamically based on business goals.
          </p>
        </div>

        <div className="ai-point" data-aos="fade-up" data-aos-delay="300">
          <h3>⚙️ 4. Automated Data Pipelines</h3>
          <p>
            Data is collected, cleaned, and transformed automatically, reducing manual errors and speeding up analysis.
          </p>
        </div>

        <div className="ai-point" data-aos="fade-up" data-aos-delay="400">
          <h3>🎯 5. AI-Powered Personalization</h3>
          <p>
            From marketing to product recommendations, AI tailors user experiences by analyzing behavior and preferences.
          </p>
        </div>

        <a href="/data-ai" className="ai-read-more">
          Read more →
        </a>
      </div>
    </section>
  );
};

export default Blog3;
