module.exports = function(Pdv){

	return {
		get: function(req, res){
      Pdv.findOne({id: req.params.id}, function(err, pdv){
        if (err) return res.json({error: err});
        return res.json({pdv: pdv});
      })
		},

		post: function(req, res){
			// var body = {
   //      "id": 1, 
   //      "tradingName": "Adega da Cerveja - Pinheiros",
   //      "ownerName": "Zé da Silva",
   //      "document": "1432132123891/0001", //CNPJ
   //      "coverageArea": { 
   //        "type": "MultiPolygon", 
   //        "coordinates": [
   //          [[[30, 20], [45, 40], [10, 40], [30, 20]]], 
   //          [[[15, 5], [40, 10], [10, 20], [5, 10], [15, 5]]]
   //        ]
   //      }, //Área de Cobertura
   //      "address": { 
   //        "type": "Point",
   //        "coordinates": [-46.57421, -21.785741]
   //      }, // Localização do PDV
   //    }

      var body = req.body;

			new Pdv(body).save(function(err, pdv){
        if(err){
          if (err.code == 11000){
            return res.status(409).json({error: err})
          };
          return res.status(501).json({error: err});
        }
        return res.json({pdv: pdv});
			});
		}
	}
}