import { render } from '@testing-library/react';
import OrderList from './order-list';
import React from 'react';

describe('OrderList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OrderList name="Order List"/>);
    expect(baseElement).toBeTruthy();
  });
});
