import styled from "styled-components";

export const HeaderStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 961px;
  margin: 10px ;
  margin-left: 30px;
  background-color: ${({ theme }) => theme.colors.lightGray};

  @media (max-width: 768px) {
    padding: 0px;
    justify-content: start;
    margin-right: 14px;
    
  }
`;
