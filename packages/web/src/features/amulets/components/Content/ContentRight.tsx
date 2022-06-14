import { Box, Button, Center, Divider, Flex, Text } from '@chakra-ui/react';
import { ConnectType, useWallet, WalletStatus } from '@terra-money/wallet-provider';
import Image from 'next/image';
import walletIcon from '@app/assets/img/8679175_wallet_money_icon@2x.png';

interface RetrieveStatus {
  retrieving: boolean;
  retrieved: boolean;
}

interface ContentProps {
  onRetrieve: ({ retrieving, retrieved }: RetrieveStatus) => void;
}
export const ContentRight: React.FC<ContentProps> = ({ onRetrieve }) => {
  const { status, connect, disconnect } = useWallet();
  const handleRetrieve = () => (
    onRetrieve({ retrieving: true, retrieved: false }),
    setTimeout(() => {
      onRetrieve({ retrieving: false, retrieved: true });
    }, 2000)
  );

  return (
    <Flex>
      <Flex flexDirection="column" alignSelf="center" gap={2} marginTop="16px" marginRight="64px">
        <Flex
          height="75px"
          alignItems="center"
          fontSize="larger"
          fontWeight="extrabold"
          border="1px solid gray"
          borderRadius="10px"
          padding="0 32px"
          justifyContent="center"
          gap={8}
        >
          <Box>Terra</Box>
          <Center>
            <Divider orientation="vertical" height="2" />
          </Center>
          {status === WalletStatus.WALLET_NOT_CONNECTED && (
            <Flex
              gap={8}
              cursor="pointer"
              alignItems="center"
              onClick={() => connect(ConnectType.EXTENSION)}
            >
              <Text whiteSpace="nowrap">Connect Wallet</Text>
              <Center width="26px" height="23px">
                <Image src={walletIcon} alt="" />
              </Center>
            </Flex>
          )}
          {status === WalletStatus.WALLET_CONNECTED && (
            <Flex gap={8} cursor="pointer" alignItems="center" onClick={() => disconnect()}>
              <Text whiteSpace="nowrap">Disconnect Wallet</Text>
              <Center width="26px" height="23px">
                <Image src={walletIcon} alt="" />
              </Center>
            </Flex>
          )}
        </Flex>
        <Button height="75px" onClick={() => handleRetrieve()}>
          <Text fontSize="xl" fontWeight="extrabold">
            Retrieve Amulets
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
};
