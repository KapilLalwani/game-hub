import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 85 ? "green" : score > 75 ? "yellow" : "red";
  return (
    <Badge colorScheme={color} fontSize={12} paddingX={2} borderRadius={4}>
      {score}
    </Badge>
  );
};

export default CriticScore;
