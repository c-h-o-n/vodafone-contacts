import { Box, Button, Center, HStack, Image, Text, View, VStack } from 'native-base';
import { useMemo } from 'react';

import ErrorMessage from '../components/ErrorMessage';
import Footer from '../components/Footer';
import Header from '../components/Header';

import { useContact } from '../context/ContactsContext';

import { HomeStackScreenProps } from '../navigation/types';

export default function ContactDetailsScreen({ route, navigation }: HomeStackScreenProps<'ContactDetails'>) {
  const { id } = route.params;

  const { deleteContact, getContact } = useContact();
  const contact = useMemo(() => getContact(id), [getContact, id]);

  const onEdit = () => {
    if (!contact) {
      return;
    }
    navigation.push('EditContact', { contact });
  };

  const onDelete = () => {
    deleteContact(id);
    navigation.popToTop();
  };

  if (!contact) {
    return (
      <View>
        <Center flex={1}>
          <ErrorMessage message="Contact not found!" />
        </Center>
      </View>
    );
  }

  return (
    <View>
      <Box pb={12}>
        <Header title={`${contact.name.first} ${contact.name.last}'s Profile`} />
      </Box>

      <Box flex={1} justifyContent={'space-between'}>
        <VStack alignItems={'center'} space={8}>
          <Image
            source={{
              uri: contact.imageUrl,
            }}
            alt={`${contact.name.first}-${contact.name.last}-avatar`}
            size={'xl'}
          />

          <VStack space={2} alignItems={'center'}>
            <Text fontWeight={'bold'} textAlign={'center'}>
              Email: <Text color={'primary'}>{contact.email}</Text>
            </Text>

            <Text fontWeight={'bold'} textAlign={'center'}>
              Phone: {contact.phone}
            </Text>

            <Text fontWeight={'bold'} textAlign={'center'}>
              Address: {contact.address}
            </Text>
          </VStack>
          <HStack w={'100%'} justifyContent={'center'} space={10}>
            <Button variant={'outline'} borderColor={'red.400'} colorScheme={'red'} onPress={onDelete}>
              Delete
            </Button>

            <Button variant={'outline'} borderColor={'black'} colorScheme={'black'} onPress={onEdit}>
              Edit
            </Button>
          </HStack>
        </VStack>

        <Footer />
      </Box>
    </View>
  );
}
