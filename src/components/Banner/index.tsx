import Button from 'components/Button';
import * as S from './styles';
import Ribbon from 'components/Ribbon';
import { RibbonColors, RibbonSizes } from 'components/Ribbon/styles';


export type BannerProps = {
  img: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  ribbon?: string
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
}

const Banner = ({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  ribbon,
  ribbonColor,
  ribbonSize
}: BannerProps) => (
  <S.Wrapper>
    <Ribbon
      children={ribbon}
      color={ribbonColor}
      size={ribbonSize}
    />
    <S.Image src={img} role="img" aria-label={title} />
    <S.Caption>
      <S.Title>{title}</S.Title>
      <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
      <Button as="a" href={buttonLink} size="large">{buttonLabel}</Button>
    </S.Caption>
  </S.Wrapper>
);
export default Banner;
