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

      <a
        type="button"
        style={{ marginTop: "2rem" }}
        className="custom__button"
        target="_blank"
        href="https://www.google.com/maps/place/13%C2%B003'13.9%22N+80%C2%B013'12.5%22E/@13.0538553,80.2195778,19z/data=!3m1!4b1!4m6!3m5!1s0x0:0x1b0cb11758b638fc!7e2!8m2!3d13.0538537!4d80.2201248"
        rel="noreferrer"
      >
        Visit Us
      </a>
    </div>
    <div className="app__wrapper_img">
      <img src={chicken65} alt="chicken65" />
    </div>
  </div>
);

export default FindUs;
