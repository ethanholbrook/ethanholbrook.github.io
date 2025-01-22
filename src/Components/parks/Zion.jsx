import React from "react";
import zionImage from "/src/images/nps/angel_landing_front.jpg"; // Adjust path as needed

const Zion = () => {
  return (
    <div style={{ padding: "20px", marginTop: "60px" }}>
      <h1>Zion National Park</h1>
      <img
        src={zionImage}
        alt="Zion National Park"
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

export default Zion;