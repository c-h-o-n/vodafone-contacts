import { Fab, Icon } from 'native-base';
import { Entypo } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

export default function AddContactFabButton() {
  const navigation = useNavigation();
  return (
    <Fab
      onPress={() => navigation.navigate('CreateContact')}
      renderInPortal={false}
      shadow={2}
      size={16}
      icon={<Icon color="white" as={Entypo} name="plus" size="xl" />}
      bg={'primary'}
    />
  );
}
