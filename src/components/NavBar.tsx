import { HStack, Image, Text } from "@chakra-ui/react";
import KapilGameZoneLogo from "../assets/KGZ.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={2}>
      <Image src={KapilGameZoneLogo} boxSize={"80px"} borderRadius={100} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
