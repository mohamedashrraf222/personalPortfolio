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
          <div>
            <div className="bg-white">
              <h4>Summery about me</h4>
              <p>
                I am a Front-End Developer. I am experienced with HTML, CSS, and
                JavaScript.I can build a professional responsive landing page
                using HTML, CSS, and JavaScript. I take professional courses in
                front-end web development and constantly improve my skills in
                web development through online courses and the experience I get
                from the projects I do, besides studying at the Faculty Of
                Business at Ain Shams University in Egypt.
              </p>
            </div>
            <div className="bg-white">
              <h4>Skills</h4>
              <p>HTML , CSS , JavaScript , React , NodeJs , BootStrap</p>
            </div>
          </div>
          <img src="myImg.jpg" alt="myImg" className="myImg" />
        </div>
      </div>
    </section>
  );
}
