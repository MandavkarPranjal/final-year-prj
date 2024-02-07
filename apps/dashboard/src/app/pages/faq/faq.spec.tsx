import { render } from '@testing-library/react';

import FAQ from './faq';

describe('FAQ', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FAQ />);
    expect(baseElement).toBeTruthy();
  });
});
