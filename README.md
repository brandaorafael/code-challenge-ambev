
# Solução de backend para https://github.com/ZXVentures/code-challenge/blob/master/backend.md

## Sobre o projeto

O projeto para essa solução em backend foi feito usando o framework para Javascript, [NodeJS](https://nodejs.org/) (v8.10.0), e o banco de dados não relacional, [MongoDB](https://www.mongodb.com/), tanto pela simplicidade dos dados do projeto quanto pelo uso de [GeoJson](http://geojson.org/). Para manejo do banco foi usado o modelador de objetos, [Mongoose](https://mongoosejs.com/). Ele é conectado ao banco e configurado inicialmente no arquivo mongoose-init.js, e seus Schemas foram definidos no diretório models do projeto. Para simplificar os testes no projeto, ele já está conectado a 2 bancos de dados (dev e tests) usando o serviço do [mLab](https://mlab.com/). Para implementação de testes automatizados, foram usados os frameworks de testes [Mocha](https://mochajs.org/) e [Chai](https://www.chaijs.com/). Eles são usados para testar os módulos em todos os seus possíveis cenários e comparar as respostas obtidas com as esperadas. Para não interferir no banco usado para testes em desenvolvimento, foi criado um banco de dados exclusivo para uso em testes, que é esvaziado ao final do teste de cada módulo.


## Pré requisitos

Para rodar esse projeto, é necessário ter o Node.js e o seu gestor de pacotes NPM instalados em seu computador. Para mais informações clique [aqui](https://nodejs.org/).


## Instalação

Clone, download ou de fork no projeto. Feito isso, entre no diretório do projeto e execute `npm install` para instalar todas as dependências.


## Deploy

O deploy foi feito pela ferramenta [Heroku](https://www.heroku.com/). Foi criado um app novo na plataforma e 'linkado' ele à branch master deste projeto. Agora toda vez que algo subir na branch master, o Heroku fará deploy automaticamente. A única coisa que teve de ser modificada para esse deploy foi no package.json, onde foi configurado que o script de start é pelo arquivo app.js (e não server.js que é seu default). https://code-challenge-ambev.herokuapp.com/v1/pdv/1

    https://code-challenge-ambev.herokuapp.com


## Rodando o Projeto

    node app.js

Se o projeto for iniciado com sucesso, ele estará roteando a API para a porta 7000 do seu computador e o terminal irá imprimir a mensagem  ```Server is on, listening on: 7000``` .


## Arquitetura do projeto
    
    app.js                          --> Arquivo principal, configurações iniciais
    config.js                       --> Arquivo que reune configurações do sistema (no projeto somente para coneção com o banco)
    modules.js                      --> Todos os modulos do projeto são chamados aqui
    package.json                    --> Dados do projeto e todas as dependências que serão instaladas com o comando "npm install"
    PDV.postman_collection.json     --> Arquivo com a Collection para testes no Postman
    PDV.postman_environment.json    --> Arquivo com o Environment para testes no Postman
    server.js                       --> Arquivo que une os modulos com suas respectivas rotas.
    db/
        mongoose-init.js            --> Configuração inicial do banco de dados
    models/
        schemas.js                  --> Agragação dos Schemas definidos
        pdv/
            geojson.js              --> Definição de Point e MultiPolygon usados na contrução do Schema de PDV
            pdv.js                  --> Definição do schema de PDV
    modules/                        --> Diretório que contém as operações a serem executadas quando chamados os endpoints
        pdv/                        --> Pasta com os controllers do modulo pdv
            crud-controller.js      --> Controller para criação e busca de PDVs
            geojson-controller.js   --> Controller para busca de PDVs mais próximos usando Geojson
    node_modules/                   --> Diretório criado automaticamente com todas as dependências que o sistema importou
    routes/
        router.js                   --> Arquivo responsável pela separação das versões da API a serem utilizadas (estou usando apenas a V1)
            /v1                     --> Diretório com todos os paths que serão utilizados no V1, chamando suas respectivas operações no sistema
                pdv.js              --> Contém os paths para criação, busca por id e busca por localização
    test/                           --> Diretório com os testes automatizados
        tests.js                    --> Arquivo com configurações iniciais e agrupamento das funções de testes
        pdv/                        --> Diretório com os testes do modulo de pdv
            crud-controller.js
            geojson.js

Essa arquitetura consiste de 3 partes principais:

* Os arquivos app.js, server.js e modules.js que fazem a configuração inicial da API
* O diretório routes que cria os endpoints e conectam com seus respectivos modulos
* O diretório modules, onde se encontram todo processamento dos modulos que alimentarão a API


## Funcionamento da API

O projeto possui 3 endpoint:

* POST /v1/pdv
* GET /v1/pdv/:id
* GET /v1/pdv?lat=[lat]&long=[long]

Esses 3 endpoints podem retornar os seguintes status no header do response:

* 200: Sucesso
* 404: Item não encontrado
* 409: Erro ao inserir item com chave já existente no banco
* 422: Algum argumento está faltando no request
* 501: Erro interno no servidor

Para facilitar os testes, foi criado uma Collection e um Environment para o [Postman](https://www.getpostman.com/).


## Testando a API

    npm test

Importante lembrar que a porta que o sistema está configurado para usar (inicialmente a 7000) não deve estar em uso enquanto são feitos os testes automatizados.
