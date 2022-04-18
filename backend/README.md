# BACKEND: API em Flask-SQLite 

## Executando:
1. Construa a imagem:
```bash
$ docker build -t simple-flask-app:latest .
```
2. Execute o contêiner:
```bash
$ docker run -it -p 5000:5000 simple-flask-app
```
3. Acesse http:127.0.0.1:5000 para visualizar a aplicação executando localmente.

<br>

> Obs: Ao 'hostear' o sistema trocar o parâmetro `-it` (iterativo) por `-d` (detached) no comando run.

<br>
--- 

## Arquitetura e fluxo de execução:
### DevOps
* O arquivo `Dockerfile` é responsável por criar o contêiner para execução.
* O arquivo `requirements.txt` é responsável pelas dependências do projeto.
### Fluxo:
* O arquivo `run.py` na raiz do backend é executado, ele irá criar uma instância da aplicação.
* O método que cria a instância da execução está em `app/__init__.py`, que irá carregar todos os _blueprints_ dentro da intância da aplicação.
* Os blueprints, que se encontram em `app/routes/` são estruturas usadas pelo flask, se resumem a um conjunto de rotas da aplicação que são responsáveis pela parte da aplicação ou modelo dados.
* Os blueprints fazem uso dos modelos de dados para acessar o banco de dados.


--- 

## Fontes:
* https://www.serverlessops.io/blog/hello-serverless-a-beginning-python-flask-application

