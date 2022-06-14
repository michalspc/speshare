import { Center, Divider, Flex, Text, useToast } from '@chakra-ui/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import walletIcon from '@app/assets/img/8679175_wallet_money_icon.png';
import { web3CLient } from '@app/common/web3/client';
import { loginMeta, logout } from '@app/features/auth';
import { useAppAuth, useAppDispatch } from '@app/hooks';
import { WalletNavMenu, WalletNavUser } from './components';

const wClient = web3CLient.getClient().eth;
const WalletNav: React.FC = () => {
  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState('');
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useAppDispatch();
  const authUser = useAppAuth();
  const toast = useToast();
  useEffect(() => {
    if (wClient.currentProvider) {
      wClient.getAccounts().then((accounts) => {
        if (accounts.length) {
          setAccount(accounts[0]);
        }
      });
    }
  }, []);
  useEffect(() => {
    if (isUserLogged !== authUser.isAuthenticated) {
      setIsUserLogged(authUser.isAuthenticated);
    }
  }, [authUser.isAuthenticated, isUserLogged]);
  
  async function disconnect() {
    await dispatch(logout())
      .unwrap()
      .then(() => setAccount(''))
      .catch(() => {
        toast({ status: 'error', description: 'try again later' });
      });
  }
  async function connect() {
    if (!wClient.currentProvider) {
      return;
    }
    const accounts = await wClient.requestAccounts();
    const signature = await wClient.personal.sign(
      'Please sign to log into The Space Cartels.',
      accounts[0],
      '',
    );
    setAccount(accounts[0]);
    await dispatch(
      loginMeta({
        username: accounts[0],
        password: signature,
      }),
    )
      .unwrap()
      .then(() => toast({ status: 'success', description: 'you are logged in' }))
      .catch(() => {
        toast({ status: 'error', description: 'try again later' });
      });
  }

  return (
    <Center
      display="flex"
      position="relative"
      bg="transparent"
      height="49px"
      gap={4}
      padding="0px 24px 0px 24px"
      border="1px solid"
      borderColor="dark.600"
      borderRadius="lg"
      fontSize="medium"
      onClick={() => isUserLogged && setShowMenu(!showMenu)}
    >
      <Flex gap={4}>
        <Text>Polygon</Text>
        <Center>
          <Divider orientation="vertical" height="2" />
        </Center>
      </Flex>
      {isUserLogged ? (
        <>
          <WalletNavUser walletAddress={account} walletBalance={balance} />
          {showMenu && <WalletNavMenu disconnect={disconnect} />}
        </>
      ) : (
        <Flex gap={6} onClick={() => connect()} cursor="pointer">
          <Text whiteSpace="nowrap">Connect Wallet</Text>
          <Center>
            <Image src={walletIcon} alt="" layout="fixed" />
          </Center>
        </Flex>
      )}
    </Center>
  );
};

export default WalletNav;
