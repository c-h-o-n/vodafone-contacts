import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AspectRatio, View } from 'native-base';

import Logo from '../assets/images/vodafone_logo.svg';

import AddNewContactScreen from '../screens/AddNewContactScreen';

import NotFoundScreen from '../screens/NotFoundScreen';

import HomeStackNavigator from './HomeStackNavigator';

import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  return (
    <View>
      <AspectRatio ratio={{ base: 1177.9 / 311.8 }} w={'100%'} maxH={'33%'}>
        <Logo />
      </AspectRatio>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeStackNavigator} />
        <Stack.Screen name="NotFound" component={NotFoundScreen} />
        <Stack.Screen name="CreateContact" component={AddNewContactScreen} />
      </Stack.Navigator>
    </View>
  );
}
