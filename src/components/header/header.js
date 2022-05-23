import React from "react";
import { CV, ME } from "../../assets";
import { HeaderSocials, CTA } from "../../components";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div id="home" className="container header_container">
        <h5>Olá eu sou</h5>
        <h1>Vinicius Teodoro</h1>
        <h5 className="text-light"> Fullstack Developer</h5>
        <CTA cv={CV} />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a className="scroll_down" href="#contact">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
