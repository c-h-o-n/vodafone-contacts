import { Box, HStack, Image, Text } from 'native-base';

import { Contact } from '../types/Contact';

type ContactCardProps = {
  contact: Contact;
};

export default function ContactCard({ contact }: ContactCardProps) {
  return (
    <Box background={'background'} p={2} mx={2} shadow={4} borderRadius="md">
      <HStack space={2}>
        <Image
          source={{
            uri: contact.imageUrl,
          }}
          alt={`${contact.name.first}-${contact.name.last}-avatar`}
          size="xl"
        />
        <Box flex={1}>
          <Text textAlign={'left'} fontWeight={'bold'}>
            {contact.name.first},{contact.name.last}
          </Text>
          <Text>{contact.email}</Text>
          <Text>{contact.phone}</Text>
        </Box>
      </HStack>
    </Box>
  );
}
