var express = require('express'),
    app = express();

app.get('/', (req, res) => {
    res.redirect('/home');
});

app.get('/home', (req, res) => {

});

var port = 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
