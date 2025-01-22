import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "rgba(255,255,255,0.75)",
        padding: "1rem 2rem",
        top: 0,
        width: "100%",
        zIndex: 10,
        boxSizing: "border-box", // Ensure padding is included in the width
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>Ethan Holbrook</div>
        <div style={{ fontSize: "1rem" }}>Atomistic Modeler & Software Developer</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        <div style={{ height: "100%", width: "3px", backgroundColor: "black", margin: "0 1rem" }}></div>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>Home</Link>
        <Link to="/about" style={{ textDecoration: "none", color: "black" }}>About</Link>
      </div>
    </div>
  );
};

export default Header;