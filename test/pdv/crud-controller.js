module.exports = function(server, chai, schemas){

	var PDV = schemas.pdv;

	var pdv = {
		"id": 1,
		"tradingName": "Adega da Cerveja - Pinheiros",
		"ownerName": "Zé da Silva",
		"document": "1432132123891/0001", //CNPJ
		"coverageArea": {
			"type": "MultiPolygon",
			"coordinates": [
				[[[30, 20], [45, 40], [10, 40], [30, 20]]], 
				[[[15, 5], [40, 10], [10, 20], [5, 10], [15, 5]]]
			]
		}, //Área de Cobertura
		"address": {
			"type": "Point",
			"coordinates": [-46.57421, -21.785741]
		}
	}

	describe('Init', function () {
		this.timeout(15000);

		after(function (done) {
			PDV.collection.drop(function(){
				done();
			});
		});

		describe('CRUD pdv', function() {

			var post;

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

			it('it should try POST a pdv and return an error', function(done) {
				chai.request(server)
				.post('/v1/pdv')
				.send(pdv)
				.end(function(err, res){
					res.should.have.status(409);
					done();
				});
			});

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