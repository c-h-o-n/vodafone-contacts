import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AddNewContactScreen from '../screens/AddNewContactScreen';

import NotFoundScreen from '../screens/NotFoundScreen';

import HomeStackNavigator from './HomeStackNavigator';

import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeStackNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} />
      <Stack.Screen name="CreateContact" component={AddNewContactScreen} />
    </Stack.Navigator>
  );
}
