import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import skills from "./skills";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Quais skills eu tenho</h5>
      <h2>Minha Experiência</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            {skills
              .filter(({ tag }) => tag === "front")
              .map(({ name, proficiency }) => {
                return (
                  <article className="experience_details" key={name}>
                    <BsPatchCheckFill className="experience_details-icon" />
                    <div className="">
                      <h4>{name}</h4>
                      <small className="text-light">{proficiency}</small>
                    </div>
                  </article>
                );
              })}
          </div>
        </div>
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            {skills
              .filter(({ tag }) => tag === "back")
              .map(({ name, proficiency }) => {
                return (
                  <article className="experience_details" key={name}>
                    <BsPatchCheckFill className="experience_details-icon" />
                    <div className="">
                      <h4>{name}</h4>
                      <small className="text-light">{proficiency}</small>
                    </div>
                  </article>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
