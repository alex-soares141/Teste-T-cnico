// src/components/Section/Section.tsx
import React, { useState, useEffect } from "react";
import {
  SectionContainer,
  Table,
  TableRow,
  TableHeader,
  TableCell,
  DetailsRow,
} from "./Section";
import ToggleButton from "../ToogleButton/ToogleButton.tsx";

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

  const formatPhoneNumber = (phone: string) => {
    const cleaned = phone.replace(/\D/g, "");
    if (cleaned.length === 13) {
      return `+55 (${cleaned.slice(2, 4)}) ${cleaned.slice(
        4,
        9
      )}-${cleaned.slice(9)}`;
    }
    return phone;
  };

  return (
    <SectionContainer>
      <Table>
        <thead>
          <TableRow className="header">
            <TableHeader>FOTO</TableHeader>
            <TableHeader>NOME</TableHeader>
            <TableHeader className="hide-on-mobile">CARGO</TableHeader>
            <TableHeader className="hide-on-mobile">
              DATA DE ADMISSÃO
            </TableHeader>
            <TableHeader className="hide-on-mobile">TELEFONE</TableHeader>
            <TableHeader className="mobile-only"></TableHeader>
          
          </TableRow>
        </thead>
        <tbody>
          {filteredEmployees.length > 0 ? (
            filteredEmployees.map((employee) => (
              <React.Fragment key={employee.id}>
                <TableRow>
                  <TableCell>
                    <img src={employee.image} alt={employee.name} />
                  </TableCell>
                  <TableCell>{employee.name}</TableCell>
                  <TableCell className="hide-on-mobile">
                    {employee.job}
                  </TableCell>
                  <TableCell className="hide-on-mobile">
                    {new Date(employee.admission_date).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="hide-on-mobile">
                    {formatPhoneNumber(employee.phone)}
                  </TableCell>
                  <TableCell className="mobile-only">
                    <ToggleButton
                      isExpanded={expandedId === employee.id}
                      onToggle={() => toggleDetails(employee.id)}
                    />
                  </TableCell>
                </TableRow>

                {expandedId === employee.id && (
                  <DetailsRow>
                    <TableCell colSpan={6}>
                      <p>
                        <strong>Cargo:</strong> {employee.job}
                      </p>
                      <p>
                        <strong>Admissão:</strong>{" "}
                        {new Date(employee.admission_date).toLocaleDateString()}
                      </p>
                      <p>
                        <strong>Telefone:</strong>{" "}
                        {formatPhoneNumber(employee.phone)}
                      </p>
                    </TableCell>
                  </DetailsRow>
                )}
              </React.Fragment>
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
