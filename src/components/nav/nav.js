import React, { useState } from "react";
import "./nav.css";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineStar,
  AiOutlineMessage,
} from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { BiBook } from "react-icons/bi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home");
  const navigation = [
    {
      ref: "#home",
      icon: <AiOutlineHome />,
    },
    {
      ref: "#about",
      icon: <AiOutlineUser />,
    },
    {
      ref: "#skills",
      icon: <GiSkills />,
    },
    {
      ref: "#experience",
      icon: <BiBook />,
    },
    {
      ref: "#portfolio",
      icon: <AiOutlineStar />,
    },
    {
      ref: "#contact",
      icon: <AiOutlineMessage />,
    },
  ];
  return (
    <nav>
      {navigation.map(({ ref, icon }) => {
        return (
          <a
            key={ref}
            className={activeNav === ref ? "active" : ""}
            href={ref}
            onClick={() => {
              setActiveNav(ref);
            }}
          >
            {icon}
          </a>
        );
      })}
    </nav>
  );
};

export default Nav;
