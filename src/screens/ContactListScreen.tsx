import { useQuery } from '@tanstack/react-query';
import { Box, Center, Divider, Pressable, ScrollView, View, VStack } from 'native-base';
import { useMemo, useState } from 'react';

import ContactCard from '../components/ContactCard';
import ErrorMessage from '../components/ErrorMessage';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Initials from '../components/Initials';
import LoadingSpinner from '../components/LoadingSpinner';

import { useContact } from '../context/ContactsContext';

import useApi from '../hooks/useApi';

import { HomeStackScreenProps } from '../navigation/types';
import { Contact } from '../types/Contact';
import { getInitialLeters } from '../utilities';

export default function ContactListScreen({ navigation }: HomeStackScreenProps<'ContactList'>) {
  const { getContacts } = useApi();
  const { contacts, addContact, getFilteredContacts } = useContact();

  const [sortByInitial, setSortByInitial] = useState('');
  const updateSelectedIntitial = (letter: string) => {
    setSortByInitial(letter);
  };

  const initials = useMemo(() => getInitialLeters(contacts), [contacts]);
  const filteredContacts = useMemo(() => getFilteredContacts(sortByInitial), [sortByInitial, getFilteredContacts]);

  const { isError, isLoading } = useQuery<Contact[], Error>(['contacts'], getContacts, {
    staleTime: Infinity, // to prevent automatic refetch
    onSuccess: (data) => {
      console.log('data loaded');
      addContact(data);
    },
  });

  if (isLoading) {
    return (
      <View>
        <Center flex={1}>
          <LoadingSpinner />
        </Center>
      </View>
    );
  }

  if (isError) {
    return (
      <View>
        <Center flex={1}>
          <ErrorMessage message="Failed to fetch contacts." />
        </Center>
      </View>
    );
  }

  return (
    <View>
      <Box pb={6}>
        <Header title="Contacts" />
      </Box>

      <Box p={4}>
        <Initials initials={initials} updateSelectedIntitial={updateSelectedIntitial} sortByInitial={sortByInitial} />
        <Divider h={1} bg={'gray.300'} rounded={'2xl'} />
      </Box>

      <ScrollView p={2} w={'100%'} _contentContainerStyle={{ flexGrow: 1 }}>
        <Box flex={1} justifyContent={'space-between'}>
          <VStack space={8}>
            {filteredContacts.map((contact) => (
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
        </Box>
      </ScrollView>
    </View>
  );
}
