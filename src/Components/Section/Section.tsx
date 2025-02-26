import { useEffect, useState } from "react";
import {
  SectionContainer,
  SectionList,
  EmployeeItem,
  ToggleButton,
} from "./Section";

import IconUp from "../../assets/Icon/charm_chevron-up.png";
import IconDown from "../../assets/Icon/charm_chevron-down.png";
import NavBar from "../NavBar/NavBar.tsx";

interface Employee {
  id: number;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
}

const Section = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);
  

  useEffect(() => {
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data.employees);
        setFilteredEmployees(data.employees);
      })
      .catch((error) =>
        console.error("Erro ao buscar os funcionários:", error)
      );
  }, []);

  const handleSearch = (query: string) => {
    const lowerQuery = query.toLowerCase();

    const filtered = employees.filter(
      (employee) =>
        employee.name.toLowerCase().includes(lowerQuery) ||
        employee.job.toLowerCase().includes(lowerQuery) ||
        employee.phone.includes(query)
    );

    setFilteredEmployees(filtered);
  };

  return (
    <>
      <NavBar onSearch={handleSearch} />
      <SectionContainer>
        <SectionList>
          {filteredEmployees.length > 0 ? (
            filteredEmployees.map((employee) => (
              <EmployeeItem key={employee.id}>
                <div className="employee-header">
                  <img src={employee.image} alt={employee.name} />
                  <p className="employee-name">{employee.name}</p>
                </div>

                <div className="details">
                  <p>{employee.job}</p>
                  <p>
                    {new Date(employee.admission_date).toLocaleDateString()}
                  </p>
                  <p>{employee.phone}</p>
                </div>

                <div className="icons">
                  <ToggleButton>
                    <img src={IconUp} alt="Mover para cima" />
                  </ToggleButton>
                  <ToggleButton>
                    <img src={IconDown} alt="Mover para baixo" />
                  </ToggleButton>
                </div>
              </EmployeeItem>
            ))
          ) : (
            <p>Nenhum funcionário encontrado.</p>
          )}
        </SectionList>
      </SectionContainer>
    </>
  );
};

export default Section;
