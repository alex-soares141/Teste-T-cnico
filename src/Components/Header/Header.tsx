import Logo from '../../assets/Logo.png'
import { HeaderStyles } from './header';
const Header = () => {
  return (
    <HeaderStyles>
      <img src={Logo} alt="LogoMarca BeTalent" />
    </HeaderStyles>
  );
};

export default Header;
