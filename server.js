module.exports = function(modules){

	//Example
	var example = {};
	example.controllers = {};
	example.controllers.example = require(__dirname + '/modules/example/example-controller.js')();

	//Rotas
	var routes = {};
	routes.routes = require(__dirname + '/routes/router.js')(modules.express, routes);
	routes.v1 = {};
	routes.v1.example = require(__dirname + '/routes/v1/example.js')(example);

	return routes.routes;

}