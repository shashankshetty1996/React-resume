import React from "react";

import { SectionTitle } from "../../common";
import { CERTIFICATION, CERTIFICATION_PROVIDERS } from "../../constants";

import sumoLogo from "../../assets/sumologic.icon.jpeg";
import udemyLogo from "../../assets/udemy.icon.jpeg";
import dellLogo from "../../assets/dell.icon.jpeg";

import "./Certification.scss";

const imageLogoMap = {
  [CERTIFICATION_PROVIDERS.SUMO_LOGIC]: sumoLogo,
  [CERTIFICATION_PROVIDERS.UDEMY]: udemyLogo,
  [CERTIFICATION_PROVIDERS.DELL]: dellLogo,
};

const Certification = (props) => {
  return (
    <section id="certification" className="my-2">
      <SectionTitle title="Certification" />
      <div className="certification">
        {CERTIFICATION.map((item, index) => {
          const imgSrc = imageLogoMap[item.provider];
          return (
            <div className="item" key={index}>
              <img
                src={imgSrc}
                alt={item.provider}
                width="48"
                height="48"
                loading="lazy"
              />
              <div className="certification-content">
                <h4 className="certification-title">{item.title}</h4>
                <p>
                  Issued on: {item.issued_on}{" "}
                  {item.expires_on && `- Expires on ${item.expires_on}`}
                </p>
                {/* <p>Credential ID: {item.credential_id}</p> */}
              </div>
            </div>
          );
        })}
        `
      </div>
    </section>
  );
};

export default Certification;
