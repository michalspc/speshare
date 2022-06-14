import '../styles/globals.css';
import '@fontsource/raleway';
import '@fontsource/poppins';

import { ChakraProvider } from '@chakra-ui/react';
import {
  getChainOptions,
  StaticWalletProvider,
  WalletProvider,
} from '@terra-money/wallet-provider';
import React from 'react';
import { Provider } from 'react-redux';
import { AuthProvider } from '@app/features/auth';
import { store } from '@app/store';
import theme from '../theme';

function MyApp({ Component, pageProps, defaultNetwork, walletConnectChainIds }: any) {
  const main = (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </Provider>
    </ChakraProvider>
  );
  return typeof window !== 'undefined' ? (
    <WalletProvider defaultNetwork={defaultNetwork} walletConnectChainIds={walletConnectChainIds}>
      {main}
    </WalletProvider>
  ) : (
    <StaticWalletProvider defaultNetwork={defaultNetwork}>{main}</StaticWalletProvider>
  );
}

MyApp.getInitialProps = async () => {
  const chainOptions = await getChainOptions();
  return {
    ...chainOptions,
  };
};
export default MyApp;
