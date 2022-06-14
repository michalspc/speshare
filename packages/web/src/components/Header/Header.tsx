import { Divider, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import logo from '@app/assets/svg/logo_spc.svg';

export const Header: React.FC = ({ children }) => (
  <Flex
    height="112px"
    padding="24px 44px"
    alignItems="center"
    backgroundImage="linear-gradient(to right, #0D101A, #040407)"
  >
    <Flex gap={8} alignItems="center">
      <Image src={logo} alt="" layout="fixed" />
      <Divider orientation="vertical" height="6" />
    </Flex>
    {children}
  </Flex>
);
