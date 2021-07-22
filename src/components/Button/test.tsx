import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Button from '.';

describe('<Button />', () => {
  it('it should render the medium sized button by default', () => {
    renderWithTheme(<Button>Button</Button>);

    expect(screen.getByRole('button', { name: /Button/i })).toHaveStyle({
      height: '4rem',
      fontSize: '1.4rem',
      padding: '0.8rem 3.2rem',
    });
  });

  it('it should render a full width button when prop is passed', () => {
    renderWithTheme(<Button fullWidth>Button</Button>);

    expect(screen.getByRole('button', { name: /Button/i })).toHaveStyle({
      width: '100%',
    });
  });

  it('it should render the larg sized button when when prop size =  large is passed', () => {
    renderWithTheme(<Button size="large">Button</Button>);

    expect(screen.getByRole('button', { name: /Button/i })).toHaveStyle({
      height: '5rem',
      fontSize: '1.6rem',
      padding: '0.8rem 4.8rem',
    });
  });

  it('it should render the small sized button when prop size = small is passed', () => {
    renderWithTheme(<Button size="small">Button</Button>);

    expect(screen.getByRole('button', { name: /Button/i })).toHaveStyle({
      height: '3rem',
      fontSize: '1.2rem',
      padding: '0.8rem',
    });
  });
});
