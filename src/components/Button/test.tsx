import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Button from '.';
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';

describe('<Button />', () => {
  it('it should render the medium sized button by default', () => {
    const { container } = renderWithTheme(<Button>Button</Button>);

    expect(screen.getByRole('button', { name: /Button/i })).toHaveStyle({
      height: '4rem',
      fontSize: '1.4rem',
      padding: '0.8rem 3.2rem',
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('it should render a full width button when prop is passed', () => {
    renderWithTheme(<Button fullWidth>Button</Button>);

    expect(screen.getByRole('button', { name: /Button/i })).toHaveStyle({
      width: '100%',
    });
  });

  it('should render an icon version of the button when prop is passed', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Button</Button>,
    );

    expect(screen.getByText(/Button/i)).toBeInTheDocument();
    expect(screen.getByTestId(/icon/i)).toBeInTheDocument();
  });

  it('should render the larg sized button when when prop size =  large is passed', () => {
    renderWithTheme(<Button size="large">Button</Button>);

    expect(screen.getByRole('button', { name: /Button/i })).toHaveStyle({
      height: '5rem',
      fontSize: '1.6rem',
      padding: '0.8rem 4.8rem',
    });
  });

  it('should render the small sized button when prop size = small is passed', () => {
    renderWithTheme(<Button size="small">Button</Button>);

    expect(screen.getByRole('button', { name: /Button/i })).toHaveStyle({
      height: '3rem',
      fontSize: '1.2rem',
      padding: '0.8rem',
    });
  });

  it('should render Button as a link', () => {
    renderWithTheme(<Button as="a" href="/fake-link">Buy now</Button>)
    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/fake-link'
    )
  })

  it('should render Button as a link', () => {
    const { debug, container } = renderWithTheme(<Button as="a" href="/fake-link">Buy now</Button>)
    debug(container)
  })
});
