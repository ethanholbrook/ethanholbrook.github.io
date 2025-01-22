import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import image from "../images/Ethan-Yose-Backpack.jpg";

const Home = () => {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <section
      id="home"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "100vh", // Full height viewport
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.9,
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        {links.map((link, index) => (
          <Link to={link.path} style={{ textDecoration: "none" }} key={index}>
            <div
              style={{
                ...buttonStyle,
                ...(hovered === index ? buttonHoverStyle : {}),
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {link.label}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

const links = [
  { path: "/dashboard", label: "Dashboard" },
  { path: "/menu", label: "Menu" },
  { path: "/national-parks", label: "National Parks" },
  { path: "/resume", label: "Resume" },
];

// Sleek button styles
const buttonStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "50px",
  border: "2px solid #ffffff",
  borderRadius: "25px",
  backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent black
  color: "#ffffff",
  fontSize: "18px",
  fontWeight: "bold",
  letterSpacing: "1px",
  transition: "all 0.3s ease",
  cursor: "pointer",
  textAlign: "center",
};

// Hover styles for the buttons
const buttonHoverStyle = {
  backgroundColor: "#ffffff", // Switch to white
  color: "#000000", // Text turns black
  transform: "scale(1.1)", // Slight enlargement
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)", // Shadow for depth
};

Home.defaultProps = {
  title: "",
};

Home.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Home;
