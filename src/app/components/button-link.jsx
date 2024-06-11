"use client";

import React from "react";
import styled from "styled-components";

import ArrowRight from "@/public/arrow-right.svg";

const StyledButton = styled.button`
  display: flex;
  width: 100%;
  max-width: 300px;
  padding: 12px 0;
  justify-content: center;
  align-items: center;
  gap: 24px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1.296px;
  font-size: 14px;
  user-select: none;
  background: transparent;
  color: var(--color-secondary-400);
  border: 1px solid var(--color-secondary-400);

  background: linear-gradient(
    to right,
    var(--color-secondary-400) 50%,
    transparent 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.3s ease-out;

  &:hover {
    color: var(--color-white);
    transform: translateX(0);
    background-position: left bottom;

    svg path {
      fill: var(--color-white);
    }
  }
`;

const ButtonLink = ({
  text = "button",
  path = "/my-work",
  target = "_self",
}) => {

  return (
    <a href={path} target={target}>
      <StyledButton>
        {text}
        <ArrowRight />
      </StyledButton>
    </a>
  );
};

export default ButtonLink;
