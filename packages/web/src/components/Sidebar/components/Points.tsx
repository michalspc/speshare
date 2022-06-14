import { Box, Center, Divider, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import points1Img from '@app/assets/img/Group255.png';
import points2Img from '@app/assets/img/spc_ico.png';

interface PointsProps {
  points1: string;
  points2: string;
  isDisabled: boolean;
}

const Points: React.FC<PointsProps> = ({ points1, points2, isDisabled }) => (
  <Center
    bg="transparent"
    height="64px"
    gap={6}
    padding="0px 32px 0px 32px"
    boxShadow="0px 2px 2px -2px rgba(255,255,255,0.15)"
  >
    <Flex gap={3} alignItems="center">
      <Box width="32px" height="32px">
        <Box transform="translate(-70px, -70px)">
          <Image src={points1Img} alt="" layout="fixed" />
        </Box>
      </Box>
      <Text color={isDisabled ? 'disabled' : 'white'} fontWeight="extrabold">
        {points1}
      </Text>
    </Flex>
    <Center>
      <Divider orientation="vertical" height="2" />
    </Center>
    <Flex gap={3} alignItems="center">
      <Box width="32px" height="32px">
        <Image src={points2Img} alt="" />
      </Box>
      <Text color={isDisabled ? 'disabled' : 'white'} fontWeight="extrabold">
        {points2}
      </Text>
    </Flex>
  </Center>
);

export default Points;
