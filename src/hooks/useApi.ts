import { Contact } from '../types/Contact';

const baseUrl = 'https://randomuser.me/api';

export default function useApi() {
  const getContacts = async (): Promise<Contact[]> => {
    const numberOfContact = 9;
    const response = await fetch(`${baseUrl}/?results=${numberOfContact}`);

    if (!response.ok) {
      throw new Error('Error loading contacts');
    }
    const data: ApiResponse = await response.json();

    return data.results;
  };

  return {
    getContacts,
  };
}

interface ApiResponse {
  results: Contact[];
  info: Info;
}

interface Info {
  seed: string;
  results: number;
  page: number;
  version: string;
}
