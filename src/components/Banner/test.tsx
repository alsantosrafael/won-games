import { renderWithTheme } from "utils/tests/helpers"
import Banner, { BannerProps } from "."
import { screen } from "@testing-library/react"


const bannerArgs: BannerProps = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<strong>Play the new <strong>CrashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Banner {...bannerArgs} />)

    expect(screen.getByRole('img', { name: /defy death/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /play the new/i }),).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /defy death/i }),).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot()

  })
})
