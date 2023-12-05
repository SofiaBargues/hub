import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Game, Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardCointainer from "./GameCardCointainer";
import { Genre } from "../hooks/useGenres";
import { GameQuery } from "../App";

export interface Props {
  gameQuery: GameQuery;
}

export const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
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
