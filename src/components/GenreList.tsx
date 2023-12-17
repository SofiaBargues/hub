import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
  list,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../service/image-url";

interface Props {
  onSelectGenere: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenere }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
    <Heading fontSize={'2xl'} marginBottom={3}>Genres</Heading>
    <List>
      {data.map((genre: any) => (
        <ListItem key={genre.id}  paddingY="5px"  >
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              objectFit={'cover'}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
            textAlign={'left'}
             whiteSpace={'normal'} 
             fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => onSelectGenere(genre)}
              fontSize={"lg"}
              variant={"link"}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>  );
};

export default GenreList;
