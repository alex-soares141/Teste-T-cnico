import styled from "styled-components";

export const NavbarContainer = styled.nav`
  background-color: ${({ theme }) => theme.colors.bluePrimary};
  padding: 16px;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fonts.heading1.size};
  font-weight: ${({ theme }) => theme.fonts.heading1.weight};
  color: ${({ theme }) => theme.colors.white}; 
`;