import { Box, Button, Center, HStack, Image, Text, View, VStack } from 'native-base';
import { useMemo } from 'react';

import ErrorMessage from '../components/ErrorMessage';
import Header from '../components/Header';

import { useContact } from '../context/ContactsContext';

import { HomeStackScreenProps } from '../navigation/types';

export default function ContactDetailsScreen({ route, navigation }: HomeStackScreenProps<'ContactDetails'>) {
  const { id } = route.params;

  const { deleteContact, getContact } = useContact();
  const contact = useMemo(() => getContact(id), [getContact, id]);

  if (!contact) {
    return (
      <View>
        <Center flex={1}>
          <ErrorMessage message="Contact not found!" />
        </Center>
      </View>
    );
  }

  const onEdit = () => {
    navigation.push('EditContact', { id, contact });
  };

  const onDelete = () => {
    deleteContact(id);
    navigation.popToTop();
  };

  return (
    <View justifyContent={'space-between'}>
      <Box pb={4}>
        <Header title={`${contact.name.first} ${contact.name.last}'s Profile`} />
      </Box>

      <VStack alignItems={'center'} space={12}>
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

      <Text fontWeight={'bold'} textAlign={'center'} mb={6}>
        All Rights Reserved _VOIS 2022
      </Text>
    </View>
  );
}
