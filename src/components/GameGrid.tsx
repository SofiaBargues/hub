import React, { useEffect, useState } from "react";
import apiClient from "../service/api-client";
import { Text, list } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface FechinGamesResponse {
  count: number;
  results: Game[];
}

export const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FechinGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  });

  return (
    <>
      <Text>{error}</Text>
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};
