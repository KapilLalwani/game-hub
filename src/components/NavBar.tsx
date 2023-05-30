import { HStack, Image, Text, useColorMode } from "@chakra-ui/react";
// import KapilGameZoneLogo from "../assets/KGZ.webp";
import KapilGameZoneLogo from "../assets/Kapil_Game_Zone.jpg";
import KapilGameZoneLogo_White from "../assets/Kapil_Game_Zone_White.jpg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  const { colorMode } = useColorMode();
  return (
    <HStack justifyContent={"space-between"} padding={2}>
      <Image
        src={
          colorMode === "light" ? KapilGameZoneLogo : KapilGameZoneLogo_White
        }
        boxSize={"80px"}
        borderRadius={100}
      />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
