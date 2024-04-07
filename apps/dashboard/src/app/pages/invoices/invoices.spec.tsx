import { render } from '@testing-library/react';

import Invoices from './invoices';

describe('Invoices', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Invoices />);
    expect(baseElement).toBeTruthy();
  });
});
