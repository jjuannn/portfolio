import { Box, Flex, Image, Heading } from "@chakra-ui/react";

export default function Presentation() {
  return (
    <Flex
      as="section"
      flex="1"
      minHeight="85vh"
      marginBottom="30px"
      alignItems="center"
      direction={{ sm: "column", lg: "row" }}
      justifyContent={{ sm: "center" }}
    >
      <Box
        marginBottom="10px"
        width="300px"
        height="300px"
        overflow="hidden"
        marginRight={{ sm: "0px", xl: "30px" }}
      >
        <Image
          padding="16px"
          alt=""
          transition="0.3s"
          _hover={{ transform: "scale(1.1)" }}
          width="300px"
          height="300px"
          src="/me.jpg"
          borderRadius="full"
        />
      </Box>
      <Box textAlign="center" marginRight={{ sm: "0px", xl: "30px" }}>
        <Heading marginBottom="15px" size="3xl">
          Juan Avero
        </Heading>
        <Heading color="purple">Web Developer</Heading>
      </Box>
    </Flex>
  );
}
