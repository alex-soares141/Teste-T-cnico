// src/components/ToggleButton/ToggleButtonStyles.ts
import styled from 'styled-components';

export const ToggleButtonContainer = styled.button`
  background: lightgray;
  border: 2px solid black;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: all 0.3s ease;

  @media (min-width: 769px) {
    display: none; /* Esconde o botão em telas maiores */
  }

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }

  img {
    width: 24px;
    height: 24px;
  }
`;
