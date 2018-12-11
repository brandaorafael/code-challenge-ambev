module.exports = function(server, chai, schemas){

	var PDV = schemas.pdv;

	var pdv = {
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

	var pdv1 = {
		"id": "1",
		"tradingName": "Teste 1",
		"ownerName": "Ze da Ambev",
		"document": "1234567890",
		"coverageArea": {
			"type": "MultiPolygon",
			"coordinates": [
				[
					[
						[-43.36556,-22.99669],
						[-43.36539,-23.01928],
						[-43.26583,-23.01802]
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
		"id": "100",
		"tradingName": "Teste 1",
		"ownerName": "Ze da Ambev",
		"document": "02.453.716/000170",
		"coverageArea": {
			"type": "MultiPolygon",
			"coordinates": [
				[
					[
						[-43.36556,-22.99669],
						[-43.36539,-23.01928],
						[-43.26583,-23.01802]
					]
				]
			]
		},
		"address": {
			"type": "Point",
			"coordinates": [-43.297337,-23.013538]
		}
	}

	describe('CRUD pdv', function () {
		this.timeout(15000);

		before(function (done) {
			PDV.deleteMany({}, function(){
				done();
			});
		});

		var post;

		describe('POST pdv', function() {


			it('it should POST a pdv', function(done) {
				chai.request(server)
				.post('/v1/pdv')
				.send(pdv)
				.end(function(err, res){
					post = res.body;
					res.should.have.status(200);
					res.body.should.be.a('object');
					done();
				});
			});

			it('it should try POST a pdv with used id and return an error', function(done) {
				chai.request(server)
				.post('/v1/pdv')
				.send(pdv1)
				.end(function(err, res){
					res.should.have.status(409);
					done();
				});
			});

			it('it should try POST a pdv with used document and return an error', function(done) {
				chai.request(server)
				.post('/v1/pdv')
				.send(pdv2)
				.end(function(err, res){
					res.should.have.status(409);
					done();
				});
			});
		});

		describe('GET pdv', function() {

			it('it should GET the correct pdv', function(done) {
				chai.request(server)
				.get('/v1/pdv/1')
				.end(function(err, res){
					res.should.have.status(200);
					res.body.should.be.a('object');
					res.body.should.be.eql(post);
					done();
				});
			});

			it('it should try to GET an inexistent pdv', function(done) {
				chai.request(server)
				.get('/v1/pdv/2')
				.end(function(err, res){
					res.should.have.status(404);
					done();
				});
			});
		});
	})
}