"use client";

import React, { useState } from "react";

import { Link } from "react-scroll";
import styled from "styled-components";

const StyledNav = styled.div`
  ul {
    width: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  a {
    color: ${({ color }) => `var(${color})`};
    cursor: pointer;

    li {
      width: 8px;
      height: 8px;
      background-color: currentColor;
      margin-bottom: 24px;
      transition: transform 0.2s 100ms;
      transform: rotate(45deg);
    }

    &.active > li {
      width: 10px;
      height: 10px;
      background-color: transparent;
      border: 2px solid currentColor;
      margin-bottom: 24px;
      transform: none;
    }
  }
`;

const Nav = () => {
  const [isWhiteNav, setIsWhiteNav] = useState(false);

  return (
    <StyledNav
      className="fixed z-50 right-16 mt-10 lg:flex xs:hidden"
      color={isWhiteNav ? "--color-white" : "--color-secondary"}
    >
      <ul>
        <Link
          to="hero-section"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          isDynamic={true}
        >
          <li />
        </Link>
        <Link
          to="my-skill"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          isDynamic={true}
        >
          <li />
        </Link>
        <Link
          to="experience"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          onSetActive={() => setIsWhiteNav(true)}
          onSetInactive={() => setIsWhiteNav(false)}
          isDynamic={true}
        >
          <li />
        </Link>
        <Link
          to="see-more"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          isDynamic={true}
        >
          <li />
        </Link>
        <Link
          to="footer"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          onSetActive={() => setIsWhiteNav(true)}
          onSetInactive={() => setIsWhiteNav(false)}
          isDynamic={true}
        >
          <li />
        </Link>
      </ul>
    </StyledNav>
  );
};

export default Nav;
