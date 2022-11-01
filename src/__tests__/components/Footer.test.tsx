import Footer from '../../components/Footer';

import { render } from '../../utilities/test-utils';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('footer', () => {
  it('renders corretly ', () => {
    const footer = render(<Footer />);

    expect(footer.toJSON()).toMatchSnapshot();
  });
});
