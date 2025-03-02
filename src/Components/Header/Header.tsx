import Logo from "../../assets/Logo.png";
import { HeaderSection, HeaderStyles } from "./Header";

const Header = () => {
  return (
    <HeaderSection>
      <HeaderStyles>
        <img src={Logo} alt="LogoMarca BeTalent" />
      </HeaderStyles>
    </HeaderSection>
  );
};

export default Header;
