import { Box, Flex, Stack, Text, Heading, Link } from "@chakra-ui/react";

export default function Nav() {
  return (
    <Flex
      marginBottom="30px"
      as="nav"
      direction={{ sm: "column", md: "row" }}
      justifyContent="space-between"
      alignItems={{ sm: "center", md: "flex-end" }}
    >
      <Box marginBottom={{ sm: "10px", md: "0" }}>
        <Heading>{"{juan}"}</Heading>
      </Box>
      <Stack direction="row" spacing="6">
        <Text>
          <Link _hover={{ color: "purple" }} href="#about">
            Sobre mi
          </Link>
        </Text>
        <Text>
          <Link _hover={{ color: "purple" }} href="#proyectos">
            Proyectos
          </Link>
        </Text>
        <Text>
          <Link _hover={{ color: "purple" }} href="#contacto">
            Contacto
          </Link>
        </Text>
      </Stack>
    </Flex>
  );
}
