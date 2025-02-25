import styled from "styled-components";

export const SectionContainer = styled.nav`
  background-color: ${({ theme }) => theme.colors.white};

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;


export const SectionList = styled.ul`
  list-style: none;
  width: 100%;
  padding: 32px;
  margin: 0;
  color: ${({ theme }) => theme.colors.black};
  display: block; 

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px; 
    padding: 12px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray}; 
   margin-right: 12px;
  }

  img {
    margin-left: 110px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;
