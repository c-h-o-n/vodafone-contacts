/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Contact } from '../types/Contact';

// to make useNavigation() or <Link /> typesafe
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Home: NavigatorScreenParams<HomeStackParamList> | undefined;
  AddNewContact: undefined;
  NotFound: undefined;
};

export type HomeStackParamList = {
  ContactList: undefined;
  ContactDetails: { id: string };
  EditContact: { id: string; contact: Contact };
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type HomeStackScreenProps<Screen extends keyof HomeStackParamList> = NativeStackScreenProps<
  HomeStackParamList,
  Screen
>;
