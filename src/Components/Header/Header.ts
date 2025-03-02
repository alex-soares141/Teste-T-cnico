import styled from "styled-components";



export const HeaderSection = styled.div`
  box-shadow: ${({ theme }) => theme.colors.gray} 0px 4px 10px -2px;
  margin: 0px;
  padding: 0px;
`;


export const HeaderStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 961px;

  margin-left: 49px;
  height: 60px;
 
  
  @media (max-width: 768px) {
    margin-left: 30px;
    justify-content: start;
    
    
  }
`;
