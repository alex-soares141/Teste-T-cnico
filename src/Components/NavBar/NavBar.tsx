import styled from "styled-components";

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.bluePrimary};
  padding: 16px;
  color: ${({ theme }) => theme.colors.white};
`;

const Menu = styled.ul`
  display: flex;
  list-style-type: none;

  li {
    margin: 0 15px;
    cursor: pointer;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileUserInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

const Navbar = () => {
  const user = {
    photo:
      "https://img.odcdn.com.br/cdn-cgi/image/width=1200,height=1200,fit=cover/wp-content/uploads/2023/01/Avatar-Loak.jpg",
    name: "Seu Nome",
    position: "Seu Cargo",
    hireDate: "Data de Admissão",
    phone: "(00) 00000-0000",
  };

  return (
    <NavbarContainer>
        <UserInfo>
        <img src={user.photo} alt="Foto do usuário" />
       
      </UserInfo>
      
      <Menu>
        <li>Menu 1</li>
        <li>Menu 2</li>
        <li>Menu 3</li>
        <li>Menu 4</li>
      </Menu>
      <UserInfo>
        <img src={user.photo} alt="Foto do usuário" />
        <div>
          <div>{user.name}</div>
          <div>{user.position}</div>
          <div>{user.hireDate}</div>
          <div>{user.phone}</div>
        </div>
      </UserInfo>
      <MobileUserInfo>
        
        <div>{user.name}</div>
      </MobileUserInfo>
    </NavbarContainer>
  );
};

export default Navbar;
