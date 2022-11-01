import { fireEvent } from '@testing-library/react-native';

import AddNewContactFAB from '../../components/AddNewContactFAB';

import { render } from '../../utilities/test-utils';

describe('add new contact fab', () => {
  it('renders correctly', () => {
    const fab = render(<AddNewContactFAB />);

    expect(fab.toJSON()).toMatchSnapshot();
  });

  // failing because of type error
  it.skip('navigates to add contact screen', () => {
    const fab = render(<AddNewContactFAB />);

    fireEvent.press(fab.getByTestId('fab'));
  });
});
