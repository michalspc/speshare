import { Center, Flex, Progress, Text } from '@chakra-ui/react';
import React from 'react';

interface LevelInfoProps {
  level: string;
  rank: string;
  currentPoints: number;
  nextLevelPoints: number;
}

const LevelInfo: React.FC<LevelInfoProps> = ({ level, rank, currentPoints, nextLevelPoints }) => {
  const progressValue = (currentPoints / nextLevelPoints) * 100;
  return (
    <Center bg="transparent" gap={6}>
      <Flex
        alignItems="center"
        bg="transparent"
        height="49px"
        padding={level.length === 1 ? '0px 20px 0px 20px' : '0px 12px 0px 12px'}
        border="1px solid"
        borderColor="dark.600"
        borderRadius="lg"
      >
        <Text fontSize="35px">{level}</Text>
      </Flex>
      <Flex fontSize="16px" lineHeight="16px" direction="column" gap="6px">
        <Text fontWeight="600">Rank - {rank}</Text>
        <Text fontWeight="200">
          Next lev. {currentPoints}/{nextLevelPoints}
        </Text>
        <Progress
          value={progressValue}
          size="xs"
          colorScheme="secondary"
          borderRadius="25px"
          bg="dark.500"
        />
      </Flex>
    </Center>
  );
};

export default LevelInfo;
