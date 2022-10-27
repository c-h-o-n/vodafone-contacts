import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';
import { Box, NativeBaseProvider } from 'native-base';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import theme from './theme';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }

  const queryClient = new QueryClient();

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <NativeBaseProvider theme={theme}>
          <Box safeAreaTop flex={1} bg="background">
            <Navigation />
          </Box>
        </NativeBaseProvider>
      </QueryClientProvider>
      <StatusBar />
    </SafeAreaProvider>
  );
}
