import React from "react";
import "../index.css";

export default function About(params) {
  return (
    <section className="about--mainContainer" id="section1">
      <div className="about--secondContainer">
        <div className="about--center bg-white">
          <h3>Hi, I am Mohamed Ashraf</h3>
          <h1>Welcome to my personal page</h1>
        </div>
        <div className="about--thirdContainer">
          <div className="summeryDiv--container">
            <div className="bg-white">
              <h4>Summery about me</h4>
              <p>
                Junior Front-End Developer with proven skills in building
                professional responsive web project applications with HTML, CSS,
                and JavaScript. Proficient with CSS and JS Frameworks and
                libraries like Reactjs and jquery. Constantly improve my skills
                in web development through online courses and projects I build
                for practice. I write effective algorithms, break a problem down
                into smaller parts and think carefully about how to solve each
                part with code. Have strong knowledge of the fundamentals of
                algorithmic thinking and principles of object-oriented
                programming. Always aim to learn new skills to make a promising
                career.
              </p>
            </div>
            <div className="bg-white">
              <h4>Skills</h4>
              <p>HTML , CSS , JavaScript , React , NodeJs</p>
            </div>
          </div>
          <img src="myImg.jpg" alt="myImg" className="myImg" />
        </div>
      </div>
    </section>
  );
}
