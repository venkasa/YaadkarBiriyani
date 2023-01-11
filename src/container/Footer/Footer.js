import React from "react";

import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { FooterOverlay } from "../../components";

import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext"> Contact Us</h1>
        <p className="p__opensans">
          Address: old no.62,new 35, Sivan Koil st,Kodambakkam,Chennai,Tamil
          Nadu 600024
        </p>
        <a href="tel:+91-9751315280" className="p__opensans app__footer-mob">
          9751315280
        </a>
        <a href="tel:+91-9940301727" className="p__opensans app__footer-mob">
          9940301727
        </a>
      </div>
      <div className="app__footer-links_logo">
        <p className="p__opensans">Yaad Kar Biriyani</p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook className="icons" />
          <FiTwitter className="icons" />
          <FiInstagram className="icons" />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext"> Working Hours</h1>
        <p className="p__opensans">Monday-Sunday: 11 am to 11 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">
        2022 Yaad Kar Biriyani. All Rights reserved.
      </p>
    </div>
  </div>
);

export default Footer;
