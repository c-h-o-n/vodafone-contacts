import InitialLetters from '../../components/InitialLetters';
import { render } from '../../utilities/test-utils';

describe('initial letters', () => {
  it('renders correctly', () => {
    const inititals = new Set(['J', 'D', 'B', 'W']);

    const initialLetters = render(<InitialLetters initials={inititals} selected={''} updateSelected={() => {}} />);

    expect(initialLetters.toJSON()).toMatchSnapshot();
  });
});
