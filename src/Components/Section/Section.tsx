import { useEffect, useState } from "react";
import { SectionContainer, SectionList } from "./Section";

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

  useEffect(() => {
    fetch("/src/services/db.json")
      .then((response) => response.json())
      .then((data) => setEmployees(data.employees))
      .catch((error) => console.error("Erro ao buscar os funcionários:", error));
  }, []);

  return (
    <SectionContainer>
      <SectionList>
        {employees.map((employee) => (
          <li key={employee.id}>
            <img src={employee.image} alt={employee.name} />
            <p><strong>Nome:</strong> {employee.name}</p>
            <p><strong>Cargo:</strong> {employee.job}</p>
            <p><strong>Data de admissão:</strong> {new Date(employee.admission_date).toLocaleDateString()}</p>
            <p><strong>Telefone:</strong> {employee.phone}</p>
          </li>
        ))}
      </SectionList>
    </SectionContainer>
  );
};

export default Section;
