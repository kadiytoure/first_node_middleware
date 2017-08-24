const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const auth = require('http-auth');

let app = express();
app.use(express.static('public'));

let basic = auth.basic({
    realm: "Secret Simplon",
    file: __dirname + "/.htpasswd"
});
app.use("/private", auth.connect(basic));

//handler url + fonction
app.post("/auth",
    //1ère fction à être appellée
    bodyParser.urlencoded({ extended: true }),
    function(request, response) {
        console.log(request.body);
        response.send("Success!")
    });
app.listen(9000);