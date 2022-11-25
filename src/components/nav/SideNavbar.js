/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Typography } from "@material-ui/core";
import { useState } from "react";

import "./SideNavbar.css";

export const SideNavbar = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href="#" 
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <Typography>
          Home
        </Typography>
      </a>
      <a href="#part1"
        onClick={() => setActiveNav('#part1')}
        className={activeNav === '#part1' ? 'active' : ''}
      >
        <Typography>
          Tools and Ressources
        </Typography>
      </a>
      <a href="#part2" 
        onClick={() => setActiveNav('#part2')}
        className={activeNav === '#part2' ? 'active' : ''}
      >
        <Typography>
          Study Tips and Strategies
        </Typography>
      </a>
      <a href="#part3"
        onClick={() => setActiveNav('#part3')}
        className={activeNav === '#part3' ? 'active' : ''}
      >
        <Typography>
          Learnings
        </Typography>
      </a>
    </nav>
  );
};