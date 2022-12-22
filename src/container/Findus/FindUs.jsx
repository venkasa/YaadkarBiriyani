import React from "react";

// import { subHeading } from "../../components";
// import { images } from "../../constants";
import chicken65 from "../../assets/chicken65.jpg";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <subHeading title="contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Address
      </h1>

      <div className="app__wrapper-content">
        <p className="p__opensans">
          Address: old no.62,new 35, Sivan Koil st,Kodambakkam,Chennai,Tamil
          Nadu 600024
        </p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          Opening Hours
        </p>
        <p className="p__opensans">Mon-Sun: 11am - 11pm</p>
      </div>

      <button
        type="button"
        className="custom__button"
        style={{ marginTop: "2rem" }}
      >
        Visit Us
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={chicken65} alt="chicken65" />
    </div>
  </div>
);

export default FindUs;
