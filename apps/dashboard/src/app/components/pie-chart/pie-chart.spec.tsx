import { render } from '@testing-library/react';

import PieChart from './pie-chart';

describe('PieChart', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PieChart />);
    expect(baseElement).toBeTruthy();
  });
});
