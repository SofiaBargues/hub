import { useEffect, useState } from "react";
import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
}

const useGenres = () => useData<Genre>("/genres");
export default useGenres;
