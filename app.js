let express = require('express');
let app = express();
app.locals.pretty = true;

//to set the directory named 'public' as the one for static files
//Able to access static file by a direct url like 'IP/FunFun.jpg'
app.use(express.static('public'));

//It is the same way as 'IP/cutedog'
app.get('/cutedog', function(req, res){
    res.send('안녕 난 재미야! <img src="/FunFun.jpg">');
});

//To use template engine to get both credits of static and dynamic codings
app.set('view engine','pug');
//to set a directory of template engine files
app.set('views', './views');
//to render pug file 
app.get('/template',function(req,res){
    res.render('temp',{time: Date()});
});

//user connected to the home('/') of a website.
app.get('/', function(req, res){
    res.send('<h1>hello world!</h1>');
});

app.listen(3000, function(){
    console.log('Connected port 3000!');
});