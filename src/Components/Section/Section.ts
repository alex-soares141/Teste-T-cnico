import styled from "styled-components";

export const SectionContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 961px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.colors.gray} 0px 0px 10px 0px;
  margin: 100px auto 0;
  transition: max-width 0.3s ease, padding 0.3s ease;

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
`;

export const TableRow = styled.tr<{ header?: boolean }>`
  background: ${({ header }) => (header ? "blue" : "transparent")};
  color: ${({ header }) => (header ? "white" : "black")};
  text-align: left;
  font-size: 16px;
`;

export const TableHeader = styled.th`
  padding: 12px;
  text-align: center;
  font-size: 16px;
  background: blue;
  color: white;
  text-transform: uppercase;

  @media (max-width: 768px) {
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
  }

  @media (max-width: 768px) {
    &:nth-child(n + 3) {
      display: none;
    }
  }
`;

export const DetailsRow = styled.tr`
  background-color: ${({ theme }) => theme.colors.lightGray};

  td {
    padding: 12px;
    text-align: left;
    padding-left: 45px;
    font-size: 14px;
  }
`;

export const MobileButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const ToggleButton = styled.button`
  background: white;
  border: 2px solid ${({ theme }) => theme.colors.gray};
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }

  img {
    width: 24px;
    height: 24px;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;
