import { Button, Heading, HStack, Image, Text, View, VStack } from 'native-base';

import { HomeStackScreenProps } from '../navigation/types';

export default function ContactDetailsScreen({
  route: {
    params: { contact, id },
  },
  navigation,
}: HomeStackScreenProps<'ContactDetails'>) {
  return (
    <View>
      <VStack alignItems={'center'} space={12}>
        <Heading fontSize={'4xl'} textAlign={'center'}>
          {contact.name.first} {contact.name.last}'s Profile
        </Heading>

        <Image
          source={{
            uri: contact.picture.large,
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
            Address: {contact.location.street.name} {contact.location.street.number}, {contact.location.city},{' '}
            {contact.location.state}
          </Text>
        </VStack>
        <HStack w={'100%'} justifyContent={'center'} space={10}>
          <Button
            variant={'outline'}
            borderColor={'red.400'}
            colorScheme={'red'}
            onPress={() => console.log('delete by id => replace nav to contact list')}>
            Delete
          </Button>

          <Button
            variant={'outline'}
            borderColor={'black'}
            colorScheme={'black'}
            onPress={() => navigation.navigate('EditContact', { contact })}>
            Edit
          </Button>
        </HStack>
      </VStack>
    </View>
  );
}
