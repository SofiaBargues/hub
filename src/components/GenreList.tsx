import React from "react";
import useGenres from "../hooks/useGenres";
import { HStack, Image, List, ListItem, Text, list } from "@chakra-ui/react";
import getCroppedImageUrl from "../service/image-url";

const GenreList = () => {
  const { data } = useGenres();

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
