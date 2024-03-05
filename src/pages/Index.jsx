import { Box, Checkbox, Flex, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import { FaEye, FaCheckSquare, FaTimesCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={8}>
      <VStack spacing={4}>
        <Heading as="h1" size="xl">
          Principal's Cabinet
        </Heading>
        <Stack spacing={8} width="100%">
          {/* Section A */}
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading as="h2" size="lg" mb={2}>
              <FaEye /> Sees Everything and Everyone
            </Heading>
            <Text>The principal has the ability to oversee all operations and monitor the activities within the institution.</Text>
          </Box>

          {/* Section B */}
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading as="h2" size="lg" mb={2}>
              <FaCheckSquare /> Approvals for Financial Decisions
            </Heading>
            <Text>The principal can give approvals to form discounts and make changes in the price list, ensuring the financial stability of the institution.</Text>
          </Box>

          {/* Section C */}
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading as="h2" size="lg" mb={2}>
              <FaTimesCircle /> Decision Making
            </Heading>
            <Text>The principal does not enter data but has the authority to tick checkboxes for agreement or disagreement on specific issues pertaining to the institution.</Text>
            {/* Example checkboxes for decision making */}
            <Flex align="center" mt={4}>
              <Checkbox defaultIsChecked>Approve new price list</Checkbox>
            </Flex>
            <Flex align="center" mt={2}>
              <Checkbox>Agree to discount policy changes</Checkbox>
            </Flex>
          </Box>
        </Stack>
      </VStack>
    </Box>
  );
};

export default Index;
