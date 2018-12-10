module.exports = function(mongoose){
	var schemas = {};
	schemas.pdv = require(__dirname + '/pdv.js')(mongoose);

	return schemas;
}