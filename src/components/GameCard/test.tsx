import { render, screen } from '@testing-library/react';

import GameCard from '.';
import { renderWithTheme } from 'utils/tests/helpers';
const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00'
};

describe('<GameCard />', () => {
  it('should render the heading', () => {
    renderWithTheme(<GameCard {...props} />);

    expect(screen.getByText(/population zero/i)).toBeInTheDocument();
    expect(screen.getByText(/rockstar games/i)).toBeInTheDocument();
    expect(screen.getByText(/235,00/i)).toBeInTheDocument();

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute('src', props.img)
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()


  });

  it('should render label price', () => {
    renderWithTheme(<GameCard {...props} />);

    expect(screen.getByText(/235,00/i)).toHaveStyle({
      'background-color': '#3CD3C1',
      'color': '#FAFAFA'
    });
    expect(screen.getByText(/235,00/i)).not.toHaveStyle({
      'text-decoration': 'line-through',
      'color': '##8F8F8F'
    });
  });

  it('should render previous price with line through and promotional price with different style', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice='R$ 215,00'/>);

    expect(screen.getByText(/215,00/i)).toHaveStyle({
      'background-color': '#3CD3C1',
      'color': '#FAFAFA'
    });
    expect(screen.getByText(/235,00/i)).toHaveStyle({
      'text-decoration': 'line-through',
      'color': '#8F8F8F'
    });
  });
});
