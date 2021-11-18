import { Flex } from "@chakra-ui/react";
import Nav from "components/Nav";

export default function AppLayout({ children }) {
  return (
    <Flex
      as="section"
      paddingX={{ sm: "5", md: "16" }}
      paddingY="5"
      direction="column"
      minHeight="100vh"
    >
      <Nav />
      <Flex direction="column" as="main" flex="1">
        {children}
      </Flex>
    </Flex>
  );
}
