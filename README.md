<table>
  <tr>
    <td><img src="https://github.com/luiizsilverio/job-hub/blob/main/public/img/company.svg" style="width: 90px"/></td>
    <td><h1>JOB-HUB</h1></td>
  </tr>
</table>

## Conteúdo
* [Sobre o Projeto](#sobre-o-projeto)
* [Tecnologias](#hammer_and_wrench-tecnologias)
* [Screenshots](#camera_flash-screenshots)
* [Iniciando o Projeto](#car-Iniciando-o-projeto)
* [Licença](#balance_scale-licença)
* [Contato](#email-contato)


## Sobre o projeto
Projeto desenvolvido em __Node.js__ durante o curso [Javascript do Básico ao Avançado, com Node e Projetos](https://www.udemy.com/course/javascript-do-basico-ao-avancado-com-node-e-projetos/), do prof. Matheus Battisti.<br />
É um site de busca de empregos, com cadastro de vaga, que utiliza __Sequelize__ para acessar os dados do __SQLite__. Além disso, utiliza o template engine __Handlebars__, para renderizar as páginas.<br />


### Rotas da aplicação

| Método | Caminho da Rota | Descrição da Rota |
|---|---|---|
| GET | http://localhost:3000 | Renderiza a página inicial |
| GET | http://localhost:3000/jobs/add | Renderiza a página de cadastro da vaga |
| POST | http://localhost:3000/jobs/add | Inclusão de nova vaga |
| GET | http://localhost:3000/jobs/details/:id | Renderiza a página de detalhes da vaga |


## :hammer_and_wrench: Tecnologias
* __Node.js__
* __Sequelize ORM__ para acessar os dados
* __Express-Handlebars__ para renderizar as páginas
* Banco __SQLite__

## :camera_flash: Screenshots
![](https://github.com/luiizsilverio/happy/blob/main/public/images/screenshots/happy.gif)


## :car: Iniciando o projeto
```bash
# Baixe o repositório com git clone e entre na pasta do projeto.
$ git clone https://github.com/luiizsilverio/job-hub.git

# Instale as dependências
$ npm install

# Para iniciar a aplicação
$ npm start

# Abra http://localhost:3000 no navegador
```

## :balance_scale: Licença
Este projeto está licenciado sob a [licença MIT](LICENSE).

## :email: Contato

E-mail: [**luiiz.silverio@gmail.com**](mailto:luiiz.silverio@gmail.com)
