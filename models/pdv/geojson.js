module.exports = function(mongoose){
	var schemas = {};

	schemas.multipolygonSchema = new mongoose.Schema({
		type: {
			type: String,
			enum: ['MultiPolygon'],
			required: true
		},
		coordinates: {
			type: [[[[Number]]]],
			required: true
		}
	});

	schemas.pointSchema = new mongoose.Schema({
		type: {
			type: String,
			enum: ['Point'],
			required: true
		},
		coordinates: {
			type: [Number],
			required: true
		}
	});

	return schemas;
}