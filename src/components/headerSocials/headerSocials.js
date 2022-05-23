import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaHackerrank } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/viniciusteodorodeoliveira/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/ViniciusTeodoro"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
      <a
        href="https://www.hackerrank.com/viniciusteodoro1"
        target="_blank"
        rel="noreferrer"
      >
        <FaHackerrank />
      </a>
    </div>
  );
};

export default HeaderSocials;
