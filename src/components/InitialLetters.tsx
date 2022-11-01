import { HStack, Text } from 'native-base';
import { Pressable } from 'react-native';

type InitialsProps = {
  initials: Set<string>;
  selected: string;
  updateSelected: (letter: string) => void;
};

export default function InitialLetters({ initials, selected, updateSelected }: InitialsProps) {
  return (
    <HStack flexWrap={'wrap'} space={4} justifyContent={'center'}>
      {[...initials].sort().map((initial) => (
        <Pressable key={initial} onPress={() => updateSelected(initial)}>
          <Text fontWeight={'bold'} fontSize={'2xl'} color={initial === selected ? 'black' : 'gray.500'}>
            {initial}
          </Text>
        </Pressable>
      ))}

      <Pressable onPress={() => updateSelected('')}>
        <Text fontWeight={'bold'} fontSize={'2xl'} color={selected === '' ? 'black' : 'gray.500'}>
          [ALL]
        </Text>
      </Pressable>
    </HStack>
  );
}
