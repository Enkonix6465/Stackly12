import React from "react";
import "./Blog1.css"; // Make sure this file exists with the styles

const Blog1 = () => {
  return (
    <section className="cybersecurity-ways">
  <div className="way">
    <h3>1. Implement Zero Trust Architecture</h3>
    <p>
      Adopt a "never trust, always verify" approach by ensuring strict identity verification for every user and device accessing your systems — whether inside or outside the network.
    </p>
  </div>

  <div className="way">
    <h3>2. Use AI-Powered Threat Detection</h3>
    <p>
      Leverage AI and machine learning to detect anomalies, automate responses to threats, and reduce the time to respond to sophisticated cyberattacks.
    </p>
  </div>

  <div className="way">
    <h3>3. Strengthen Endpoint Security</h3>
    <p>
      As remote and hybrid work continues, securing all endpoints (laptops, phones, tablets) with next-gen antivirus, EDR tools, and regular patching is essential.
    </p>
  </div>

  <div className="way">
    <h3>4. Conduct Regular Security Awareness Training</h3>
    <p>
      Human error is still a top cause of breaches. Train employees on phishing, secure password habits, and recognizing suspicious behavior to build a security-first culture.
    </p>
  </div>

  <div className="way">
    <h3>5. Ensure Regulatory Compliance and Data Privacy</h3>
    <p>
      Keep your systems aligned with regulations like GDPR, HIPAA, or CCPA. Build policies for data retention, privacy, encryption, and access control to avoid fines and data loss.
    </p>
  </div>
</section>

  );
};

export default Blog1;
