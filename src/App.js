import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Cloud from "./pages/Cloud";
import CustomerFirst from "./pages/CustomerFirst";
import CyberSecurity from "./pages/CyberSecurity";
import DataAI from "./pages/data&AI";
import EnterpriseManagement from "./pages/Enterprise Management";
import IntelligentIndustry from "./pages/IntelligentIndustry";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";
import AdminDashboard from "./pages/AdminDashboard";
import Blog1 from "./pages/Blog1";
import Blog2 from "./pages/Blog2";
import Blog3 from "./pages/Blog3";

// Updated ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollContainer = document.querySelector(".app-content");
    if (scrollContainer) {
      scrollContainer.scrollTop = 0;
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

const AppLayout = ({ toggleTheme }) => {
  const location = useLocation();
  const showHeaderAndFooter = location.pathname !== "/welcome";

  return (
    <>
      {showHeaderAndFooter && <Header toggleTheme={toggleTheme} />}
      <ScrollToTop />
      <div
        className="app-content"
        style={{
          paddingTop: showHeaderAndFooter ? "70px" : "0",
          minHeight: "calc(100vh - 70px)",
          overflowY: "auto",    // enable vertical scroll on this container
        }}
      >
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home2" element={<Home2 />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/cloud" element={<Cloud />} />
          <Route path="/customer-first" element={<CustomerFirst />} />
          <Route path="/cybersecurity" element={<CyberSecurity />} />
          <Route path="/data-ai" element={<DataAI />} />
          <Route path="/enterprise-management" element={<EnterpriseManagement />} />
          <Route path="/intelligent-industry" element={<IntelligentIndustry />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/blog1" element={<Blog1 />} />
          <Route path="/blog2" element={<Blog2 />} />
          <Route path="/blog3" element={<Blog3 />} />
          <Route path="*" element={<Navigate to="/welcome" replace />} />
        </Routes>
      </div>
      {showHeaderAndFooter && <Footer />}
    </>
  );
};

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark((prev) => !prev);

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDark);
  }, [isDark]);

  return (
    <Router>
      <AppLayout toggleTheme={toggleTheme} />
    </Router>
  );
}

export default App;
