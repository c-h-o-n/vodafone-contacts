/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from './types';

// TODO add full linking config
const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Home: {
        screens: {
          Contacts: {
            screens: {
              ContactsScreen: '',
            },
          },
        },
      },
      CreateContact: {
        screens: {
          CreateContactScreen: 'create',
        },
      },
      NotFound: '*',
    },
  },
};

export default linking;
