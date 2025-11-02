// filepath: /workspaces/ethanholbrook.github.io/src/Components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      id="site-header"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#216db4ff",              // ← solid instead of translucent
        color: "#000000ff",                      // ensure text is readable
        padding: "1rem 2rem",
        boxSizing: "border-box",
        zIndex: 1000,
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        borderBottom: "1px solid rgba(0,0,0,0.06)", // subtle separator
      }}
      role="banner"
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>Ethan Holbrook</div>
        <div style={{ fontSize: "1rem" }}>Atomistic Modeler & Software Developer</div>
      </div>
      <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }} aria-label="Primary">
        <div style={{ height: "100%", width: "3px", backgroundColor: "black", margin: "0 1rem" }} />
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>Home</Link>
        <Link to="/about" style={{ textDecoration: "none", color: "black" }}>About</Link>
      </nav>
    </div>
  );
};

export default Header;
