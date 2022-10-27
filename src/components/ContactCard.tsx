import { Box, HStack, Image, Text } from 'native-base';

import { Contact } from '../types/Contact';

type ContactCardProps = {
  contact: Contact;
};

export default function ContactCard({ contact }: ContactCardProps) {
  return (
    <HStack background={'background'} space={2} p={4} shadow={'4'} borderRadius="md">
      <Image
        source={{
          uri: contact.picture.large,
        }}
        alt={`${contact.name.first}-${contact.name.last}-avatar`}
        size="lg"
      />
      <Box flex={1}>
        <Text fontWeight={'bold'}>
          {contact.name.first},{contact.name.last}
        </Text>
        <Text>{contact.email}loremwpeepawerokrd</Text>
        <Text>{contact.phone}</Text>
      </Box>
    </HStack>
  );
}
