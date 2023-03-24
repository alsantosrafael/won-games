import * as S from './styles';
import { RibbonColors, RibbonSizes } from './styles';

export type RibbonProps = {
  children: React.ReactNode
  color?: RibbonColors
  size?: RibbonSizes
}
const Ribbon = ({ children, color = 'primary', size = 'normal' }: RibbonProps) => (
  <S.Wrapper
    color={color}
    size={size}
  >
		{children}
  </S.Wrapper>
);
export default Ribbon;
