import { NavigationContainer } from '@react-navigation/native';

import LinkingConfiguration from './LinkingConfiguration';
import RootStackNavigator from './RootStackNavigator';

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootStackNavigator />
    </NavigationContainer>
  );
}
