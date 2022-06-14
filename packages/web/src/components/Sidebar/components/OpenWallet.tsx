import { Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import walletImg from '@app/assets/svg/_icons.svg';

interface OpenWalletProps {
  isDisabled?: boolean;
}

const OpenWallet: React.FC<OpenWalletProps> = ({ isDisabled }) => (
  <Flex height="55px" padding="24px" justifyContent="center" alignItems="center" gap={4}>
    <Image src={walletImg} alt="" />
    <Text fontWeight="extrabold" color={isDisabled ? 'disabled' : 'white'}>
      Open your wallet
    </Text>
  </Flex>
);

export default OpenWallet;
