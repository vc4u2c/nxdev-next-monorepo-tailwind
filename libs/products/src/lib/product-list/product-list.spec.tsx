import { render } from '@testing-library/react';
import ProductList from './product-list';
import React from 'react';

describe('ProductList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductList name="Product List" />);
    expect(baseElement).toBeTruthy();
  });
});
