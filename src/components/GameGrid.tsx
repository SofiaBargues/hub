import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Game, Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardCointainer from "./GameCardCointainer";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

export const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
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
