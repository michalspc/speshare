/* eslint-disable react/button-has-type */
import { Button } from '@chakra-ui/react';
import { ConnectType, useWallet, WalletStatus } from '@terra-money/wallet-provider';
import React from 'react';

export const ConnectTerra = () => {
  const {
    status,
    // network,
    // wallets,
    // availableConnectTypes,
    // availableInstallTypes,
    // supportFeatures,
    connect,
    disconnect,
  } = useWallet();

  return (
    <div>
      {/* <section>
        <pre>
          {JSON.stringify(
            {
              status,
              network,
              wallets,
              supportFeatures: Array.from(supportFeatures),
              availableConnectTypes,
              availableInstallTypes,
            },
            null,
            2,
          )}
        </pre>
      </section> */}

      <footer>
        {status === WalletStatus.WALLET_NOT_CONNECTED && (
          <Button key="connect-EXTENSION" onClick={() => connect(ConnectType.EXTENSION)}>
            Connect terra
          </Button>
        )}
        {status === WalletStatus.WALLET_CONNECTED && (
          <Button onClick={() => disconnect()}>Disconnect terra</Button>
        )}
      </footer>
    </div>
  );
};
