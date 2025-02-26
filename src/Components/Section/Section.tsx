import { useEffect, useState } from "react";
import {
  SectionContainer,
  SectionList,
  EmployeeItem,
  EmployeeInfo,
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
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

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

  const toggleDetails = (id: number) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      <NavBar onSearch={handleSearch} />
      <SectionContainer>
        <SectionList>
          {filteredEmployees.length > 0 ? (
            filteredEmployees.map((employee) => (
              <EmployeeItem key={employee.id}>
                <img src={employee.image} alt={employee.name} />
                <EmployeeInfo>
                  <p>
                    <strong></strong> {employee.name}
                  </p>
                </EmployeeInfo>
                <ToggleButton onClick={() => toggleDetails(employee.id)}>
                  <img
                    src={expanded[employee.id] ? IconUp : IconDown}
                    alt="Toggle detalhes"
                  />
                </ToggleButton>
                <div
                  className={`details ${expanded[employee.id] ? "show" : ""}`}
                >
                  <p>
                    <strong></strong> {employee.job}
                  </p>
                  <p>
                    <strong></strong>{" "}
                    {new Date(employee.admission_date).toLocaleDateString()}
                  </p>
                  <p>
                    <strong></strong> {employee.phone}
                  </p>
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
