import React from "react";

const Footer = ({ primaryColor, secondaryColor, ...props }) => {
  return (
    <footer
      style={{
        background: `linear-gradient(45deg, ${primaryColor}, ${secondaryColor})`,
        color: "white",
        padding: "1rem",
        textAlign: "center",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <p>&copy; {new Date().getFullYear()} {props.name}. All rights reserved.</p>
      <div>
        <a href={`https://github.com/${props.gitHub}`} style={{ color: "white", margin: "0 10px" }}>GitHub</a>
        <a href={`https://linkedin.com/in/${props.linkedIn}`} style={{ color: "white", margin: "0 10px" }}>LinkedIn</a>
        <a href={`https://twitter.com/${props.twitter}`} style={{ color: "white", margin: "0 10px" }}>Twitter</a>
        <a href={`https://scholar.google.com/citations?user=${props.scholar}`} style={{ color: "white", margin: "0 10px" }}>Scholar</a>
      </div>
    </footer>
  );
};

export default Footer;