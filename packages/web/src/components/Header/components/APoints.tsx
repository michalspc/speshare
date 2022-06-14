import { Center, Divider, Flex, Text } from '@chakra-ui/react';
import React from 'react';

interface APointsProps {
  amount: string;
}

const APoints: React.FC<APointsProps> = ({ amount }) => (
  <Flex
    alignItems="center"
    height="49px"
    gap={3}
    padding="0px 16px 0px 16px"
    border="1px solid"
    borderColor="dark.600"
    borderRadius="lg"
    fontSize="xl"
  >
    <Flex gap={3}>
      <Text>A</Text>
      <Center>
        <Divider orientation="vertical" height="2" />
      </Center>
    </Flex>
    <Flex>
      <Text fontWeight="semibold">{amount}</Text>
    </Flex>
  </Flex>
);

export default APoints;
