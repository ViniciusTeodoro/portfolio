import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { ME } from "../../assets";
import "./about.css";

const About = () => {
  return (
    <section id="#about">
      <h5>Saiba</h5>
      <h2>Sobre mim</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="about" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5> Experiência </h5>
              <small> 3+ anos de código</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5> Projetos </h5>
              <small> 20+ Realizados</small>
            </article>
          </div>

          <p>
            Olá!! sou Vinicius Teodoro possuo 23 anos, sou formado em ciência da
            computação e pós graduado em cybersegurança, pretendo realizar
            mestrado e doutorado na área de tecnologia. Sempre fui apaixonado
            por computadores e resolver problemas. Amo programar e meu objetivo
            é ser proficiente no que faço e entregar o esperado.
          </p>

          <a href="#contact" className="btn btn-primary">
            Vamos Conversar
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
