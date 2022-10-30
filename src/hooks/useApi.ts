import { ApiResponse } from '../types/ApiResponse';
import { Contact } from '../types/Contact';

const baseUrl = 'https://randomuser.me/api';

export default function useApi() {
  const getContacts = async (): Promise<Contact[]> => {
    const numberOfContact = 9;
    const response = await fetch(`${baseUrl}/?results=${numberOfContact}`);

    if (!response.ok) {
      throw new Error('Error fetchingz contacts');
    }

    const data: ApiResponse = await response.json();

    const contacts: Contact[] = [];
    data.results.forEach((apiResult) => {
      contacts.push({
        id: apiResult.login.uuid,
        name: {
          first: apiResult.name.first,
          last: apiResult.name.last,
        },
        imageUrl: apiResult.picture.large,
        email: apiResult.email,
        phone: apiResult.phone,
        address: `${apiResult.location.street.name} ${apiResult.location.street.number}, ${apiResult.location.city}, ${apiResult.location.state}`,
      });
    });

    return contacts;
  };

  return {
    getContacts,
  };
}
