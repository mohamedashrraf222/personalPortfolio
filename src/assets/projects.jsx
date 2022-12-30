import React from "react";
import myData from "../../public/projects";

export default function Projects() {
  return (
    <section className="projects--mainContainer" id="section2">
      <div
        className="projects--secondContainer"
        style={{
          width: "50%",
          padding: "1%",
        }}
      >
        <h1
          style={{
            fontSize: "2em",
            margin: "0",
            padding: "0",
          }}
        >
          Projects
        </h1>
      </div>
      {myData.map((data) => {
        return (
          <div className="projects--secondContainer" key={data.name}>
                <img src={data.pic} alt="" />
            <div>
              <h1>{data.name}</h1>
              <p>{data.descreption}</p>
              <hr />
              <div className="linksDiv">
                <a href={data.demo} target="_blank">
                  Live demo project
                </a>
                {data.github && (
                  <a href={data.github} target="_blank">
                    Github Repository
                  </a>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
