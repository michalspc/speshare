import { Button, Flex, useToast } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { web3CLient } from '@app/common/web3/client';
import { ConnectTerra } from '@app/components/ConnectTerra';
import { Layout } from '@app/components/Layout';
import { useAppAuth, useAppDispatch } from '@app/hooks';

const wClient = web3CLient.getClient().eth;
const Home: NextPage = () => {
  const [account, setAccount] = useState('');
  const [isUserLogged, setIsUserLogged] = useState(false);
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
    <Layout>
      <Flex flex="1" flexDirection="column" alignItems={{ base: 'center', sm: 'normal' }} gap={3}>
        {(!account || !isUserLogged) && (
          <Button
            mb="21px"
            width="279px"
            variant="solid"
            letterSpacing="0.01em"
            fontFamily="Avenir"
            fontWeight="800"
            fontSize="16px"
            lineHeight="22px"
            color="#FFFFFF"
            bg="linear-gradient(91.94deg, #000000 -17.31%, #444444 112.59%)"
            padding="8px 24px"
            boxShadow="0px 3px 6px rgba(110, 116, 134, 0.24)"
            borderRadius="100px"
            _hover={{ bg: '#444' }}
            _active={{ bgColor: '#444', borderColor: '#444' }}
            onClick={() => connect()}
          >
            Continue With Metamask
          </Button>
        )}
        {account && isUserLogged && (
          <Button
            width="279px"
            variant="solid"
            letterSpacing="0.01em"
            fontFamily="Avenir"
            fontWeight="800"
            fontSize="16px"
            lineHeight="22px"
            color="#00000"
            bg="linear-gradient(91.94deg, #000000 -17.31%, #444444 112.59%)"
            padding="8px 24px"
            boxShadow="0px 3px 6px rgba(110, 116, 134, 0.24)"
            borderRadius="100px"
            _hover={{ bg: '#444' }}
            _active={{ bgColor: '#444', borderColor: '#444' }}
            onClick={() => disconnect()}
          >
            Logout
          </Button>
        )}
        <ConnectTerra />
        <Link href="retrieve-amulets">
          <Button width="279px">Retrieve Amulet</Button>
        </Link>
      </Flex>
    </Layout>
  );
};

export default Home;
