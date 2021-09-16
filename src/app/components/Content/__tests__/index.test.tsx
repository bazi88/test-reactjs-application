import * as React from 'react';
import { render } from '@testing-library/react';

import { Content } from '..';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe('<Content  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Content />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
