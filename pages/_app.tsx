import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { optimism, base, sepolia } from 'wagmi/chains';
import { getDefaultConfig, RainbowKitProvider, midnightTheme } from '@rainbow-me/rainbowkit';

const config = getDefaultConfig({
  appName: 'RainbowKit App',
  projectId: 'YOUR_PROJECT_ID', // Replace with your actual project ID
  chains: [
    optimism,
    base,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
  ],
  ssr: true,
});

const client = new QueryClient();

// Update custom theme specifically for the ConnectButton
const customTheme = midnightTheme({
  colors: {
    accentColor: '#F28F6B', // This is your primary accent color
    accentColorForeground: 'white', // Ensures text on the button is legible
    connectButtonBackground: '#F28F6B', // Sets the background of the connect button
    connectButtonBackgroundHover: '#F2836B', // Slightly different shade for hover effect
    connectButtonText: 'white', // Text color for the connect button
    // Adjust other colors as necessary
  },
  // Further customization options can be added here
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
