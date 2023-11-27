import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  ChainId,
  rainbowWallet,
  paperWallet,
} from "@thirdweb-dev/react";
import { StateContextProvider } from './context';
import App from './App';
import './index.css';
import { PaperWallet } from "@thirdweb-dev/wallets";

const root = ReactDOM.createRoot(document.getElementById('root'));

//CLIENT ID = 289fab3d-2d8a-427a-9bf8-39f8ea7be20a

root.render(
  <ThirdwebProvider desiredChainId={ChainId.Mumbai}
  activeChain={'mumbai'}
  supportedWallets={[
    metamaskWallet(),
    coinbaseWallet(),
    walletConnect(),
    rainbowWallet(),
    paperWallet({
      paperClientId:'289fab3d-2d8a-427a-9bf8-39f8ea7be20a'
    })
  ]}> 
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider> 
)