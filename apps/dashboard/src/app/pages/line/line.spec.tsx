import { render } from '@testing-library/react';

import Line from './line';

describe('Line', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Line />);
    expect(baseElement).toBeTruthy();
  });
});
