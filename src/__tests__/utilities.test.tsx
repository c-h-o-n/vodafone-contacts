import { v4 as uuidv4 } from 'uuid';

import { Contact } from '../types/Contact';
import { getInitialLetters } from '../utilities/initialLetters';

describe('getInitialLetters()', () => {
  it('should return with correct initial letters', async () => {
    const contacts: Contact[] = [
      {
        id: uuidv4(),
        imageUrl: 'https://cdn.vodafone.co.uk/en/assets/images/large2X/IMG_Tech_Team_Tobi.jpg',

        name: {
          first: 'John',
          last: 'Doe',
        },
        email: 'john.doe@gmail.com',
        phone: '06 70 1234 567',
        address: '123 Sesame Street, Manhattan, New York',
      },
      {
        id: uuidv4(),
        imageUrl: 'https://cdn.vodafone.co.uk/en/assets/images/large2X/IMG_Tech_Team_Tobi.jpg',

        name: {
          first: 'Bruce',
          last: 'Wayne',
        },
        email: 'not.batman@gmail.com',
        phone: '06 70 1234 567',
        address: '1007 Mountain Drive (Batcave), Gotham',
      },
    ];

    expect(getInitialLetters(contacts)).toStrictEqual(new Set(['J', 'D', 'B', 'W']));
  });
});
