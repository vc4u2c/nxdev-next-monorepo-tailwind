import { render } from '@testing-library/react';
import Settings from './page';

describe('Profile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Settings />);
    expect(baseElement).toBeTruthy();
  });
});
