module.exports = function(modules, schemas){

	//PDV
	var pdv = {};
	pdv.controllers = {};
	pdv.controllers.crud = require(__dirname + '/modules/pdv/crud-controller.js')(schemas.pdv);

	//Example
	var example = {};
	example.controllers = {};
	example.controllers.example = require(__dirname + '/modules/example/example-controller.js')();

	//Rotas
	var routes = {};
	routes.routes = require(__dirname + '/routes/router.js')(modules.express, routes);
	routes.v1 = {};
	routes.v1.example = require(__dirname + '/routes/v1/example.js')(example);
	routes.v1.pdv = require(__dirname + '/routes/v1/pdv.js')(pdv);

	return routes.routes;

}