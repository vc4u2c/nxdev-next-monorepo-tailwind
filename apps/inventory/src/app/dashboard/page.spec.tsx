import { render } from '@testing-library/react';
import Dashboard from './page';

describe('Profile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dashboard />);
    expect(baseElement).toBeTruthy();
  });
});
