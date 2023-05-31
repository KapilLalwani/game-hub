import {
  ListItem,
  HStack,
  Skeleton,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <ListItem>
      <Stack>
        <Skeleton height={25} />
        {/* <SkeletonText /> */}
      </Stack>
    </ListItem>
  );
};

export default GenreListSkeleton;
