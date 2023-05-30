import {
  List,
  ListItem,
  HStack,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <List>
      <ListItem>
        <HStack>
          <Skeleton />
          <SkeletonText />
        </HStack>
      </ListItem>
    </List>
  );
};

export default GenreListSkeleton;
