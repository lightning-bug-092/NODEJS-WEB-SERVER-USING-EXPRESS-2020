var express= require('express');
var app = express();
var port = 9022;
app.get('/', function(resq,resp){
	resp.send('<h2>I am HeIU</h2>');
});
app.listen(port,function(){
	console.log('loading . . .')
})