import Logo from '../../assets/Logo.png'
import { HeaderStyles } from './Header';
const Header = () => {
  return (
    <HeaderStyles>
      <img src={Logo} alt="LogoMarca BeTalent" />
    </HeaderStyles>
  );
};

export default Header;
