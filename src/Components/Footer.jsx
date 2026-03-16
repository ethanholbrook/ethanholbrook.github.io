import React from "react";

const Footer = ({ primaryColor, secondaryColor, ...props }) => {
  return (
    <footer
      id="site-footer"
      className="site-footer"
      style={{ background: `linear-gradient(45deg, ${primaryColor}, ${secondaryColor})` }}
      role="contentinfo"
    >
      <p className="site-footer-copy">&copy; {new Date().getFullYear()} {props.name}</p>
      <div className="site-footer-links">
        <a href={`https://github.com/${props.gitHub}`} className="site-footer-link">GitHub</a>
        <a href={`https://linkedin.com/in/${props.linkedIn}`} className="site-footer-link">LinkedIn</a>
        <a href={`https://twitter.com/${props.twitter}`} className="site-footer-link">Twitter</a>
        <a href={`https://scholar.google.com/citations?user=${props.scholar}`} className="site-footer-link">
          Scholar
        </a>
      </div>
    </footer>
  );
};

export default Footer;
