import { render, screen } from '@testing-library/react';

import Footer from '.';
import { renderWithTheme } from 'utils/tests/helpers';

describe('<Footer />', () => {
  it('should render 4 columns of the footer', () => {
    const { container } = renderWithTheme(<Footer />);

    expect(screen.getByRole('heading', { name: /contact/i }),).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /follow us/i }),).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /links/i }),).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /location/i }),).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot()
  });

  it('should render the copyright info of the footer', () => {
    const { container } = renderWithTheme(<Footer />)

    expect(screen.getByText(/all rights/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()


  })

});
