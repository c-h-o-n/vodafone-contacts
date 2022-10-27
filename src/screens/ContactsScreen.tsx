import { AspectRatio, Box, Heading, Text, View } from 'native-base';

import Logo from '../assets/images/vodafone_logo.svg';
import { HomeStackScreenProps } from '../navigation/types';

export default function ContactsScreen({ navigation }: HomeStackScreenProps<'Contacts'>) {
  return (
    <View alignItems="center" p={10}>
      <AspectRatio ratio={{ base: 1177.9 / 311.8 }} height={'10%'}>
        <Logo />
      </AspectRatio>

      <Heading>Contacts</Heading>
      <Text>List of initials...</Text>
      <Box>
        <Text>List of all contacts...</Text>
      </Box>
    </View>
  );
}
