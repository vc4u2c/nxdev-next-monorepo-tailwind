import { render } from '@testing-library/react';
import OrderDetails from './order-details';
import React from 'react';

describe('OrderDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OrderDetails />);
    expect(baseElement).toBeTruthy();
  });
});
