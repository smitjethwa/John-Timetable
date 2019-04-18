var express = require('express');
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var Days = require('./models/days');
var app = express();

mongoose.connect('mongodb+srv://admin:admin@cluster0-ncyrq.mongodb.net/timetable?retryWrites=true', { useNewUrlParser: true }, function(err){
    if(err){
        console.log('Not connected to the database');
    }else{
        console.log('Connection Established !!');
    }
});
app.use(bodyParser.json());
app.get('/', function (req, res) {
   res.send('Hello World');
});
app.post('/user',function(req, res){
	var speech = "This should not work";
	if(req.body.queryResult.parameters.Days === 'Monday'){
		Days.find(function(err,result){
			var x = ['8:35-9:35:'+result[0].mon['8:45-9:45']+'\n','9:35-10:35:'+result[0].mon['9:45-10:45']+'\n','10:35-10:45:','10:45-11:45:','11:45-12:45:','12:45-01:15:','01:15-2:15:','2:15-3:15:','3:15-4:15:'];
			x = JSON.stringify(x);
			x = x.replace(/[\[\]]+/g,'');
			x = x.replace(/\\n/g, '\n');
			x = x.replace(/","/g ,'');
			 res.json({
				"fulfillmentText" : x
			});

		});
	}
});

app.listen(process.env.PORT || 8081, function() {
  console.log("Server up and listening");
});