module.exports = function (modulePdv){

	var controllers = modulePdv.controllers;

	return function(router){

		router.get("/pdv/nearest", function(req, res){
			controllers.geojson.findNearest(req, res);
		});

		router.get("/pdv/:id", function(req, res){
			controllers.crud.get(req, res);
		});

		router.post("/pdv", function(req, res){
			controllers.crud.post(req, res);
		});

	}

}