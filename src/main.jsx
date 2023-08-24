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
} from "@thirdweb-dev/react";
import { StateContextProvider } from './context';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThirdwebProvider desiredChainId={ChainId.Mumbai}
  supportedWallets={[
    metamaskWallet(),
    coinbaseWallet(),
    walletConnect(),
    rainbowWallet(),
  ]}> 
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider> 
)