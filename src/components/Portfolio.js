import React from "react";
import Project from "./Project";

const projects = [
  {
    title: "Now We're Cooking",
    languages: "html, css, javascript, node, express, mysql",
    image: "img/now-were-cooking.png",
    description:
      "A place for people who are interested in food can come together and show their recipies and have them put in categories based on the protein groups you are looking for.",
    repo: "https://github.com/claire-sky/Now_Were_Cooking",
    live: "https://fathomless-earth-96785.herokuapp.com/",
  },
  {
    title: "First Portfolio",
    languages: "html, css",
    image: "img/portfolio.png",
    description:
      "This is my personal portfolio that showcases what projects that I have worked on so far. I currently have 2 full projects completed and 1 project that is still in the works for this portfolio.",
    repo: "https://github.com/brandonsauer8/brandon-portfolio",
    live: "https://brandonsauer8.github.io/brandon-portfolio/",
  },
  {
    title: "Stock Tracker",
    languages: "html, css, javascript",
    image: "img/stock-tracker.png",
    description:
      "A website offers real time updates to various company stock information and news based on the user's input.",
    repo: "https://github.com/brandonsauer8/stock-tracker",
    live: "https://brandonsauer8.github.io/stock-tracker/",
  },
  {
    title: "Coding Quiz",
    languages: "html, css, javascript",
    image: "img/coding-quiz.png",
    description:
      "This is a Javascript quiz that will test how much you know about Javascript with 5 questions. You have 1 minutes to answer all 5 questions.",
    repo: "https://github.com/brandonsauer8/coding-quiz",
    live: "https://brandonsauer8.github.io/coding-quiz/",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-large has-text-white">Portfolio</p>

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;