var express = require('express'),
    app = express();

// == App Configuration Start ==

app.set('view engine', 'ejs');

// == App Configuration End ==

// == Production Routes Start ==

app.get('/', (req, res) => {
    res.redirect('/home');
});

app.get('/home', (req, res) => {
    res.render('home')
});

// == Production Routes End ==

// == Authorization Routes Start ==

app.get('/signup', (req, res) => {

})

app.get('/login', (req, res) => {

})

app.get('/logout', (req, res) => {

})


// == Authorization Routes End ==

// == Test Route Start ==

app.get('/test', (req, res) => {
    res.send('Test text');
});

// == Test Route End ==

var port = 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})