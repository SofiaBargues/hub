import React from "react";
import useGenres from "../hooks/useGenres";
import { list } from "@chakra-ui/react";

const GenreList = () => {
  const { data } = useGenres();

  return (
    <ul>
      {data.map((genre: any) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
