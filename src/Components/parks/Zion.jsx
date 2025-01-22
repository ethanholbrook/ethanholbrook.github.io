// filepath: /workspaces/ethanholbrook.github.io/src/Components/Zion.jsx
import React from "react";
import zionImage from "../../images/nps/angel_landing_front.jpg"; // Adjust path as needed

const Zion = () => {
  return (
    <div style={{ padding: "20px", marginTop: "60px" }}>
      <h1>Zion National Park</h1>
      <img src={zionImage} alt="Zion National Park" style={{ width: "100%" }} />
    </div>
  );
};

export default Zion;