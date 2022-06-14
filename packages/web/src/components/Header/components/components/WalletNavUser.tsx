import { Center, Divider, Flex, Text } from '@chakra-ui/react';

interface WalletNavUserProps {
  walletAddress?: string;
  walletBalance?: string;
}

const WalletNavUser: React.FC<WalletNavUserProps> = ({ walletAddress, walletBalance }) => (
  <>
    <Flex gap={4} overflow="hidden" maxWidth="150px">
      <Text whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
        {walletAddress}
      </Text>
      <Center>
        <Divider orientation="vertical" height="6" />
      </Center>
    </Flex>
    <Flex direction="column" position="relative" alignItems="self-end">
      <Flex fontSize="13px" gap={2}>
        <Text>{walletBalance}</Text>
        <Text fontWeight="bold">ETH</Text>
      </Flex>
    </Flex>
  </>
);

export default WalletNavUser;
