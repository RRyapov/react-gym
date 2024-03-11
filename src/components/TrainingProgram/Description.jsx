import React from "react";
import { Link } from "react-router-dom";

import {
  ProgramDescription,
  ProgramShortRead,
  ProgramTitle,
  ProgramButton,
  ProgramImage,
} from "../../common";

export const Description = ({ id, name, shortText }) => (
  <ProgramDescription>
    <ProgramTitle>
      <span>{name}</span>
    </ProgramTitle>
    <ProgramShortRead>{shortText}</ProgramShortRead>
    <Link to={`/program/${id}`}>
      <ProgramButton>
        <span>Подробнее</span>
      </ProgramButton>
    </Link>
  </ProgramDescription>
);

export const Image = ({ id, imageUrl }) => (
  <ProgramImage>
    <img src={imageUrl} alt={`program-${id}`} />
  </ProgramImage>
);
