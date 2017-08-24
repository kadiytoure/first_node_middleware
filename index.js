const fs = require('fs');
const express = require('express');
let app = express();
//app.use(express.static);
app.listen(80, function() {
    console.log('Server listening on port 80...');
});