import { AspectRatio, Box } from 'native-base';
import { StatusBar } from 'expo-status-bar';

import Logo from './assets/images/vodafone_logo.svg';

import Navigation from './navigation';

export default function Layout() {
  return (
    <>
      <Box safeAreaTop flex={1} bg="background">
        <AspectRatio ratio={{ base: 1177.9 / 311.8 }} w={'100%'} maxH={'33%'}>
          <Logo />
        </AspectRatio>

        <Navigation />
      </Box>

      <StatusBar />
    </>
  );
}
