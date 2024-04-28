import { render } from '@testing-library/react';
import SharedUi from './shared-ui';
import React from 'react';

describe('SharedUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUi name="Share UI"/>);
    expect(baseElement).toBeTruthy();
  });
});
