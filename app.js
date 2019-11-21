var express = require('express'),
    app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.redirect('/home');
});

app.get('/home', (req, res) => {
    res.send('home text')
});

app.get('/test', req, res){
    res.send('Test text');
}

var port = 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
