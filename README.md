Teste Técnico Front-end BeTalent

Este repositório contém a solução para o Teste Técnico de Front-end da BeTalent. O desafio consiste na implementação de uma tabela responsiva, alimentada por uma API simulada utilizando json-server.

🔹 Sobre o Projeto

O objetivo do projeto é exibir uma tabela com informações de usuários fornecidas pela API simulada. A tabela possui as seguintes colunas:

Imagem (thumb do usuário/a)

Nome

Cargo

Data de admissão (formatada no front-end)

Telefone (formatado no front-end)

Além disso, o projeto inclui um campo de pesquisa que permite filtrar os dados da tabela por nome, cargo ou telefone.

📋 Requisitos

O projeto foi desenvolvido utilizando:

React.js

TypeScript 

StyledComponents


json-server para simulação da API

Dependências

Antes de rodar o projeto, certifique-se de ter instalado:

Git

Node.js (versão recomendada: 16+)

Yarn ou npm

🚀 Como Executar o Projeto

Clone este repositório

  git clone https://github.com/alex-soares141/Teste-T-cnico.git

Acesse a pasta do projeto

  cd nome-teste-Tecnico

Instale as dependências

  yarn install # ou npm install

Inicie o json-server

  json-server --watch db.json

Se houver problemas com o json-server, tente:

  npx json-server db.json
  # ou
  yarn json-server <path>/db.json

Inicie o projeto

  yarn dev # ou npm run dev

Acesse no navegador

  http://localhost:3000

📝 Funcionalidades Implementadas



📌 Estrutura do Projeto

/src
  ├── components   # Componentes reutilizáveis
  ├── pages        # Páginas da aplicação
  ├── services     # Funções para consumo da API
  ├── utils        # Funções auxiliares (formatação de dados, etc.)
  ├── App.tsx      # Componente principal
  ├── main.tsx     # Ponto de entrada da aplicação

🛠 Tecnologias Utilizadas

React.js com Vite

TypeScript

json-server

📌 Considerações Finais

Este projeto foi desenvolvido seguindo boas práticas de código, organização de arquivos e estilização responsiva. Qualquer feedback ou sugestão de melhorias são bem-vindos!


Desenvolvido por Alex Soares de Oliveira 🚀