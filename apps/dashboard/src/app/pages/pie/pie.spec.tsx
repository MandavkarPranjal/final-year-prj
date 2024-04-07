import { render } from '@testing-library/react';

import Pie from './pie';

describe('Pie', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Pie />);
    expect(baseElement).toBeTruthy();
  });
});
