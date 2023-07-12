import React from "react";
import { Button } from "@mui/material";
import { Film } from "./Film";

const bestFilms = [
  "Avatar",
  "Interstellar",
  "Avatar",
  "Interstellar",
  "Interstellar",
  "Interstellar",
];

export const HomePage = () => {
  return (
    <div>
      {bestFilms.map((title, index) => {
        return <Film key={index} title={title} />;
      })}
    </div>
  );
};
