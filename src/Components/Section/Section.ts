import styled from "styled-components";

export const SectionContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  padding: 12px 16px;
`;

export const SectionList = styled.ul`
  list-style: none;
  width: 95%;
  padding: 10px;
  margin: 30px;
  color: ${({ theme }) => theme.colors.black};
`;

export const EmployeeItem = styled.li`
  display: flex;
  width: 100%;
  align-items: center;
  text-align: center;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 100px;
  }

  .employee-header,
  .details {
    display: flex;
    width: 100%;
    justify-content: space-between;
    
  }

  .employee-header {
    flex: 0.5;
    display: flex;
    align-items: center;
    gap: 16px;

    
    .employee-name {
      margin-left: 60px; 
    }
  }

  .details {
    flex: 1; 
    display: flex;
    justify-content: space-between;
    margin-left: 480px; /* Dobrado para 480px */
    margin-right: 160px; /* Dobrado para 160px */
  }

  .icons {
    display: flex;
    gap: 35px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    .details {
      display: none; 
    }

    .show {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .icons {
      align-self: flex-end;
    }
  }
`;

export const EmployeeInfo = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
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
