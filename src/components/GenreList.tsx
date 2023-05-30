import { HStack, List, ListItem, Text, Image, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListContainer from "./GenreListContainer";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { data: genres, error, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <List>
      {isLoading &&
        skeletons.map((skeleton) => (
          <GenreListContainer>
            <GenreListSkeleton />
          </GenreListContainer>
        ))}
      {genres.map((genre) => (
        <GenreListContainer key={genre.id}>
          <ListItem>
            <HStack>
              <Image
                boxSize={8}
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        </GenreListContainer>
      ))}
    </List>
  );
};

export default GenreList;
