# Projeto Desafio Tecnico Tunts Rocks

Este projeto consiste em uma aplicação que lê uma planilha do Google Sheets, calcula a situação de cada aluno com base na média das 3 provas e escreve o resultado na mesma planilha. Além disso, considera "Reprovado por Falta" se o número de faltas ultrapassar 25% do total de aulas e calcula a "Nota para Aprovação Final" se a situação for "Exame Final".

## Funcionalidades

- Leitura de uma planilha do Google Sheets.
- Cálculo da situação de cada aluno com base na média das 3 provas.
- Verificação e marcação de "Reprovado por Falta" se o número de faltas ultrapassar 25% do total de aulas.
- Cálculo da "Nota para Aprovação Final" em caso de situação "Exame Final".

## Link Google Sheet
 - https://docs.google.com/spreadsheets/d/1U1b_4SezsFwMLbEgEtVPwGjCEUWbIqkOKMRqpHrUSGs/edit?usp=sharing


## Tecnologias Utilizadas

- Node.js
- Google Sheets API
- JavaScript
- npm
- Jest

## Como Utilizar

1. Clone o repositório do GitHub:

```bash
git clone git@github.com:jvictorgui/tuntsRocksTecnico.git
```

2. Navegue até a pasta do projeto:

    
    `cd tuntsRocksTecnico`
    

3. Instale as dependências:

    ```bash
    npm install
    ```

4. Inicie a aplicação:

    ```bash
    npm start
    ```

5. Acesse a aplicação em `localhost:3001`.

## Testes

Para executar os testes, utilize o seguinte comando:

```bash
npm run test
