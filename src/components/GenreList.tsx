import React from "react";
import useGenres from "../hooks/useGenres";
import { list } from "@chakra-ui/react";

const GenreList = () => {
  const { genres } = useGenres();

  return (
    <ul>
      {genres.map((genre: any) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
