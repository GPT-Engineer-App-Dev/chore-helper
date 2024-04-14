import { Box, VStack, Heading, Text } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box>
      <Box as="header" bg="blue.600" py={4}>
        <Heading as="h1" size="xl" color="white" textAlign="center">
          My Todo App
        </Heading>
      </Box>

      <Box as="main" maxW="2xl" mx="auto" mt={8}>
        <VStack spacing={8} align="stretch">
          <Heading as="h2" size="lg">
            Todos
          </Heading>
          {/* TODO: Add todo list */}
        </VStack>
      </Box>

      <Box as="footer" mt={8} py={4} borderTop="1px" borderColor="gray.200" textAlign="center">
        <Text>&copy; 2023 My Todo App. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Index;
