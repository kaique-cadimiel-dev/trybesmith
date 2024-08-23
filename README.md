# project trybesmith
## 1º clone
```bash
git@github.com:kaique-cadimiel-dev/trybesmith.git
```

## 2º instalar dependências

```bash
npm i
```
## 3º rodar docker-compose

```bash
docker-compose up -d --build
```
<h2>Descrição</h2>
<p>Trybesmith é uma loja que concepciona artigos medievais únicos para colecionadores. O objetivo do projeto é, através de tecnologia e regras de negócios, entregar uma solução tech, segura e eficaz.</p>
<p>Meu papel foi construir uma API que suprisse a necessidade da loja, foi utilizado Typescript como linguagem, Sequelize como ORM e MySQL como banco de dados.</p>
<p>Foi aplicado o conceito de arquitetura em camadas, visando escalabilidade e praticidade em manutenção.</p>

### Endpoints

``
POST /login
``
<p>body da requisição</p>

```json
{
  "username": "Hagar",
  "password": "terrível"
}

```

<h2>Resposta da requisição</h2>

<p>OK - Status 200</p>

```json
{
  "token": "eyJhbGciOiJIUzICI6IkpXVCJ9.eyJ1c2VybmFtZSI60ZX3MjQ0NDUxMzR9.MvgRtzy1wWJhOPKJnSSZX8"
}

```
<p>Usuário não encontrado - Status 401</p>

```json
{
  "message": "Username or password invalid"
}

```