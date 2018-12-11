var app = require(__dirname + '/../app.js');
var server = app.server;
var schemas = app.schemas;
var chai = require('chai');
var chaiHttp = require('chai-http');

chai.use(chaiHttp);
var should = chai.should();

require(__dirname + '/pdv/crud-controller.js')(server, chai, schemas);
require(__dirname + '/pdv/geojson-controller.js')(server, chai, schemas);