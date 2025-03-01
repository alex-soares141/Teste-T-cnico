import styled from "styled-components";

export const SectionContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 961px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.colors.gray} 0px 0px 10px 0px;
  margin: 100px auto 0;

  @media (max-width: 768px) {
    max-width: 335px;
    margin-top: 10px;
    padding: 5px;
   
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 335px;
     margin-bottom: 10px;
  }
`;

export const TableRow = styled.tr<{ header?: boolean }>`
  background: ${({ header }) => (header ? "blue" : "transparent")};
  color: ${({ header }) => (header ? "white" : "black")};
  text-align: left;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.heading2.family};
  background-color: red;
`;

export const TableHeader = styled.th`
  padding: 12px;
  text-align: center;
  font-size: 16px;
  background: blue;
  color: white;

  @media (max-width: 768px) {
    padding: 16px;
  
    &:nth-child(n + 3) {
      display: none;
      
    }
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  text-align: center;
  font-size: 16px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    align-items: center;
    padding-top: 10px;
  }

  @media (max-width: 768px) {
    &:nth-child(n + 3) {
      display: none;
    }
  }
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  margin-left: 10px; 
  position: relative;
  z-index: 10;

  img {
    width: 20px;
    height: 20px;
  }
`;


export const DetailsRow = styled.tr`
 background-color: red;

  td {
    padding: 12px;
    text-align: left;
    padding-left: 45px;
    
  }
`;


export const HideOnMobile = styled.div`
  @media (max-width: 768px) {
    display: none;
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const ShowOnMobile = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: inline-block;
    margin-left: 10px; /* Adiciona um espaçamento para a direita */
    position: relative;
    z-index: 999; /* Garante que o botão fique acima de outros elementos */
  }
`;



