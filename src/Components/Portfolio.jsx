/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/oop.jpg";

const imageAltText = "beautiful flower environment";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Finance Tracker Application🎉",
    description:
      "This is finance application in which you can add, delete or edit your amount.",
    url: "https://github.com/shivamku65/Finance__TRACKER.git",
  },
  {
    title: "A Tribute Webpage",
    description:
      "A webpage in which all details of a famous scientist like their awards ,life journey,  t.",
    url: "https://github.com/shivamku65/OIBSIP-TASK-2",
  },
  {
    title: "Geek-O-Lympics-2023",
    description:
      "A application in which all olympics records are available , all countries teams and player's name in which year they should won or lose also available.",
    url: "https://github.com/shivamku65/Geek-O-Lympics-2023",
  },
  {
    title: "TO-DO LIST",
    description:
      "An application in which you can add some relevant details also perform some operations like edit or delete.",
    url: "https://github.com/shivamku65/OIBSIP-TASK-3",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
