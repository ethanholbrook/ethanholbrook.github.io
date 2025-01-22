/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Short description that expands on your title on the Home component.
 */
const description =
  "I'm a Materials Engineering PhD candidate studying at Purdue University. I enjoy creating solutions to science and engineering problems using programming and data analysis techniques supplemented by my physics knowledge.";

/**
 * List of some of skills or technologies you work on, are learning,
 */
const skillsList = [
  "Molecular Dynamics Simulations",
  "Data Analysis",
  "Python Programming",
  "Machine Learning",
  "Materials Science",
];

const About = () => {
  return (
    <div style={{ padding: "20px", marginTop: "60px" }}>
      <img src={image} alt={imageAltText} style={{ width: "100%", height: "auto" }} />
      <h1>About Me</h1>
      <p>{description}</p>
      <h2>Skills</h2>
      <ul>
        {skillsList.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default About;