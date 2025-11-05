# Wallet-Adapter-Sol

A Solana wallet adapter demo dApp for connecting, managing, and interacting with wallets. Powered by Next.js and Solana Wallet Adapter.

## Overview

Wallet-Adapter-Sol provides a simple, Phantom-themed interface for Solana wallet interactions, allowing users to connect their wallet, view balances, airdrop SOL on devnet, send tokens, and sign messages. Built as a foundational Web3 tool for developers to test and integrate Solana wallet functionalities into dApps, with real-time updates and seamless transaction handling.

## Getting Started

1\. Set up environment variables by creating a `.env.local` file in the root directory:

```bash

# Required: Solana RPC endpoint (devnet for testing)

NEXT_PUBLIC_SOLANA_RPC_URL=https://api.devnet.solana.com

# Optional: Custom wallet icons or themes

NEXT_PUBLIC_WALLET_THEME=phantom

# Optional: Airdrop authority if needed for custom airdrops

AIRDROP_AUTHORITY=your_keypair_here

```

2\. Install the dependencies:

```bash

npm install

# or

yarn install

# or

pnpm install

```

3\. Run the development server:

```bash

npm run dev

# or

yarn dev

# or

pnpm dev

```

4\. Open [http://localhost:3000](http://localhost:3000) to see the demo app.

## Integration Guide

### 1. Configure Wallet Adapters

Update `app/providers.tsx` to include supported wallets:

```typescript

// app/providers.tsx

import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';

import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';

import { PhantomWalletAdapter, BackpackWalletAdapter } from '@solana/wallet-adapter-wallets';

export default function Providers({ children }: { children: React.ReactNode }) {

  const network = WalletAdapterNetwork.Devnet;

  const endpoint = process.env.NEXT_PUBLIC_SOLANA_RPC_URL || 'https://api.devnet.solana.com';

  const wallets = [

    new PhantomWalletAdapter(),

    new BackpackWalletAdapter(),

    // Add more wallets as needed

  ];

  return (

    <ConnectionProvider endpoint={endpoint}>

      <WalletProvider wallets={wallets} autoConnect>

        {children}

      </WalletProvider>

    </ConnectionProvider>

  );

}

```

### 2. Embed the Wallet Component

Add the wallet UI to your dApp page.

```tsx

// In app/page.tsx or component

import { useWallet } from '@solana/wallet-adapter-react';

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

import { AirdropButton, SendTokenForm, BalanceDisplay, SignMessageButton } from '@/components/wallet';

export default function WalletPage() {

  const { publicKey } = useWallet();

  return (

    <div className="p-8">

      <h1 className="text-3xl font-bold">Solana Wallet Adapter</h1>

      <WalletMultiButton />

      {publicKey && (

        <>

          <BalanceDisplay />

          <AirdropButton />

          <SendTokenForm />

          <SignMessageButton />

        </>

      )}

    </div>

  );

}

```

### 3. Customize the Look

The app uses Tailwind CSS for styling. Override via:

- Custom Tailwind classes in `globals.css`

- Component props for themes (e.g., Phantom purple)

- Vercel deployment for production

## Features

- 👛 Multi-wallet support (Phantom, Backpack, etc.)

- 💰 Balance display and real-time updates

- 🪂 Devnet SOL airdrop functionality

- 📤 Token sending with recipient input

- ✍️ Message signing for authentication

- 🎨 Phantom-themed responsive UI

- 🚀 Easy integration for Solana dApps

- ⚡️ Fast transaction signing via web3.js

## Learn More

- [Project Demo](https://wallet-adapter-sol.vercel.app)

- [Solana Wallet Adapter Docs](https://github.com/solana-labs/wallet-adapter)

- [Web3.js Guide](https://solana-labs.github.io/solana-web3.js/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
