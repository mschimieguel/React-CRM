### Aplicativo CRM simples escrito com React.

#### Recursos:
- Autenticação com Firebase Authentication
- Armazenamento de dados persistente com o banco de dados
- Gerenciamento de estado com Redux
- CI/CD com Github Actions
- Adicionar e armazenar informações sobre clientes, contatos e negócios

#### Prerequisites:
- Node.JS installed 10.0 >

#### Time:
* Back-end / Front-end / Infra:
    * Breno de Castro Pimenta
    * Klysman Rezende
    * Matheus Schimieguel Silva


#### Tecnologias:
* **Back-end**: React
* **Front-end**: Fire-Base
* **DataBase**: SQL


---
### SCM (Sistema de controle de versão)
A main só recebe merge das branchs de sprint.<br>
As brachs de sprint só recebem branchs de strories.<br>
As branchs de stories só recebem merge das branchs de task.<br>
As branchs de task que realmente possuem os commits. <br>

E os merges serão através de PullRequests.<br>
E as branchs serão divididas entre Front e Back como são aplicações independentes.

*Exemplo:*
- back/task-01 -> back/story-01 -> back/sprint_01
- ao terminar a sprint: back/sprint_01 -> master

---


### Backlog do Sistema - CRM

1. Como usuário, quero acrescentar um Lead.
2. Como usuário, quero acrescentar informações do Lead.
3. Como usuário, quero escolher a visualização dos resultados em tabela.
4. Como usuário, quero ter mais informações sobre um Lead.
5. Como usuário, quero um login utilizando minha conta do Google.
6. Como usuário quero fazer buscas avançadas (com filtros - X,Y,Z).
