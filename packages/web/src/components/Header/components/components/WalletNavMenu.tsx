import { Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import disconnectImg from '@app/assets/img/Disconnect.png';
import settingImg from '@app/assets/img/Settings.png';

interface WalletNavMenuProps {
  disconnect: () => Promise<void>;
}

const WalletNavMenu: React.FC<WalletNavMenuProps> = ({ disconnect }) => (
  <Flex
    position="absolute"
    width="232px"
    top="65px"
    right="0"
    direction="column"
    backdropFilter="blur(7px)"
    border="1px solid"
    borderColor="dark.400"
    borderRadius="15px"
  >
    <Flex
      padding="14px 24px 10px 24px"
      gap={6}
      alignItems="center"
      borderBottom="1px solid"
      borderColor="dark.400"
      cursor="pointer"
    >
      <Image src={settingImg} alt="" />
      <Text fontSize="17px" fontWeight="semibold">
        Settings
      </Text>
    </Flex>
    <Flex
      padding="10px 24px 14px 24px"
      gap={6}
      alignItems="center"
      cursor="pointer"
      onClick={() => disconnect()}
    >
      <Image src={disconnectImg} alt="" />
      <Text fontSize="17px" fontWeight="semibold">
        Disconnect
      </Text>
    </Flex>
  </Flex>
);

export default WalletNavMenu;
