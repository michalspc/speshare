import { Box, Button, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import generatorImg from '@app/assets/img/Generator1.png';

interface GeneratorTradingProps {
  isDisabled: boolean;
}

const GeneratorTrading: React.FC<GeneratorTradingProps> = ({ isDisabled }) => (
  <Flex direction="row" boxShadow="0px 2px 2px -2px rgba(255,255,255,0.15)" height="136px">
    <Box transform="translate(-20px, -45px)">
      <Image src={generatorImg} alt="" />
    </Box>
    <Box alignSelf="center" transform="translate(-45px, 0px)">
      <Button variant="outline" width="231px" size="sm" gap={1} isDisabled={isDisabled}>
        <Text fontSize="sm" fontWeight="medium">
          Open
        </Text>
        <Text fontSize="sm" fontWeight="bold">
          Generator Trading
        </Text>
      </Button>
    </Box>
  </Flex>
);

export default GeneratorTrading;
