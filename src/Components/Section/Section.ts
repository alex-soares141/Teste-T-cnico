import styled from "styled-components";

export const SectionContainer = styled.nav`
  background-color: ${({ theme }) => theme.colors.bluePrimary};
  height: 47px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SectionList = styled.ul`
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

  li:nth-child(1), 
  li:nth-child(2) {
    text-align: auto;
  }

  li:nth-child(3) {
    margin: 0 auto;
  }

  li:nth-child(4), 
  li:nth-child(5) {
    text-align: auto;
  }
`;