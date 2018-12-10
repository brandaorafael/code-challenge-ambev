# Código base para criação de uma API simples usando NodeJS

## Pré requisitos

Para rodar esse projeto, é necessário ter o Node.js e o seu gestor de pacotes NPM instalados em seu computador. Para mais infomrações clique [aqui](https://nodejs.org/).

Para um melhor entendimento deste projeto, deve-se ter um conhecimento básico de Javascript e de API REST.

## Branches

Esse projeto base tem como objetivo facilitar a construção de uma API REST sem precisar se proecupar com a configuração inicial.
Como alguns projetos costumam ter algumas particularidades, as branches começadas em ```???``` são projetos base que já vem com algumas particularidades implementadas.
Na lista a seguir se encontram as branches que possuem algo já implementado:

* **[???-](http://google.com)** - Branc

## Instalação

Clone, download ou de fork no projeto. Feito isso, entre no diretório do projeto e execute `npm install` para instalar todas as dependências.

## Rodando o Projeto

    node app.js

## Arquitetura do projeto
    
    app.js                          --> Arquivo principal, configurações iniciais
    modules                         --> Arquivo com todos os modulos importados para o projeto
    server.js                       --> Arquivo que une os modulos com suas respectivas rotas.
    package.json                    --> Dados do projeto e todas as dependências que serão instaladas com o comando "npm install"
    routes/
        router.js                   --> Arquivo responsável pela separação das versões da API a serem utilizadas (estou usando apenas a V1)
            /v1                     --> Diretório com todos os paths que serão utilizados no V1, chamando suas respectivas operações no sistema
    modules/                        --> Diretório que contém as operações a serem executadas quando chamados os endpoints
        teste/                      --> Pasta com os controllers do modulo teste
            teste-controller.js     --> Controller do modulo teste da API
    node_modules/                   --> Diretório criado automaticamente com todas as dependências que o sistema importou

Essa arquitetura consiste de 3 partes principais, o app.js, server.js e modules.js que fazem a configuração inicial da API, a pasta routes que cria os endpoints e conectam com seus respectivos modulos e a pasta modules, onde se encontram todo processamento dos modulos que alimentarão a API. Sempre que for necessário criar mais um endpois, deve fazer seu controller na pasta ```modules```e depois adiciona-lo no JSON de roteamneto no arquivo ```server.js```. Por último deve-se criar seu endpoint na pasta ```routes/v1```.

## Testando a API

Se o projeto for iniciado com sucesso, ele estará roteando a API para a porta 3000 do seu computador. Para testar o modulo 'teste', digite ```localhost:3000``` no seu navegador. O programa deverá imprimir um json ```{success: true}```na tela.
