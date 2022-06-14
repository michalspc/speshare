import { Box, Button, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

interface BuildingCardProps {
  img: StaticImageData;
  name: string;
  level: string;
}

export const BuildingCard: React.FC<BuildingCardProps> = ({ img, name, level }) => (
  <Flex direction="column" textAlign="center" width="235px">
    <Box
      border="thin solid"
      borderBottom="0px"
      borderColor="dark.400"
      borderRadius="15px"
      backdropFilter="blur(5px)"
      padding="24px"
      _after={{
        content: '""',
        display: 'block',
        height: 'full',
        position: 'absolute',
        bottom: 0,
        width: '66px',
        left: 0,
        borderBottom: '1px solid',
        borderColor: 'dark.400',
        borderBottomLeftRadius: '15px',
      }}
      _before={{
        content: '""',
        display: 'block',
        height: 'full',
        position: 'absolute',
        bottom: 0,
        width: '66px',
        right: 0,
        borderBottom: '1px solid',
        borderColor: 'dark.400',
        borderBottomRightRadius: '15px',
      }}
    >
      <Flex direction="column" gap={2} paddingBottom={2}>
        <Box width="182px" height="156px">
          <Image src={img} alt="" />
        </Box>
        <Text fontSize="30px" fontWeight="black">
          {name}
        </Text>
        <Button size="xs" variant="outline" background="rgba(0, 0, 0, 0.3)" width="full">
          <Text fontSize="medium">Enter the building</Text>
        </Button>
      </Flex>
    </Box>

    <Box
      width="104px"
      alignSelf="center"
      marginTop="-1px"
      height="50px"
      backdropFilter="blur(5px)"
      borderBottomLeftRadius="110px"
      borderBottomRightRadius="110px"
      border="1px solid"
      borderColor="dark.400"
      borderTop="0px"
    >
      <Flex direction="column" transform="translate(0px, -20px)">
        <Text fontWeight="bold" fontSize="26px" lineHeight="normal">
          {level}
        </Text>
        <Text fontSize="small">LEVEL</Text>
      </Flex>
    </Box>
  </Flex>
);
