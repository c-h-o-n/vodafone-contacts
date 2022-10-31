import { Heading, HStack, Spinner } from 'native-base';

export default function LoadingSpinner() {
  return (
    <HStack space={2} justifyContent="center">
      <Spinner />

      <Heading color="primary.500" fontSize="md">
        Loading
      </Heading>
    </HStack>
  );
}
