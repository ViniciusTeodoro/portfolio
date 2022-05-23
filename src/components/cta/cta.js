import React from "react";

const CTA = ({ cv }) => {
  return (
    <div className="cta">
      <a className="btn" href={cv} download>
        Download CV
      </a>
      <a className="btn btn-primary" href="#contact">
        Vamos conversar
      </a>
    </div>
  );
};

export default CTA;
