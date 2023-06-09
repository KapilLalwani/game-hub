import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GenreListContainer = ({ children }: Props) => {
  return <Box paddingY={2}>{children}</Box>;
};

export default GenreListContainer;
