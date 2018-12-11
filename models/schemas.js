module.exports = function(mongoose){
	var schemas = {};
	schemas.pdv = require(__dirname + '/pdv/pdv.js')(mongoose);

	return schemas;
}