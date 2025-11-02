import React from "react";
const yosemiteImage = new URL("../../images/nps/yose_falls.jpg", import.meta.url).href;

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