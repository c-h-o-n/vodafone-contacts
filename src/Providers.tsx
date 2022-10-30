import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NativeBaseProvider } from 'native-base';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ContactProvider } from './context/ContactsContext';

import theme from './theme';

interface ProvidersProps {
  children: ReactNode;
}

const queryClient = new QueryClient();

export default function Providers({ children }: ProvidersProps) {
  return (
    <SafeAreaProvider>
      <ContactProvider>
        <QueryClientProvider client={queryClient}>
          <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>
        </QueryClientProvider>
      </ContactProvider>
    </SafeAreaProvider>
  );
}
