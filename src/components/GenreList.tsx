import React from "react";
import useGenres from "../hooks/useGenres";
import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
  list,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../service/image-url";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((genre: any) => (
        <ListItem key={genre.id}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
