import {
  HStack,
  List,
  ListItem,
  Image,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListContainer from "./GenreListContainer";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data: genres, error, isLoading } = useGenres();
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];

  if (error) return null;

  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GenreListContainer key={skeleton}>
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
                  objectFit={"cover"}
                />
                <Button
                  onClick={() => onSelectGenre(genre)}
                  variant={"link"}
                  fontSize="lg"
                  fontWeight={
                    genre.id === selectedGenre?.id ? "bold" : "normal"
                  }
                  whiteSpace={"normal"}
                  textAlign={"left"}
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          </GenreListContainer>
        ))}
      </List>
    </>
  );
};

export default GenreList;
