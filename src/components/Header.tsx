import { Box, Center, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box>
      <Center>
        <Text
          fontFamily={"Lucida Console"}
          fontWeight={"bold"}
          fontSize={"x-large"}
          color={"grey"}
        >
          No Nonsense Editor
        </Text>
      </Center>
    </Box>
  );
};

export default Header;
