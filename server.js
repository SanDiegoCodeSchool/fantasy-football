const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;


app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    res.render('index');
});

app.listen(PORT, function () {
    console.log(`We're live on port 3000!`);
});

