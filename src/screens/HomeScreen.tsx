import { Text, View } from 'native-base';

import { RootStackScreenProps } from '../navigation/types';

export default function HomeScreen({ navigation }: RootStackScreenProps<'Root'>) {
  return (
    <View alignItems="center" justifyContent="center">
      <Text>Home screen wih NativeBase!</Text>
    </View>
  );
}
