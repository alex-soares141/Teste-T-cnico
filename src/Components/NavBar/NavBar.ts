import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 47px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding: 0 20px;
  width: 100%;
  max-width: 961px;
  margin: 0 auto;
  border-radius: 8px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.heading1.family};
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  margin: 0;
  margin-top: 104px;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.heading2.family};
  padding: 12px 16px 12px 16px;
  width: 287px;
  background-color: white;
  border-radius: 8px;
  margin-top: 104px;
  font-size: 16px;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 14px;
  padding: 5px;
  width: 200px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;
