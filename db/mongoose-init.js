module.exports = function(config, mongoose) {
	var mongoose = mongoose;
	mongoose.connect(config.mongoURI, { useNewUrlParser: true });
	mongoose.connection.on('error', console.error);
	mongoose.set('useCreateIndex', true);
	return mongoose;
}
