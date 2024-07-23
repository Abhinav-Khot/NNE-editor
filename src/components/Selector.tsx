import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Text,
} from "@chakra-ui/react";
import SupportedLangs from "./SupportedLanguages.json";

interface Props {
  language: string;
  changeLang: (arg0: string) => void;
  changeBoilerPlate: (arg0: string) => void;
}

const Selector = ({ language, changeLang, changeBoilerPlate }: Props) => {
  return (
    <Box mb={3}>
      <Text
        mb={3}
        decoration={"solid underline teal"}
        fontFamily={"Lucida Console"}
      >
        language:
      </Text>
      <Menu>
        <MenuButton as={Button} colorScheme="purple" variant="solid">
          {language}
        </MenuButton>
        <MenuList>
          {SupportedLangs.map((obj) => (
            <MenuItem
              key={obj.language}
              onClick={() => {
                changeLang(obj.language);
                changeBoilerPlate(obj.Boilerplate);
              }}
            >
              {obj.language}
              &nbsp;
              <Text color="gray.500" size={"sm"}>
                {"ver ".concat(obj.version)}
              </Text>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default Selector;
