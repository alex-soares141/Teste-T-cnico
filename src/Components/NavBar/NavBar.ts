import styled from "styled-components";

export const NavbarContainer = styled.nav`
  background-color: ${({ theme }) => theme.colors.bluePrimary};
  height: 47px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavbarList = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.colors.white};

  li {
    flex: 1;
    text-align: center;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px;
`;


export const SearchIcon = styled.img`
  position: absolute;
  left: 10px;
  width: 20px;
  height: 20px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 8px 12px;
  padding-left: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  font-size: 16px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.bluePrimary};
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;