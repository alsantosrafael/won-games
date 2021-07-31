import * as S from './styles';
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/heroicons-outline/ShoppingCart';
import { SearchOutline as SearchIcon } from '@styled-icons/evaicons-outline/SearchOutline';
import { Menu2 as MenuIcon } from '@styled-icons/remix-line/Menu2';
import Logo from 'components/Logo';

const Menu = () => (
  <S.Wrapper>
    <S.IconWrapper>
      <MenuIcon />
    </S.IconWrapper>
    <S.LogoWrapper>
      <Logo hideOnMobile />
    </S.LogoWrapper>
    <S.MenuGroup>
      <S.IconWrapper>
        <SearchIcon />
      </S.IconWrapper>
      <S.IconWrapper>
        <ShoppingCartIcon />
      </S.IconWrapper>
    </S.MenuGroup>
  </S.Wrapper>
);
export default Menu;
