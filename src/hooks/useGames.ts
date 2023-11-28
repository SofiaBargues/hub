import { useEffect, useState } from "react";
import apiClient from "../service/api-client";
import { CanceledError } from "axios";
import { RAWG_GAMES_RESPONSE } from "./fakeAPI";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export interface FechingGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // Use fake API during development to save credits
    setGames(RAWG_GAMES_RESPONSE);
    setLoading(false);
    // Early return for fake API
    return;

    const controller = new AbortController();

    apiClient
      .get<FechingGamesResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);
  return { games, error, isLoading };
};
export default useGames;
