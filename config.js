var mongoURI;
 if(process.env.NODE_ENV == 'test'){
	mongoURI = 'mongodb://test:testtest1@ds019826.mlab.com:19826/code-challenge-ambev-test';
} else {
	mongoURI = 'mongodb://dev:devdev1@ds159993.mlab.com:59993/code-challenge-ambev';
}

exports.mongoURI = mongoURI