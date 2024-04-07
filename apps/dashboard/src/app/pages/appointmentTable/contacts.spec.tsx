import { render } from '@testing-library/react';

import Contacts from './contacts';

describe('Contacts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Contacts />);
    expect(baseElement).toBeTruthy();
  });
});
