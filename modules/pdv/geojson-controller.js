module.exports = function(Pdv){

	return {
		findNearest: function(req, res){
			var lat = req.query.lat;
			var long = req.query.long;

			if(!req.query.hasOwnProperty('lat') || !req.query.hasOwnProperty('long')){
				return res.status(422).json({error: 'Missing arguments'});
			}

			var point = { type: 'Point', coordinates: [lat, long] };

			Pdv.find({'address': { $near: {$geometry: point }}}).findOne({'coverageArea': { $geoIntersects: {$geometry: point} }}, function(err, pdv){
				if (err) return res.status(501).json({error: "Internal server error"});
				if(pdv == null) return res.status(404).json({error: "PDV not found"});
				return res.json({pdv: pdv});
			});
		}
	}
}