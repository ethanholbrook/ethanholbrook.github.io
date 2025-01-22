// filepath: /workspaces/ethanholbrook.github.io/src/Components/Yosemite.jsx
import React from "react";
import yosemiteImage from "/src/images/nps/yose_falls.jpg"; // Adjust path as needed

const Yosemite = () => {
  return (
    <div style={{ padding: "20px", marginTop: "60px" }}>
      <h1>Yosemite National Park</h1>
      <img src={yosemiteImage} alt="Yosemite National Park" style={{ width: "100%" }} />
    </div>
  );
};

export default Yosemite;