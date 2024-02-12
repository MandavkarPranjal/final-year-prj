import { render } from '@testing-library/react';

import StatBox from './stat-box';

describe('StatBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StatBox />);
    expect(baseElement).toBeTruthy();
  });
});
