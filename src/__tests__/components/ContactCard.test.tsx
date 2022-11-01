import { v4 as uuidv4 } from 'uuid';

import ContactCard from '../../components/ContactCard';
import { Contact } from '../../types/Contact';

import { render } from '../../utilities/test-utils';

describe('contact card', () => {
  const contact: Contact = {
    id: uuidv4(),
    imageUrl: 'https://cdn.vodafone.co.uk/en/assets/images/large2X/IMG_Tech_Team_Tobi.jpg',

    name: {
      first: 'John',
      last: 'Doe',
    },
    email: 'john.doe@gmail.com',
    phone: '06 70 1234 567',
    address: '123 Sesame Street, Manhattan, New York',
  };

  it('renders correctly', () => {
    const header = render(<ContactCard contact={contact} />);

    expect(header.toJSON()).toMatchSnapshot();
  });
});
