import { render } from '@testing-library/react';
import Orders from './page';

describe('Orders', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Orders />);
    expect(baseElement).toBeTruthy();
  });
});
