import { useQuery } from '@tanstack/react-query';
import { Box, Center, Divider, Pressable, ScrollView, View, VStack } from 'native-base';
import { useMemo, useState } from 'react';

import ContactCard from '../components/ContactCard';
import ErrorMessage from '../components/ErrorMessage';
import Footer from '../components/Footer';
import Header from '../components/Header';
import InitialLetters from '../components/InitialLetters';
import LoadingSpinner from '../components/LoadingSpinner';

import { useContact } from '../context/ContactsContext';

import useApi from '../hooks/useApi';

import { HomeStackScreenProps } from '../navigation/types';
import { Contact } from '../types/Contact';
import { getInitialLetters } from '../utilities/initialLetters';

export default function ContactListScreen({ navigation }: HomeStackScreenProps<'ContactList'>) {
  const { getContacts } = useApi();
  const { contacts, addContact, getFilteredContacts } = useContact();

  const [sortByInitialLetter, setSortByInitialLetter] = useState('');
  const updateSelectedIntitialLetter = (letter: string) => {
    setSortByInitialLetter(letter);
  };

  const initials = useMemo(() => getInitialLetters(contacts), [contacts]);
  const filteredContacts = useMemo(
    () => getFilteredContacts(sortByInitialLetter),
    [sortByInitialLetter, getFilteredContacts]
  );

  const { isError, isLoading } = useQuery<Contact[], Error>(['contacts'], getContacts, {
    staleTime: Infinity, // to prevent automatic refetch
    onSuccess: (data) => {
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
        <InitialLetters
          initials={initials}
          updateSelected={updateSelectedIntitialLetter}
          selected={sortByInitialLetter}
        />
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
