import { AspectRatio, Box, Center } from 'native-base';
import { StatusBar } from 'expo-status-bar';

import Logo from './assets/images/vodafone_logo.svg';

import Navigation from './navigation';

export default function Layout() {
  return (
    <>
      <Box safeAreaTop flex={1} bg="background">
        <Center>
          <AspectRatio ratio={{ base: 1177.9 / 311.8 }} w={'100%'} maxH={'66%'}>
            <Logo />
          </AspectRatio>
        </Center>

        <Navigation />
      </Box>

      <StatusBar />
    </>
  );
}
