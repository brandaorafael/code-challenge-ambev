module.exports = function(Pdv){

	return {
		get: function(req, res){
			Pdv.findOne({id: req.params.id}, function(err, pdv){
				if (err) return res.status(501).json({error: err});
				if(pdv == null) return res.status(404).json({error: "PDV not found"});
				return res.json({pdv: pdv});
			})
		},

		post: function(req, res){

			var body = req.body;

			new Pdv(body).save(function(err, pdv){
				if(err){
					if (err.code == 11000) return res.status(409).json({error: err});
					return res.status(501).json({error: err});
				}
				return res.json({pdv: pdv});
			});
		}
	}
}