import { Box, Center, Divider, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import cooperIcon from '@app/assets/img/cooper_ore.png';
import steelIcon from '@app/assets/img/steel.png';
import uraniumIcon from '@app/assets/img/uranium_ore.png';

interface MineralResourcesProps {
  resource1: string;
  resource2: string;
  resource3: string;
}

const MineralResources: React.FC<MineralResourcesProps> = ({ resource1, resource2, resource3 }) => (
  <Center
    bg="transparent"
    height="49px"
    gap={8}
    padding="0px 32px 0px 32px"
    border="1px solid"
    borderColor="dark.600"
    borderRadius="lg"
    fontSize="xl"
  >
    <Flex gap={2} alignItems="center">
      <Box width="52px" height="auto" marginTop="10px">
        <Image src={steelIcon} alt="" />
      </Box>
      <Center>
        <Divider orientation="vertical" height="2" />
      </Center>
      <Text>{resource1}</Text>
    </Flex>
    <Flex gap={2} alignItems="center">
      <Box width="52px" height="auto" marginTop="10px">
        <Image src={uraniumIcon} alt="" />
      </Box>
      <Center>
        <Divider orientation="vertical" height="2" />
      </Center>
      <Text>{resource2}</Text>
    </Flex>
    <Flex gap={2} alignItems="center">
      <Box width="52px" height="auto">
        <Image src={cooperIcon} alt="" />
      </Box>
      <Center>
        <Divider orientation="vertical" height="2" />
      </Center>
      <Text>{resource3}</Text>
    </Flex>
  </Center>
);

export default MineralResources;
