import React from "react";
import myData from "../../public/data";

export default function Certificates() {
  return (
    <section className="certificates--mainContainer" id="section2">
      <div
        className="certificates--secondContainer"
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
          Cirtificates
        </h1>
      </div>
      {myData.map((data) => {
        return (
          <div className="certificates--secondContainer" key={data.name}>
            <div>
              <h1>{data.name}</h1>
              <p>{data.about}</p>
              <hr />
              <span className="bold">
                you can check the cirtifcate from &nbsp;
                <span>
                  <a href={data.link} target="_blank">
                    HERE
                  </a>
                </span>
              </span>
            </div>
            <img src={data.picture} alt="" />
          </div>
        );
      })}
    </section>
  );
}
