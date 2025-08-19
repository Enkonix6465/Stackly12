import React from "react";
import "./Blog2.css"; // Optional CSS for styles

const Blog2 = () => {
  return (
    <section className="cloud-native-section">
      <div className="cloud-native-card">
        <h2 className="cloud-native-title">
          <span role="img" aria-label="cloud">☁️</span> Why Cloud-Native Is the Future of Software
        </h2>

        {/* Section 1 */}
        <div className="cloud-native-point">
          <h3>🚀 1. Speed & Agility</h3>
          <p>
            Cloud-native architectures enable teams to rapidly build, test, and deploy applications.
            With microservices, CI/CD pipelines, and containers, updates can happen in hours—not weeks.
          </p>
          <strong>Benefit:</strong> Faster time-to-market and real-time innovation.
        </div>

        {/* Section 2 */}
        <div className="cloud-native-point">
          <h3>📈 2. Scalability on Demand</h3>
          <p>
            Cloud-native systems scale automatically based on demand, whether you have 100 or 10 million users.
          </p>
          <strong>Benefit:</strong> Elastic infrastructure with lower operational overhead.
        </div>

        {/* Section 3 */}
        <div className="cloud-native-point">
          <h3>💸 3. Cost Efficiency</h3>
          <p>
            With pay-as-you-go models, cloud-native apps use only the resources they need—no more overprovisioning.
          </p>
          <strong>Benefit:</strong> Reduced infrastructure costs and better resource management.
        </div>

        {/* Section 4 */}
        <div className="cloud-native-point">
          <h3>🔒 4. Built-In Resilience & Security</h3>
          <p>
            Cloud-native platforms support fault-tolerant, secure systems that keep your app running, even if one service fails.
          </p>
          <strong>Benefit:</strong> High availability, disaster recovery, and robust security.
        </div>

        {/* Section 5 */}
        <div className="cloud-native-point">
          <h3>🌍 5. Future-Proofing & Innovation</h3>
          <p>
            Cloud-native integrates easily with AI, IoT, and edge computing—helping your software evolve with technology.
          </p>
          <strong>Benefit:</strong> Long-term scalability and adaptability.
        </div>

        {/* CTA Button */}
        <a href="/cloud" className="cloud-native-link">
          Explore Cloud-Native Solutions →
        </a>
      </div>
    </section>
  );
};

export default Blog2;
