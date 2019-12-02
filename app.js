var express = require('express'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    LocalStrategy = require('passport-local'),
    User = require('./models/user'),
    app = express();


// == App Configuration Start ==
// Enter Correct <password>
mongoose.connect('mongodb+srv://admin:<password>@cluster0-cehwv.mongodb.net/booking_app?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
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