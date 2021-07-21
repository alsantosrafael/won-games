import { render, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Button from '.';

describe('<Button />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Button>Button</Button>);

    expect(screen.getByRole('button', { name: /Button/i })).toBeInTheDocument();
  });
});
