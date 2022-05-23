import React from "react";
import "./footer.css";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer_logo">
        Vinicius Teodoro
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home"> Home</a>
        </li>

        <li>
          <a href="#about"> Sobre</a>
        </li>

        <li>
          <a href="#experience"> Experiência</a>
        </li>

        <li>
          <a href="#portfolio"> Portfolio</a>
        </li>

        <li>
          <a href="#contact"> Contato</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.instagram.com/viniciusteodor0/">
          <FiInstagram />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Vinicius Teodoro </small>
      </div>
    </footer>
  );
};

export default Footer;
