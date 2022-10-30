import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

import { Contact } from '../types/Contact';

interface ContactContext {
  contacts: Contact[];
  loadContacts: (newContacts: Contact[]) => void;
  addContact: (contact: Contact) => void;
  getContact: (id: string) => Contact | undefined;
  updateContact: (id: string, updatedContact: Partial<Contact>) => void;
  deleteContact: (id: string) => void;
}

const ContactContext = createContext({} as ContactContext);

export function useContact() {
  return useContext(ContactContext);
}

interface ContactProviderPops {
  children: ReactNode;
}

export function ContactProvider({ children }: ContactProviderPops) {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const value = useMemo<ContactContext>(() => {
    const loadContacts = (newContacts: Contact[]): void => {
      setContacts(newContacts);
    };

    const addContact = (contact: Contact): void => {
      setContacts((currentContacts) => [...currentContacts, contact]);
    };

    const getContact = (id: string): Contact | undefined => {
      return contacts.find((contact) => contact.id === id);
    };

    const updateContact = (id: string, updatedContact: Partial<Contact>): void => {
      setContacts((currentContacts) =>
        currentContacts.map((contact) => (contact.id === id ? { ...contact, ...updatedContact } : contact))
      );
    };

    const deleteContact = (id: string): void => {
      setContacts((currentContacts) => currentContacts.filter((contact) => contact.id !== id));
    };

    return {
      contacts,
      loadContacts,
      addContact,
      deleteContact,
      getContact,
      updateContact,
    };
  }, [contacts]);

  return <ContactContext.Provider value={value}>{children}</ContactContext.Provider>;
}
