import { styled } from "styled-components";

interface Theme {
  colors: {
    lightGray: string;
    gray: string;
    black: string;
  };
  fonts: {
    heading1: {
      family: string;
    };
  };
}

export const NavContainer = styled.nav<{ theme: Theme }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 47px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding: 0 20px;
  width: 961px;
  margin: 0 auto;
`;
export const SearchInput = styled.input<{ theme: Theme }>`
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
  font-size: 14px;
  width: 200px; 
`;

export const Title = styled.h1<{ theme: Theme }>`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.heading1.family};
  flex-grow:0; 
  text-align: center;
  margin: 0; 
`;
