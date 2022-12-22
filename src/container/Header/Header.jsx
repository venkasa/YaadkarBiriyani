import React from "react";
import { SubHeading } from "../../components";

import { images } from "../../constants";

import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="Home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key To Fine Dining</h1>
      <p className="p__opensans " style={{ margin: "2rem 0" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
        dignissimos aliquid aperiam. Deserunt quidem, beatae cum obcaecati
        accusantium, magni culpa doloribus voluptatem error non repudiandae nisi
        corrupti ipsa animi. Exercitationem.
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
