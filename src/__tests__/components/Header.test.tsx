import Header from '../../components/Header';

import { render } from '../../utilities/test-utils';

describe('header', () => {
  it('renders correctly', () => {
    const fab = render(<Header title="Test title" />);

    expect(fab.toJSON()).toMatchSnapshot();
  });
});
