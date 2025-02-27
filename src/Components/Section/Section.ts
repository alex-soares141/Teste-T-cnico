import styled from "styled-components";

export const SectionContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 961px;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.colors.gray} 0px 0px 10px 0px;
`;

export const Header = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.heading1.family};
  text-align: center;
`;

export const Table = styled.table`
  width: 100%; 
  max-width: 961px;
  padding: 12px;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  margin: 0 auto; 

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const TableRow = styled.tr<{ header?: boolean }>`
  background: ${({ header }) => (header ? "blue" : "transparent")};
  color: ${({ header }) => (header ? "white" : "black")};
  text-align: left;
  font-weight: ${({ header }) => (header ? "bold" : "normal")};
  display: table-row;

  &.hide-on-mobile {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const TableHeader = styled.th`
  padding: 12px;
  text-align: center;
  font-size: 16px;
`;

export const TableCell = styled.td`
  padding: 10px;
  text-align: center;
  font-size: 14px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    &.hide-on-mobile {
      display: none;
    }
  }
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  img {
    width: 24px;
    height: 24px;
  }
`;

export const DetailsRow = styled.tr`
  background: #f8f9fa;
  td {
    padding: 12px;
    text-align: left;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;
