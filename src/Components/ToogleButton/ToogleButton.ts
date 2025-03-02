
import styled from 'styled-components';

export const ToggleButtonContainer = styled.button`
  background: ${({ theme }) => theme.colors.lightGray};
  border: 2px solid ${({ theme }) => theme.colors.white};
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  transition: all 0.3s ease;

  @media (min-width: 769px) {
    display: none; 
  }



  img {
    width: 32px;
    height: 32px;
  }
`;
