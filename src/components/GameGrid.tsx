import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Game } from "../hooks/useGames";
import GameCard from "./GameCard";
import { SiDigikeyelectronics } from "react-icons/si";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardCointainer from "./GameCardCointainer";
import useData from "../hooks/useData";

export const GameGrid = () => {
  const { data, error, isLoading } = useData<Game>("/games");
  const skeleton = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <Text>{error}</Text>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {isLoading &&
          skeleton.map((skeleton) => (
            <GameCardCointainer>
              <GameCardSkeleton key={skeleton} />
            </GameCardCointainer>
          ))}
        {data.map((game) => (
          <GameCardCointainer>
            <GameCard key={game.id} game={game} />
          </GameCardCointainer>
        ))}
      </SimpleGrid>
    </>
  );
};
