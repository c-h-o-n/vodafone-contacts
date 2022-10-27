import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Box } from 'native-base';

import AddContactFabButton from '../components/AddContactFabButton';

// screens
import ContactDetailsScreen from '../screens/ContactDetailsScreen';
import EditContactScreen from '../screens/EditContactScreen';
import ContactsScreen from '../screens/ContactsScreen';

import { HomeStackParamList } from './types';

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStackNavigator() {
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Contacts" component={ContactsScreen} />
        <Stack.Screen name="ContactDetails" component={ContactDetailsScreen} />
        <Stack.Screen name="EditContact" component={EditContactScreen} />
      </Stack.Navigator>
      <Box position={'absolute'} bottom={10} right={4}>
        <AddContactFabButton />
      </Box>
    </>
  );
}
