var server = require(__dirname + '/../app.js');
var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var should = chai.should();

describe('/GET book', function() {
  it('it should GET all the books', function(done) {
    chai.request(server)
      .get('/v1/example')
      .end(function(err, res){
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(3);
        done();
      });
  });
});