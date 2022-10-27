import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Box, Text, View } from 'native-base';

import AddNewContactFAB from '../components/AddNewContactFAB';

// screens
import ContactDetailsScreen from '../screens/ContactDetailsScreen';
import EditContactScreen from '../screens/EditContactScreen';
import ContactListScreen from '../screens/ContactListScreen';

import { HomeStackParamList } from './types';

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStackNavigator() {
  return (
    <View>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Contacts" component={ContactListScreen} />
        <Stack.Screen name="ContactDetails" component={ContactDetailsScreen} />
        <Stack.Screen name="EditContact" component={EditContactScreen} />
      </Stack.Navigator>
      <Box position={'absolute'} bottom={10} right={4}>
        <AddNewContactFAB />
      </Box>
      <Text fontWeight={'bold'} textAlign={'center'} mb={6}>
        All Rights Reserved _VOIS 2022
      </Text>
    </View>
  );
}
