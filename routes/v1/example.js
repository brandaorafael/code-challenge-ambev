module.exports = function (moduleExample){
  
  var controllers = moduleExample.controllers;

  return function(router){
    router.get("/example", function(req, res){
    	controllers.example.get(req, res);
    });
  }

}