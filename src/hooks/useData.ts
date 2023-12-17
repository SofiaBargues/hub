import { useEffect, useState } from "react";
import apiClient from "../service/api-client";
import { Axios, AxiosRequestConfig, CanceledError } from "axios";
import {
  RAWG_CONSOLA_RESPONSE,
  RAWG_GAMES_RESPONSE,
  RAWG_GENRES_RESPONSE,
} from "./fakeAPI";

interface FechResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  // // Use fake API during development to save credits
  const FAKE_API = false;
  //console.log(data);

  useEffect(
    () => {
      if (FAKE_API) {
        setData(
          // @ts-ignore faking API data
          endpoint == "/games"
            ? RAWG_GAMES_RESPONSE
            : endpoint == "/genres"
            ? RAWG_GENRES_RESPONSE
            : endpoint == "/platforms/lists/parents"
            ? RAWG_CONSOLA_RESPONSE
            : []
        );
        setLoading(false);
        // //Early return for fake API
        return;
      }

      const controller = new AbortController();

      apiClient
        .get<FechResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );
  return {
    data,
    error,
    isLoading,
  };
};

export default useData;
