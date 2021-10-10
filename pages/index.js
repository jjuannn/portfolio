import { Box, Flex, Image, Heading } from "@chakra-ui/react";
import About from "components/About";
import Presentation from "components/Presentation";

export default function Home() {
  return (
    <>
      <Presentation />
      <About />
    </>
  );
}
