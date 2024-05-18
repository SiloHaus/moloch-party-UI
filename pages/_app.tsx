// _app.tsx

// IMPORTS
import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { optimism, base, sepolia } from 'wagmi/chains';
import { getDefaultConfig, RainbowKitProvider, midnightTheme } from '@rainbow-me/rainbowkit';

const config = getDefaultConfig({
  appName: 'Moloch.Party',
  projectId: 'MOLOCH_PARTY',
  chains: [
    optimism,
  ],
  ssr: true,
});

// TANSTACK
const client = new QueryClient();

// RAINBOWKIT | Connect Theme
const customTheme = midnightTheme({
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        <RainbowKitProvider theme={customTheme}>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default MyApp;