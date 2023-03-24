import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Ribbon from '.';

describe('<Ribbon />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>)
    expect(screen.getByText(/best seller/i),).toBeInTheDocument();
  });

  it('should render component with primary color', () => {
    const { container } = renderWithTheme(<Ribbon>Best Seller</Ribbon>)
    expect(screen.getByText(/best seller/i)).toHaveStyle({
        backgroundColor: '#F231A5'
      });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render component with primary color', () => {
    const { container } = renderWithTheme(<Ribbon color='secondary'>Best Seller</Ribbon>)
    expect(screen.getByText(/best seller/i)).toHaveStyle({
        backgroundColor: '#3CD3C1'
      });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render component with normal size as default', () => {
    const { container } = renderWithTheme(<Ribbon color='secondary'>Best Seller</Ribbon>)
    expect(screen.getByText(/best seller/i)).toHaveStyle({
      fontSize: '1.4rem',
      height: '3.6rem'
    })
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render component with small size when passed props', () => {
    const { container } = renderWithTheme(<Ribbon size='small'>Best Seller</Ribbon>)
    expect(screen.getByText(/best seller/i)).toHaveStyle({
      fontSize: '1.2rem',
      height: '2.6rem'
    })
    expect(container.firstChild).toMatchSnapshot();
  });
});


