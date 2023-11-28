import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import { list } from "@chakra-ui/react";
import useData from "../hooks/useData";

const GenreList = () => {
  const { data } = useData<Genre>("/genres");

  return (
    <ul>
      {data.map((genre: any) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
