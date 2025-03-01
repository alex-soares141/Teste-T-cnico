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

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 0px;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.heading1.family};
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  margin: 0;
  margin-top: 104px;

  @media (max-width: 768px) {
    margin-top: 20px;
    font-size: 20px;
    margin-bottom: 10px;
    margin-right: 220px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.heading2.family};
  padding: 12px 16px;
  width: 287px;
  background-color: white;
  border-radius: 8px;
  margin-top: 104px;
  font-size: 16px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 335px;
    margin-top: 0px;
    padding: 12px;
    justify-content: start;
  }
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 14px;
  padding: 5px;
  width: 200px;
  @media (max-width: 768px) {
    width: 100%;
    max-width: 335px;
    margin-top: 10px;
    padding: 0px;
    padding-right: 5px;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
 
  }
`;
