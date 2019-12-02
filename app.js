var express = require('express'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    LocalStrategy = require('passport-local'),
    User = require('./models/user'),
    app = express();


// == App Configuration Start ==


// Mongo Connection 
// Enter Correct <password>
mongoose.connect('mongodb+srv://admin:<password>@cluster0-cehwv.mongodb.net/booking_app?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})


// Passport Serialization Statements.
passport.serializeUser((user,done)=>{
    done(null,user);
});

passport.deserializeUser((obj,done)=>{
    done(null,obj);
});

// Express Session Inititalization.
app.use(require("express-session")({
    secret: 'i am root',
    resave: true,
    saveUninitialized: true
}));

// Passport Configuration.
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Misc. Configuration
app.set('view engine', 'ejs');
app.use(express.static('public'));

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