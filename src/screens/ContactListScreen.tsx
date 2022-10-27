import { useQuery } from '@tanstack/react-query';
import { Center, Heading, Pressable, ScrollView, Text, View, VStack } from 'native-base';
import { useEffect, useState } from 'react';

import ContactCard from '../components/ContactCard';
import Initials from '../components/Initials';
import useApi from '../hooks/useApi';
import { HomeStackScreenProps } from '../navigation/types';
import { Contact } from '../types/Contact';

export default function ContactListScreen({ navigation }: HomeStackScreenProps<'Contacts'>) {
  const { getContacts } = useApi();
  const { data, isError, isLoading } = useQuery<Contact[], Error>(['contacts'], getContacts);

  const [sortByInitial, setSortByInitial] = useState('');
  const [initials, setInitials] = useState(new Set<string>());

  useEffect(() => {
    const getInitials = () => {
      const initialsArray: string[] = [];
      data?.forEach((contact) => {
        initialsArray.push(contact.name.first[0], contact.name.last[0]);
      });

      return new Set(initialsArray);
    };

    if (data) {
      setInitials(getInitials());
    }
  }, [data]);

  const updateSelectedIntitial = (letter: string) => {
    setSortByInitial(letter);
  };

  if (isLoading) {
    return (
      <View>
        <Center>
          <Heading>Loading..</Heading>
        </Center>
      </View>
    );
  }

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
      <Center>
        <Heading fontSize={'4xl'}>Contacts</Heading>

        <Initials initials={initials} updateSelectedIntitial={updateSelectedIntitial} sortByInitial={sortByInitial} />

        <ScrollView p={2} w={'100%'}>
          <VStack space={'12'} py={4} px={2}>
            {data
              .filter(
                (contact) =>
                  !sortByInitial || contact.name.last[0] === sortByInitial || contact.name.first[0] === sortByInitial
              )
              .map((contact) => (
                <Pressable
                  key={contact.login.uuid}
                  onPress={() => {
                    navigation.navigate('ContactDetails', { id: contact.login.uuid, contact });
                  }}>
                  <ContactCard contact={contact} />
                </Pressable>
              ))}
          </VStack>
        </ScrollView>
      </Center>
    </View>
  );
}
