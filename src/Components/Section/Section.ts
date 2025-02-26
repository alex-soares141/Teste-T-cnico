import styled from "styled-components";

export const SectionContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  padding: 16px;
`;

export const SectionList = styled.ul`
  list-style: none;
  width: 100%;
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.colors.black};
`;

export const EmployeeItem = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

 
  .details {
    display: flex;
    gap: 22px;
  }

  .show {
    display: block;
  }

  @media (max-width: 768px) {
    /* Mostrar apenas Foto e Nome na linha principal */
    display: grid;
    grid-template-columns: 50px 1fr auto;
    align-items: center;
    
    .details {
      display: none; /* Oculta detalhes por padrão */
    }

    .show {
      display: block; /* Exibe detalhes quando expandido */
    }
  }
`;

export const EmployeeInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
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

  @media (min-width: 769px) {
    display: none; 
  }
`;
