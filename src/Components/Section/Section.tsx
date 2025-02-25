import { SectionContainer, SectionList } from "./Section";

const SectionItens = ["Foto", "Nome", "Cargo", "Data de admissão", "Telefone"];

const Section = () => {
  return (
    <SectionContainer>
      <SectionList>
        {SectionItens.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </SectionList>
    </SectionContainer>
  );
};

export default Section;
