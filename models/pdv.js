module.exports = function(mongoose) {
	var Schema = mongoose.Schema;
	var geojson = require(__dirname + '/geojson.js')(mongoose);
	var multipolygon = geojson.multipolygonSchema;
	var point = geojson.pointSchema;

	var pdvSchema = new Schema({
		id: {
			type: Number,
			unique: true,
			index: true
		},
		tradingName: String,
		ownerName: String,
		document: String,
		coverageArea: multipolygon,
		address: point
	});

	return mongoose.model('Pdv', pdvSchema);
}