import { useQuery } from '@tanstack/react-query';
import { Box, Center, Divider, Heading, Pressable, ScrollView, View, VStack } from 'native-base';
import { useMemo, useState } from 'react';

import ContactCard from '../components/ContactCard';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Initials from '../components/Initials';

import { useContact } from '../context/ContactsContext';

import useApi from '../hooks/useApi';

import { HomeStackScreenProps } from '../navigation/types';
import { Contact } from '../types/Contact';
import { getInitialLeters } from '../utilities';

export default function ContactListScreen({ navigation }: HomeStackScreenProps<'ContactList'>) {
  const { getContacts } = useApi();
  const { loadContacts, contacts } = useContact();

  const [sortByInitial, setSortByInitial] = useState('');
  const updateSelectedIntitial = (letter: string) => {
    setSortByInitial(letter);
  };

  const initials = useMemo(() => getInitialLeters(contacts), [contacts]);

  const { isError, isLoading } = useQuery<Contact[], Error>(['contacts'], getContacts, {
    staleTime: Infinity, // to prevent automatic refetch
    onSuccess: (data) => {
      console.log('data loaded');
      loadContacts(data);
    },
  });

  // TODO loading spinner
  if (isLoading) {
    return (
      <View>
        <Center>
          <Heading>Loading..</Heading>
        </Center>
      </View>
    );
  }
  // TODO error message
  if (isError) {
    return (
      <View>
        <Center>
          <Heading>AJAJAJAJAJ</Heading>
        </Center>
      </View>
    );
  }

  return (
    <View>
      <Box pb={6}>
        <Header title="Contacts" />
      </Box>

      <Box pb={4}>
        <Initials initials={initials} updateSelectedIntitial={updateSelectedIntitial} sortByInitial={sortByInitial} />
        <Divider h={1} bg={'gray.300'} rounded={'2xl'} />
      </Box>

      <ScrollView p={2} w={'100%'}>
        <VStack space={8}>
          {contacts
            .filter(
              (contact) =>
                !sortByInitial ||
                contact.name.last[0].toUpperCase() === sortByInitial.toUpperCase() ||
                contact.name.first[0].toUpperCase() === sortByInitial.toUpperCase()
            )
            .map((contact) => (
              <Pressable
                key={contact.id}
                onPress={() => {
                  navigation.push('ContactDetails', { id: contact.id });
                }}>
                <ContactCard contact={contact} />
              </Pressable>
            ))}
        </VStack>

        <Footer />
      </ScrollView>
    </View>
  );
}
