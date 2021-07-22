import * as S from './styles';

export type ButtonProps = {
  children?: React.ReactNode;
  size?: 'large' | 'medium' | 'small';
  fullWidth?: boolean;
  icon?: JSX.Element; //mesma tipagem do React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
const Button = ({
  children,
  size = 'medium',
  fullWidth = false,
  icon,
  ...props
}: ButtonProps) => (
  <S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} {...props}>
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
);
export default Button;
