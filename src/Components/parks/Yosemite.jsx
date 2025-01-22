import React from "react";
import yosemiteImage from "/src/images/nps/yose_falls.jpg"; // Adjust path as needed

const Yosemite = () => {
  return (
    <div style={{ padding: "20px", marginTop: "60px" }}>
      <h1>Yosemite National Park</h1>
      <img
        src={yosemiteImage}
        alt="Yosemite National Park"
        style={{
          width: "100%",
          maxWidth: "600px", // Set a max width for larger screens
          height: "auto",
          display: "block",
          margin: "0 auto", // Center the image
        }}
      />
    </div>
  );
};

export default Yosemite;