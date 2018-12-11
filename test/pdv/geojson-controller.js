module.exports = function(server, chai, schemas){

	var PDV = schemas.pdv;

	var pdv1 = {
		"id": "1",
		"tradingName": "Adega Osasco",
		"ownerName": "Ze da Ambev",
		"document": "02.453.716/000170",
		"coverageArea": {
			"type": "MultiPolygon",
			"coordinates": [
				[
					[
						[-43.36556,-22.99669],
						[-43.36539,-23.01928],
						[-43.26583,-23.01802],
						[-43.25724,-23.00649],
						[-43.23355,-23.00127],
						[-43.2381,-22.99716],
						[-43.23866,-22.99649],
						[-43.24063,-22.99756],
						[-43.24634,-22.99736],
						[-43.24677,-22.99606],
						[-43.24067,-22.99381],
						[-43.24886,-22.99121],
						[-43.25617,-22.99456],
						[-43.25625,-22.99203],
						[-43.25346,-22.99065],
						[-43.29599,-22.98283],
						[-43.3262,-22.96481],
						[-43.33427,-22.96402],
						[-43.33616,-22.96829],
						[-43.342,-22.98157],
						[-43.34817,-22.97967],
						[-43.35142,-22.98062],
						[-43.3573,-22.98084],
						[-43.36522,-22.98032],
						[-43.36696,-22.98422],
						[-43.36717,-22.98855],
						[-43.36636,-22.99351],
						[-43.36556,-22.99669]
					]
				]
			]
		},
		"address": {
			"type": "Point",
			"coordinates": [-43.297337,-23.013538]
		}
	}

	var pdv2 = {
		"id": "3",
		"tradingName": "Adega Sao Paulo",
		"ownerName": "Pedro Silva",
		"document": "04666182390",
		"coverageArea": {
			"type": "MultiPolygon",
			"coordinates": [
				[
					[
						[-38.6577,-3.7753],
						[-38.63212,-3.81418],
						[-38.61925,-3.82873],
						[-38.59762,-3.84004],
						[-38.58727,-3.84345],
						[-38.58189,-3.8442],
						[-38.57667,-3.84573],
						[-38.56706,-3.85015],
						[-38.56637,-3.84937],
						[-38.56268,-3.84286],
						[-38.56148,-3.83772],
						[-38.55881,-3.82411],
						[-38.55577,-3.81507],
						[-38.55258,-3.80674],
						[-38.54968,-3.80222],
						[-38.53406,-3.79495],
						[-38.52894,-3.77718],
						[-38.52517,-3.76313],
						[-38.53118,-3.76203],
						[-38.53968,-3.76126],
						[-38.54577,-3.76151],
						[-38.55344,-3.76102],
						[-38.56327,-3.76029],
						[-38.58118,-3.75907],
						[-38.60079,-3.75423],
						[-38.60671,-3.74772],
						[-38.61787,-3.7431],
						[-38.62577,-3.7472],
						[-38.63332,-3.7496],
						[-38.65049,-3.76057],
						[-38.6577,-3.7753]
					]
				]
			]
		},
		"address": {
			"type": "Point",
			"coordinates": [-38.59826,-3.774186]
		}
	}

	var pdv3 ={
		"id": "4",
		"tradingName": "Bar do Ze",
		"ownerName": "Joao Silva",
		"document": "04698149428",
		"coverageArea": {
			"type": "MultiPolygon",
			"coordinates": [
				[
					[
						[-38.56586,-3.85041],
						[-38.49599,-3.87361],
						[-38.45033,-3.90358],
						[-38.42304,-3.90273],
						[-38.37892,-3.88971],
						[-38.35566,-3.8844],
						[-38.39557,-3.82497],
						[-38.41531,-3.80133],
						[-38.42771,-3.76754],
						[-38.44251,-3.75054],
						[-38.45672,-3.75024],
						[-38.46562,-3.74746],
						[-38.46525,-3.74657],
						[-38.46616,-3.74458],
						[-38.46507,-3.74083],
						[-38.47256,-3.73743],
						[-38.47844,-3.72759],
						[-38.49002,-3.72476],
						[-38.49573,-3.72254],
						[-38.51226,-3.71384],
						[-38.51736,-3.74292],
						[-38.52517,-3.7681],
						[-38.53095,-3.78294],
						[-38.53415,-3.79124],
						[-38.5412,-3.79573],
						[-38.55148,-3.80326],
						[-38.55796,-3.82],
						[-38.5656,-3.84839],
						[-38.56586,-3.85041]
					]
				]
			]
		},
		"address": {
			"type": "Point",
			"coordinates": [-38.495586,-3.809936]
		}
	}

	var pdv4 ={
		"id": "100",
		"tradingName": "Lugar teste",
		"ownerName": "Dev",
		"document": "1234567890",
		"coverageArea": {
			"type": "MultiPolygon",
			"coordinates": [
				[
					[
						[-38.540897369384766,-3.804307620724685],
						[-38.53437423706055,-3.805335318820754],
						[-38.535232543945305,-3.799682964128507],
						[-38.540897369384766,-3.804307620724685]
					]
				]
			]
		},
		"address": {
			"type": "Point",
			"coordinates": [-38.53660583496094,-3.802766071282402]
		}
	}

	// var post;

	describe('NEAREST pdv', function () {
		this.timeout(15000);

		before(function (done) {
			PDV.deleteMany({}, function(){
				PDV.collection.insertMany([pdv1, pdv2, pdv3, pdv4], function(err, pdvDB){
					if(err) console.log(err)
					done();
				});
			});
		});

		describe('GET nearest pdv', function() {

			it('it should try to GET the nearest pdv without long', function(done) {
				chai.request(server)
				.get('/v1/pdv/nearest?lat=-43.297337')
				.end(function(err, res){
					res.should.have.status(422);
					done();
				});
			});

			it('it should try to GET the nearest pdv without lat', function(done) {
				chai.request(server)
				.get('/v1/pdv/nearest?long=-23.013538')
				.end(function(err, res){
					res.should.have.status(422);
					done();
				});
			});

			it('it should try to GET the nearest pdv without long and lat', function(done) {
				chai.request(server)
				.get('/v1/pdv/nearest')
				.end(function(err, res){
					res.should.have.status(422);
					done();
				});
			});

			it('it should try GET the nearest pdv but it isn\'t inside any coverage area', function(done) {
				chai.request(server)
				.get('/v1/pdv/nearest?lat=-38.548622131347656&long=-3.8714479717310915')
				.end(function(err, res){
					res.should.have.status(404);
					done();
				});
			});

			it('it should GET the nearest pdv', function(done) {
				chai.request(server)
				.get('/v1/pdv/nearest?lat=-38.53922367095947&long=-3.795957528284279')
				.end(function(err, res){
					res.should.have.status(200);
					res.body.should.be.a('object');
					// id(100) is the nearest, but this lat/long is only contained in id(3) and id(4)
					res.body.pdv.id.should.be.eql(4);
					done();
				});
			});
		});
	})
}