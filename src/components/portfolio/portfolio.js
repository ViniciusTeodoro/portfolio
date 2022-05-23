import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "Teste1",
      image: IMG1,
      project: "https://github.com/",
      live_link: "https://github.com/",
    },
    {
      title: "Teste2",
      image: IMG2,
      project: "https://github.com/",
      live_link: "https://github.com/",
    },
    {
      title: "Teste3",
      image: IMG3,
      project: "https://github.com/",
      live_link: "https://github.com/",
    },
    {
      title: "Teste4",
      image: IMG4,
      project: "https://github.com/",
      live_link: "https://github.com/",
    },
    {
      title: "Teste5",
      image: IMG5,
      project: "https://github.com/",
      live_link: "https://github.com/",
    },
    {
      title: "Teste6",
      image: IMG6,
      project: "https://github.com/",
      live_link: "https://github.com/",
    },
  ];
  return (
    <section id="portfolio">
      <h5>Meus projetos</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {projects.map(({ title, image, project, live_link }) => {
          return (
            <article className="portfolio_item" key={title}>
              <div className="portfolio_item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className={"portfolio_item-cta"}>
                <a
                  href={project}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={live_link}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  {title}
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
