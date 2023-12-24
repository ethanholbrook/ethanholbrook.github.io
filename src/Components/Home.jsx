/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/Ethan-Yose-Backpack.jpg";

const imageAltText = "Ethan in Yosemite on a backpacking trip";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="" style={{ opacity: 0.90 }} />
      <div style={{ position: "absolute", top: "5rem", left: "2rem", width: "25rem" }}>
        <h1
          className="name"
          style={{ backgroundColor: "None", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          {name}
        </h1>
        <h2
          className="title"
          style={{ backgroundColor: "None", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          {title}
        </h2>{" "}
        {/* Add style for white background */}
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
