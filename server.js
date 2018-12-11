module.exports = function(modules, schemas){

	//PDV
	var pdv = {};
	pdv.controllers = {};
	pdv.controllers.crud = require(__dirname + '/modules/pdv/crud-controller.js')(schemas.pdv);
	pdv.controllers.geojson = require(__dirname + '/modules/pdv/geojson-controller.js')(schemas.pdv);

	//Rotas
	var routes = {};
	routes.routes = require(__dirname + '/routes/router.js')(modules.express, routes);
	routes.v1 = {};
	routes.v1.pdv = require(__dirname + '/routes/v1/pdv.js')(pdv);

	return routes.routes;

}