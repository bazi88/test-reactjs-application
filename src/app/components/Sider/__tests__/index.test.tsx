import * as React from 'react';
import { render } from '@testing-library/react';

import { SiderComponent } from '..';

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

describe('<SiderComponent  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<SiderComponent />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
