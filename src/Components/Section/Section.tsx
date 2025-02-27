import { useEffect, useState } from "react";
import {
  SectionContainer,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  ToggleButton,
  DetailsRow,
} from "./Section";

import IconUp from "../../assets/Icon/charm_chevron-up.png";
import IconDown from "../../assets/Icon/charm_chevron-down.png";

interface Employee {
  id: number;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
}

interface SectionProps {
  searchQuery: string;
}

const Section = ({ searchQuery }: SectionProps) => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);
  const [expandedId, setExpandedId] = useState<number | null>(null);

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

  useEffect(() => {
    const lowerQuery = searchQuery.toLowerCase();
    const filtered = employees.filter(
      (employee) =>
        employee.name.toLowerCase().includes(lowerQuery) ||
        employee.job.toLowerCase().includes(lowerQuery) ||
        employee.phone.includes(searchQuery)
    );

    setFilteredEmployees(filtered);
  }, [searchQuery, employees]);

  const toggleDetails = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <SectionContainer>
      <Table>
        <thead>
          <TableRow header>
            <TableHeader>FOTO</TableHeader>
            <TableHeader>NOME</TableHeader>
            <TableHeader className="hide-on-mobile">CARGO</TableHeader>
            <TableHeader className="hide-on-mobile">DATA DE ADMISSÃO</TableHeader>
            <TableHeader className="hide-on-mobile">TELEFONE</TableHeader>
            <TableHeader></TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {filteredEmployees.length > 0 ? (
            filteredEmployees.map((employee) => (
              <>
                <TableRow key={employee.id}>
                  <TableCell>
                    <img src={employee.image} alt={employee.name} />
                  </TableCell>
                  <TableCell>{employee.name}</TableCell>
                  <TableCell className="hide-on-mobile">{employee.job}</TableCell>
                  <TableCell className="hide-on-mobile">
                    {new Date(employee.admission_date).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="hide-on-mobile">{employee.phone}</TableCell>
                  <TableCell>
                    <ToggleButton onClick={() => toggleDetails(employee.id)}>
                      <img
                        src={expandedId === employee.id ? IconUp : IconDown}
                        alt="Alternar detalhes"
                      />
                    </ToggleButton>
                  </TableCell>
                </TableRow>

                {expandedId === employee.id && (
                  <DetailsRow>
                    <TableCell colSpan={6}>
                      <p><strong>Cargo:</strong> {employee.job}</p>
                      <p><strong>Admissão:</strong> {new Date(employee.admission_date).toLocaleDateString()}</p>
                      <p><strong>Telefone:</strong> {employee.phone}</p>
                    </TableCell>
                  </DetailsRow>
                )}
              </>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6}>Nenhum funcionário encontrado.</TableCell>
            </TableRow>
          )}
        </tbody>
      </Table>
    </SectionContainer>
  );
};

export default Section;
