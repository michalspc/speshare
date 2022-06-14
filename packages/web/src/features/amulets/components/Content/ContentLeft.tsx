import { Box, Divider, Flex, Text } from '@chakra-ui/react';

export const ContentLeft: React.FC = () => (
  <Flex flexDirection="column" gap={6}>
    <Flex flexDirection="column" whiteSpace="nowrap" marginBottom="16px">
      <Text fontSize="6xl" lineHeight="normal">
        Retrieve Amulets
      </Text>
      <Text
        fontSize="35px"
        lineHeight="normal"
        fontWeight="extrabold"
        letterSpacing="2.45px"
        textTransform="uppercase"
      >
        Space cartels
      </Text>
    </Flex>
    <Divider borderColor="secondary.500" width="168px" borderWidth="1px" />
    <Flex flexDirection="column" gap={6} width="419px">
      <Box>
        <Text margin={0} display="inline">
          Amulets that have not been transferred even once will receive
        </Text>
        <Text margin={0} marginLeft="4px" display="inline" fontWeight="extrabold">
          a full 6/6 Boost.
        </Text>
      </Box>
      <Box>
        <Text margin={0} display="inline">
          Amulets that have been transferred at least once will get the full Boost
        </Text>
        <Text margin={0} marginLeft="4px" display="inline" fontWeight="extrabold">
          without a single month 5/6.
        </Text>
      </Box>
    </Flex>
  </Flex>
);
