var modules = require(__dirname + '/modules.js')();

var config = require(__dirname + '/config.js');

var app = modules.express();

app.use(modules.bodyParser.json());
app.use(modules.morgan('dev'));
app.use(modules.bodyParser.urlencoded({ extended: false }));
app.use(modules.express.static(modules.path.join(__dirname, 'public')));
app.use(modules.methodOverride());

var http = modules.http.createServer(app);

var mongoose = require(__dirname + '/db/mongoose-init.js')(config, modules.mongoose);

var schemas = require(__dirname + '/models/schemas.js')(mongoose);

require(__dirname + '/server.js')(modules, schemas)(app)();

var server =  http.listen(process.env.PORT || 7000, function(){
	console.log("Server is on, listening on: 7000");
});

module.exports = {
	server: server,
	schemas: schemas
};

return server;