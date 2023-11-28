import { useEffect, useState } from "react";
import { FechingGamesResponse, Game } from "./useGames";
import apiClient from "../service/api-client";
import { CanceledError } from "axios";
import { RAWG_GENRES_RESPONSE } from "./fakeAPI";

interface Genre {
  id: number;
  name: string;
}
interface FechingGenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);
  console.log(genres);

  useEffect(() => {
    // Use fake API during development to save credits
    setGenres(RAWG_GENRES_RESPONSE);
    setLoading(false);
    //Early return for fake API
    return;

    const controller = new AbortController();

    apiClient
      .get<FechingGenresResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);
  return {
    genres,
    error,
    isLoading,
  };
};

export default useGenres;
