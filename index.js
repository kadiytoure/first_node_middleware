const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
let app = express();
app.use(express.static('public'));
//handler url + fonction
app.post("/auth",
    //1ère fction à être appellée
    bodyParser.urlencoded({ extended: true }),
    function(request, response) {
        console.log(request.body);
        response.send("Success!")
    });

app.listen(80, function() {
    console.log('Server listening on port 80...');
});