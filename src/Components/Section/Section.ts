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
    max-width: 350px;
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

  @media (max-width: 768px) {
    
   width: 100%;

  }
`;

export const TableHeader = styled.th`
  padding: 12px;
  text-align: center;
  font-size: 16px;
  background: blue;
  color: white;
  text-transform: uppercase;
  width: auto;
  min-width: 80px;
 
 &.Photo{
  border-radius: 8px 0px 0px 0px;
 }

 &.Phone{
  border-radius: 0px 8px 0px 0px;
 }

  &.mobile-only {
    display: none; 
    
  }

  @media (max-width: 768px) {
    &:nth-child(n + 3) {
      display: none;
    }

    &.mobile-only {
      display: table-cell;
      border-radius: 0px 8px 0px 0px;
    }

    .dotTable {
      display: flex;
      justify-content: flex-end; 
      width: 85%; 
      font-size: 18px;
      align-items: center;
      
    }
  }
`;



export const TableCell = styled.td`
  padding: 10px;
  font-size: 16px;
  text-align: center;

  img {
    width: 34px;
    height: 34px;
    border-radius: 50%;
  }

  &.mobile-only {
    display: none;
    
  }

  @media (max-width: 768px) {
    &:nth-child(n + 3) {
      display: none;
    }

    &.mobile-only  {
      display: flex;
      justify-content: flex-end; 
      border-radius: 8px ;
  
      
    }
    &.details {
    
    p {
      margin-top: 10px;
      margin-bottom: 10px; 
      display: flex;
      justify-content: space-between;
      
    }
  }
  }
  
`;

export const DetailsRow = styled.tr`
  background-color: ${({ theme }) => theme.colors.lightGray};

  td {
    padding: 12px;
    text-align: left;
    padding-left: 30px;
    font-size: 14px;
  }
`;

export const MobileButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  width: 32px;
    height: 32px;
    border: none;
  @media (min-width: 769px) {
    display: none;
  }
`;

