import { render } from '@testing-library/react';

import AiBot from './ai-bot';

describe('AiBot', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AiBot />);
    expect(baseElement).toBeTruthy();
  });
});
