import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// A) src import:
const bg = new URL("../images/Ethan-Yose-Backpack.jpg", import.meta.url).href;
// B) public path:
// const bg = "/images/Ethan-Yose-Backpack.jpg";

const Home = () => {
  const [hovered, setHovered] = useState(null);
  return (
    <section
      id="home"
      style={{
        minHeight: "calc(100vh - var(--header-h, 80px) - var(--footer-h, 56px))",
        display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
        textAlign: "center",
        backgroundImage: bg ? `url(${bg})` : "linear-gradient(135deg,#111,#333)",
        backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat",
        position: "relative", padding: 20,
      }}
    >
      <div
        aria-hidden="true"
        style={{ position:"absolute", inset:0, background:"rgba(0,0,0,0.18)", pointerEvents:"none" }}
      />
      <div style={{ position:"relative", display:"flex", flexDirection:"column", gap:20, width:"100%", maxWidth:400 }}>
        {links.map((link, i) => (
          <Link to={link.path} style={{ textDecoration: "none" }} key={i}>
            <div
              style={{ ...buttonStyle, ...(hovered === i ? buttonHoverStyle : {}) }}
              onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}
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
  { path: "/resume", label: "Resume" },
  { path: "/menu", label: "Menu" },
  { path: "/national-parks", label: "National Parks" },
  { path: "/dashboard", label: "Energy Use" },
];

const buttonStyle = { display:"flex", justifyContent:"center", alignItems:"center", height:50,
  border:"2px solid #fff", borderRadius:25, backgroundColor:"rgba(0,0,0,.6)",
  color:"#fff", fontSize:18, fontWeight:"bold", letterSpacing:1, transition:"all .3s", cursor:"pointer" };
const buttonHoverStyle = { background:"#fff", color:"#000", transform:"scale(1.1)", boxShadow:"0 4px 10px rgba(0,0,0,.4)" };

Home.defaultProps = { title: "" };
Home.propTypes = { title: PropTypes.string.isRequired };
export default Home;
