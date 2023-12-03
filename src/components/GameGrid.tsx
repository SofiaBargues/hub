import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Game } from "../hooks/useGames";
import GameCard from "./GameCard";
import { SiDigikeyelectronics } from "react-icons/si";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardCointainer from "./GameCardCointainer";
import useData from "../hooks/useData";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
}

export const GameGrid = ({ selectedGenre }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre);
  const skeleton = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <Text>{error}</Text>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={3}
      >
        {isLoading &&
          skeleton.map((skeleton) => (
            <GameCardCointainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardCointainer>
          ))}
        {data.map((game) => (
          <GameCardCointainer key={game.id}>
            <GameCard game={game} />
          </GameCardCointainer>
        ))}
      </SimpleGrid>
    </>
  );
};
