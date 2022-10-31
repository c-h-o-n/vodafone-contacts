import { Box, HStack, Image, Text, VStack } from 'native-base';

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
        <VStack flex={1} space={2}>
          <Text fontWeight={'bold'} textAlign={'left'} fontSize={'md'} mb={1}>
            {contact.name.first},{contact.name.last}
          </Text>
          <Text fontWeight={'semibold'} color={'gray.700'}>
            {contact.email}
          </Text>
          <Text fontWeight={'semibold'} color={'gray.700'}>
            {contact.phone}
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
}
