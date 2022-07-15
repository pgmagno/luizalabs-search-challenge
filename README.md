<a name="back"></a>
### [<img width="64" alt="Flag of Brazil" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/64px-Flag_of_Brazil.svg.png">](#ptbr) [<img width="64" alt="Flag of the United States" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Flag_of_the_United_States_%283-2%29.svg/64px-Flag_of_the_United_States_%283-2%29.svg.png">](#en)

# [Luizalabs Search Challenge](https://www.linkedin.com/company/luizalabs/) <a name="en"></a>

### Description
*A Search Challenge executed in order to display programming knowledge of indexing algorithms and information retrieval algorithms, as part of the selection process of [Luiza Labs](https://www.linkedin.com/company/luizalabs/).*

### Scope
*Create an application that searches through 11000+ text files in order to retrieve those which match a certain criteria.*

### Features
* *Built-in functions for exact and similar matches (3 additional characters before and after target term)*
* *Separate Rules/Criteria file enabling the creation of custom rules*
* *Synchronous search*
* *Test-covered for all functions. Additional rules will require further testing*
* *Returns only unique results*
* *Uses Regular Expressions*

### Technologies:
| Name | Description of Usage |
| --: | :-- |
| ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) | JavaScript External Runtime environment v.17.4.0 |
| ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white) | Testing |
| ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white) | Package manager |

### How to Install & Run
1. Install NodeJS
2. Clone repo to a folder of your choice
3. Open the terminal in this folder
4. Install all dependencies by typing in the terminal:
```
npm install
```
5. Run the application by typing in the terminal: `node app.js "X Y Z" "./dir"`. The terms have to be separated by space.
> Example: search for **Walt Disney** in **./data**. 
```
node app.js "walt disney" "./data"
```
6. Run the test suite by typing in the terminal:
```
npm test
```
7. Test drive the application using the mockdata.zip file provided. Unizip anywhere and indicate the path in the command line (step 5)

[Back to top](#back)

---

# [Luizalabs Desafio de Busca](https://www.linkedin.com/company/luizalabs/) <a name="ptbr"></a>

### Descrição
*Um desafio de busca para demonstrar conhecimentos acerca de algoritmos de indexação e recuperação de informações, realizado como requisito parcial do processo seletivo para o ingresso no [Luiza Labs](https://www.linkedin.com/company/luizalabs/).*

### Escopo
*Criar uma aplicação que busque por termos que se adequem a um determinado critério em um diretório contendo 11000+ arquivos de texto.*

### Características
* *Funções para busca de termos Exatos e Similares (3 caracteres adicionais antes e depois do termo)*
* *Arquivo de regras e critérios separado para a possibilitar a criação de regras customizadas*
* *Busca síncrona*
* *Coberto por testes em todas as funções. Ao acrescenter novas regras, testes adicionais deverão ser desenvolvidos*
* *Retorna apenas resultados únicos*
* *Utiliza Regular Expressions*

### Tecnologias:
| Nome | Descrição de Uso |
| --: | :-- |
| ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) | Ambiente externo de execução do JavaScript v.17.4.0 |
| ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white) | Testagem |
| ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white) | Gerenciador de pacotes |

### Instalação, Execução & Testagem
1. Instalar o NodeJS
2. Clonar o repoitório em um diretório de sua preferência
3. Abrir o terminal no diretório escolhido
4. Instalar todas as dependências com o comando abaixo:
```
npm install
```
5. Executar a aplicação digitando no terminal: `node app.js "X Y Z" "./dir"`. Os termos devem ser separados por espaço.
> Exemplo: procurar pelos termos **Walt Disney** no diretório **./data**. 
```
node app.js "walt disney" "./data"
```
6. Executar a suite de testes Jest digitando no terminal:
```
npm test
```
7. Você pode testar a aplicação usando os arquivos de teste (mockdata.zip). Descompacte e utilize o caminho dessa pasta na execução (passo 5)

[Back to top](#back)

---
