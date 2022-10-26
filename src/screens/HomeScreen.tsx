import { StyleSheet, Text, View } from 'react-native';

import { RootStackScreenProps } from '../navigation/types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});

export default function HomeScreen({ navigation }: RootStackScreenProps<'Root'>) {
  return (
    <View style={styles.container}>
      <Text>Home works!</Text>
    </View>
  );
}
