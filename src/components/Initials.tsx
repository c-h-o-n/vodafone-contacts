import { HStack, Text } from 'native-base';
import { Pressable } from 'react-native';

type InitialsProps = {
  initials: Set<string>;
  sortByInitial: string;
  updateSelectedIntitial: (letter: string) => void;
};

export default function Initials({ initials, updateSelectedIntitial, sortByInitial }: InitialsProps) {
  return (
    <HStack flexWrap={'wrap'} space={2} justifyContent={'center'}>
      {[...initials].sort().map((initial) => (
        <Pressable key={initial} onPress={() => updateSelectedIntitial(initial)}>
          <Text fontWeight={'bold'} fontSize={'2xl'} color={initial === sortByInitial ? 'black' : 'gray.400'}>
            {initial}
          </Text>
        </Pressable>
      ))}

      <Pressable onPress={() => updateSelectedIntitial('')}>
        <Text fontWeight={'bold'} fontSize={'2xl'} color={sortByInitial === '' ? 'black' : 'gray.400'}>
          [ALL]
        </Text>
      </Pressable>
    </HStack>
  );
}
