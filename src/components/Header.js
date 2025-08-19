import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Header.css";

const Header = ({ toggleTheme, isDark }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [initials, setInitials] = useState("");
  const [avatarDropdownOpen, setAvatarDropdownOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const avatarRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  // Get user initials from localStorage
  const getUserInitials = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const loggedInEmail = localStorage.getItem("loggedInUserEmail");
    const currentUser = users.find(user => user.email === loggedInEmail);

    if (currentUser) {
      const firstInitial = currentUser.firstName?.trim().charAt(0).toUpperCase() || "";
      const lastInitial = currentUser.lastName?.trim().charAt(0).toUpperCase() || "";
      return firstInitial + lastInitial;
    }
    return "";
  };

  useEffect(() => {
    setInitials(getUserInitials());
    const handleStorage = () => setInitials(getUserInitials());
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [location.pathname]);

  // Close avatar dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (avatarRef.current && !avatarRef.current.contains(e.target)) {
        setAvatarDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile nav on large screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && mobileNavOpen) {
        setMobileNavOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileNavOpen]);

  const toggleDropdown = (menu) => {
    setActiveDropdown(prev => (prev === menu ? null : menu));
  };

  const handleLinkClick = () => {
    setActiveDropdown(null);
    setMobileNavOpen(false);
  };

  const handleMainClick = (page) => {
    navigate(`/${page}`);
    setActiveDropdown(null);
    setMobileNavOpen(false);
  };

  const getActiveLink = () => {
    if (location.pathname === "/" || location.pathname === "/home2") return "home";
    if (location.pathname === "/about") return "about";
    if (
      [
        "/services",
        "/cloud",
        "/customer-first",
        "/cybersecurity",
        "/data-ai",
        "/enterprise-management",
        "/intelligent-industry",
      ].includes(location.pathname)
    ) return "services";
    if (location.pathname === "/blog") return "blog";
    if (location.pathname === "/contact") return "contact";
    return "";
  };

  const activeLink = getActiveLink();

  const toggleAvatarDropdown = () => {
    setAvatarDropdownOpen(prev => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUserEmail");
    setAvatarDropdownOpen(false);
    navigate("/login");
  };

  const toggleMobileNav = () => {
    setMobileNavOpen(prev => !prev);
  };

  return (
    <header className="header">
      <nav className="logo">
        <Link to="/home">
          <img src="/Images/stackly.png" alt="Logo" />
        </Link>
      </nav>

      <button
        className={`hamburger ${mobileNavOpen ? "open" : ""}`}
        aria-label="Toggle menu"
        onClick={toggleMobileNav}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <nav className={`nav ${mobileNavOpen ? "open" : ""}`}>
        <div className="nav-item">
          <span
            className={`nav-link ${activeLink === "home" ? "active" : ""}`}
            onClick={() => handleMainClick("home")}
          >
            Home
          </span>
          <span
            className={`arrow ${activeDropdown === "home" ? "open" : ""}`}
            onClick={() => toggleDropdown("home")}
          >
            ▼
          </span>
          {activeDropdown === "home" && (
            <div className="dropdown">
              <Link to="/home" onClick={handleLinkClick}>Home</Link>
              <Link to="/home2" onClick={handleLinkClick}>Home 2</Link>
            </div>
          )}
        </div>

        <Link
          to="/about"
          className={`nav-link ${activeLink === "about" ? "active" : ""}`}
          onClick={handleLinkClick}
        >
          About Us
        </Link>

        <div className="nav-item">
          <span
            className={`nav-link ${activeLink === "services" ? "active" : ""}`}
            onClick={() => handleMainClick("services")}
          >
            Services
          </span>
          <span
            className={`arrow ${activeDropdown === "services" ? "open" : ""}`}
            onClick={() => toggleDropdown("services")}
          >
            ▼
          </span>
          {activeDropdown === "services" && (
            <div className="dropdown">
              <Link to="/cloud" onClick={handleLinkClick}>Cloud</Link>
              <Link to="/customer-first" onClick={handleLinkClick}>Customer First</Link>
              <Link to="/cybersecurity" onClick={handleLinkClick}>Cybersecurity</Link>
              <Link to="/data-ai" onClick={handleLinkClick}>Data & AI</Link>
              <Link to="/enterprise-management" onClick={handleLinkClick}>Enterprise Management</Link>
              <Link to="/intelligent-industry" onClick={handleLinkClick}>Intelligent Industry</Link>
            </div>
          )}
        </div>

        <Link
          to="/blog"
          className={`nav-link ${activeLink === "blog" ? "active" : ""}`}
          onClick={handleLinkClick}
        >
          Blog
        </Link>

        <Link
          to="/contact"
          className={`nav-link ${activeLink === "contact" ? "active" : ""}`}
          onClick={handleLinkClick}
        >
          Contact Us
        </Link>
      </nav>

      <div className="rightSection">
        <button className="themeToggle" onClick={toggleTheme}>
          {isDark ? "🌙" : "🌞"}
        </button>

        <div className="avatarContainer" ref={avatarRef} style={{ position: "relative" }}>
          <div
            className="avatarCircle"
            title="Your initials"
            onClick={toggleAvatarDropdown}
            style={{ cursor: "pointer" }}
          >
            {initials || "AD"}
          </div>

          {avatarDropdownOpen && (
            <div
              className="avatarDropdown"
              style={{
                position: "absolute",
                top: "calc(100% + 8px)",
                right: 0,
                backgroundColor: "#fff",
                border: "1px solid #ddd",
                borderRadius: "6px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                zIndex: 1000,
                minWidth: "120px",
              }}
            >
              <button
                onClick={handleLogout}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "none",
                  background: "none",
                  textAlign: "left",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
