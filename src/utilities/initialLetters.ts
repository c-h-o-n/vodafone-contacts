import { Contact } from '../types/Contact';

/**
 *
 * @param contacts an array of {@link Contact}
 * @returns the initial letters of the names of the contact
 */
// eslint-disable-next-line import/prefer-default-export
export function getInitialLetters(contacts: Contact[]): Set<string> {
  const initialLetters: Set<string> = new Set();

  contacts.forEach((contact) => {
    initialLetters.add(contact.name.first[0].toUpperCase());
    initialLetters.add(contact.name.last[0].toUpperCase());
  });

  return initialLetters;
}
