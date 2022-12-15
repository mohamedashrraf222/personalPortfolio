import React from "react";

import myData from "../../public/data";

export default function Certificates() {
  function MyCertificates() {
    return myData.map((cirtif) => {
      return (
        <div key={cirtif.name} className="secondContainer--cirtif">
          <img
            src={cirtif.picture}
            alt=""
          />
          <div>
          <h1>{cirtif.name}</h1>
          <p>{cirtif.about}</p>
          <hr />
              <p className="myLinkBold">
                you can check the cirtifcate from &nbsp;
                <span>
                  <a href={cirtif.link} target="_blank" > 
                    HERE
                  </a>
                </span>
              </p>
          </div>
        </div>
      );
    });
  }

  return (
    <section id="section3">
      <h1 className="bg-white">certificates</h1>
      <div className="firstContainer--cirtif">
        <MyCertificates />
      </div>
    </section>
  );
}
