import { createStackNavigator, TransitionPresets, TransitionSpecs } from '@react-navigation/stack';
import { View } from 'native-base';

import AddNewContactScreen from '../screens/AddNewContactScreen';

import NotFoundScreen from '../screens/NotFoundScreen';

import HomeStackNavigator from './HomeStackNavigator';

import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  return (
    <View>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}>
        <Stack.Screen name="Home" component={HomeStackNavigator} />
        <Stack.Screen name="AddNewContact" component={AddNewContactScreen} />

        <Stack.Screen name="NotFound" component={NotFoundScreen} />
      </Stack.Navigator>
    </View>
  );
}
