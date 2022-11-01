import { Fab, Icon } from 'native-base';
import { Entypo } from '@expo/vector-icons';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import { RootStackParamList } from '../navigation/types';

export default function AddNewContactFAB() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <Fab
      onPress={() => navigation.push('AddNewContact')}
      renderInPortal={false}
      shadow={2}
      size={16}
      icon={<Icon color="white" as={Entypo} name="plus" size="xl" />}
      bg={'primary'}
      testID={'fab'}
    />
  );
}
