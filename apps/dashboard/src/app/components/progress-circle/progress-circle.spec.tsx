import { render } from '@testing-library/react';

import ProgressCircle from './progress-circle';

describe('ProgressCircle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProgressCircle />);
    expect(baseElement).toBeTruthy();
  });
});
