import { Contact } from './types/Contact';

// eslint-disable-next-line import/prefer-default-export
export function getInitialLeters(contacts: Contact[]): Set<string> {
  const initialLetters: Set<string> = new Set();

  contacts.forEach((contact) => {
    initialLetters.add(contact.name.first[0].toUpperCase());
    initialLetters.add(contact.name.last[0].toUpperCase());
  });

  console.log('initials', initialLetters);

  return initialLetters;
}
