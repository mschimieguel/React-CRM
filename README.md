# Aplicativo CRM escrito com React.

#### Recursos:
- Armazenamento de dados persistente com o banco de dados
- Git e Github
- CI/CD com Github Actions
- Adicionar e armazenar informações sobre os clientes, contatos e negócios (Leads).

#### Prerequisites:
- Node.JS installed 16.0  ou superior
- Python 3.8 ou superior

#### Time:
* Back-end / Front-end / Infra:
    * Breno de Castro Pimenta
    * Klysman Rezende Alves
    * Matheus Schimieguel Silva
    * Rodrigo Cézar Luz Brochado


#### Tecnologias:
* **Back-end**: Flask
* **Front-end**: React
* **DataBase**: SQL-Lite

---
<img src="https://github.com/klysman08/React-Firebase-CRM/blob/master/animacao-dev-crm-eng-soft.gif" width="640" height="360" />

### Backlog do Produto - CRM

1. Como usuário, quero ver todos os Leads.
   - [x] Estruturar o flask (Breno)
   - [x] Adicionar SQLite (Rodrigo)
   - [x] Conteinerização do flask (Breno)
   - [x] Estruturar Lead no banco (Rodrigo)
   - [x] Criar app do React (Matheus)
   - [x] Definir a estrutura do Lead (Klysman)
   - [x] Definir a estrutura do Board de Negócios (Klysman)
   - [x] Construir layout inicial do Board no Adobe XD (Klysman)
   - [x] Popular o banco com o Pyfake (Breno)

2. Como usuário, quero editar um Lead.
   - [x] Criar componente para adição do Lead (Matheus)
   - [x] Criar componente para edição do Lead (Klysman)
   - [x] Criar endpoint para adição do Lead (Rodrigo)
   - [x] Criar endpoint para update do Lead (Breno)

3. Como usuário, quero converter um Lead para Negócios.
   - [ ] Criar componente para adição do Lead para pesssoa (Matheus)
   - [ ] Criar componente para edição do Lead para negócio (Klysman)
   - [ ] Criar sessão para somente empresas (Matheus)
   - [ ] Criar sessão para somente pessoas (Klysman)
   - [ ] Criar pagina Home com descrição (Klysman)



# Instalação completa da aplicação 



---

# BACKEND: API em Flask-SQLite 

Há duas formas de execução, uma utilizando container ou com execução direta com a chamada do python, a diferença são as dependências.

## Container:
### Dependência:
* Docker
### Executando:
1. Construa a imagem:
```bash
$ docker build -t simple-flask-app:latest .
```
2. Execute o contêiner:
```bash
$ docker run -it -p 7776:7776 simple-flask-app
```
3. Acesse http:127.0.0.1:7776 para visualizar a aplicação executando localmente.

> Obs: Ao 'hostear' o sistema trocar o parâmetro `-it` (iterativo) por `-d` (detached) no comando run.


## Execução direta, com exemplo utilizando Ambiente Virtual:
### Dependência:
* Pytho 3.8.2
* Venv (sudo apt install python3.8-venv)
* pip (sudo apt install python3-pip)

### Gerenciando ambiente:
1. Criando ambiente:    `python3 -m venv ./venv`
2. Ativando ambiente:  `source venv/bin/activate`
3. Instalando dependências: `pip install -r requirements.txt`

### Executando:
1. Ativando ambiente:  `source venv/bin/activate`
2. Executando: `python3 run.py`
3. Desativando ambiente: `deactivate`



--- 


# Arquitetura e fluxo de execução:
### DevOps
* O arquivo `Dockerfile` é responsável por criar o contêiner para execução.
* O arquivo `requirements.txt` é responsável pelas dependências do projeto.
### Fluxo:
* O arquivo `run.py` na raiz do backend é executado, ele irá criar uma instância da aplicação.
* O método que cria a instância da execução está em `app/__init__.py`, que irá carregar todos os _blueprints_ dentro da intância da aplicação.
* Os blueprints, que se encontram em `app/routes/` são estruturas usadas pelo flask, se resumem a um conjunto de rotas da aplicação que são responsáveis pela parte da aplicação ou modelo dados.
* Os blueprints fazem uso dos modelos de dados para acessar o banco de dados.


--- 

# FRONTEND: REACT JS



# Começando com Create React App

Este projeto foi inicializado com [Create React App] (https://github.com/facebook/create-react-app).

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm install` para intalar todas as dependencias do projeto


### `npm start` para iniciar o projeto localmente

Esse comando executa o aplicativo no modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo em seu navegador.

A página será recarregada quando você fizer alterações.\ 'hotcode'

Você também pode ver erros de lint no console.




