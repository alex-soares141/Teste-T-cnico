import styled from "styled-components";

export const SectionContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 961px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.colors.gray} 0px 0px 10px 0px;
  margin: 0 auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
`;

export const TableRow = styled.tr<{ header?: boolean }>`
  background: ${({ header }) => (header ? "blue" : "transparent")};
  color: ${({ header }) => (header ? "white" : "black")};
  text-align: left;
  font-weight: ${({ header }) => (header ? "bold" : "normal")};

  @media (max-width: 768px) {
    &.hide-on-mobile {
      display: none;
    }
  }
`;

export const TableHeader = styled.th`
  padding: 12px;
  text-align: center;
  font-size: 16px;
  background: blue;
  color: white;
`;

export const TableCell = styled.td`
  padding: 10px;
  text-align: center;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

export const DetailsRow = styled.tr`
  background: #f8f9fa;
  td {
    padding: 12px;
    text-align: left;
  }
`;
