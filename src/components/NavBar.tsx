import { HStack, Image, Text, useColorMode } from "@chakra-ui/react";
// import KapilGameZoneLogo from "../assets/KGZ.webp";
import KapilGameZoneLogo from "../assets/Kapil_Game_Zone.jpg";
import KapilGameZoneLogo_White from "../assets/Kapil_Game_Zone_White.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  const { colorMode } = useColorMode();
  return (
    <HStack padding={2}>
      <Image
        src={
          colorMode === "light" ? KapilGameZoneLogo : KapilGameZoneLogo_White
        }
        boxSize={"80px"}
        borderRadius={100}
      />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
