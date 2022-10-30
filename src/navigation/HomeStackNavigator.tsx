import { createStackNavigator } from '@react-navigation/stack';

import { Box, View } from 'native-base';

import AddNewContactFAB from '../components/AddNewContactFAB';

// screens
import ContactDetailsScreen from '../screens/ContactDetailsScreen';
import EditContactScreen from '../screens/EditContactScreen';
import ContactListScreen from '../screens/ContactListScreen';

import { HomeStackParamList } from './types';

const Stack = createStackNavigator<HomeStackParamList>();

export default function HomeStackNavigator() {
  return (
    <View>
      <Stack.Navigator initialRouteName="ContactList" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ContactList" component={ContactListScreen} />
        <Stack.Screen name="ContactDetails" component={ContactDetailsScreen} />
        <Stack.Screen name="EditContact" component={EditContactScreen} />
      </Stack.Navigator>
      <Box position={'absolute'} bottom={10} right={4}>
        <AddNewContactFAB />
      </Box>
    </View>
  );
}
