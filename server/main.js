var Express = require('express');

var app = new Express();
//asdfasdf
// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('./../app/index',{});
})
.use(Express.static(__dirname + '/../.tmp'))
.listen(3000);