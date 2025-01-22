import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import image from "../images/Ethan-Yose-Backpack.jpg";

// const imageAltText = "Ethan in Yosemite on a backpacking trip";

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
      className="min-height"
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
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {links.map((link, index) => (
          <Link to={link.path} style={{ textDecoration: "none" }} key={index}>
            <div
              style={{
                ...boxStyle,
                ...(hovered === index ? boxHoverStyle : {}),
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <h2>{link.label}</h2>
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

const boxStyle = {
  width: "200px",
  height: "150px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)",
  color: "white",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  transition: "transform 0.3s, box-shadow 0.3s",
  cursor: "pointer",
};

const boxHoverStyle = {
  transform: "scale(1.05)",
  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
  background: "linear-gradient(135deg, #FF6B6B 0%, #FF0000 100%)",
};

Home.defaultProps = {
  title: "",
};

Home.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Home;