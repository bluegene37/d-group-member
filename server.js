// server.js
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + "/dist"));
// app.use(express.static(path.join(__dirname, '/dist')));
var port = process.env.PORT || 5000;
app.listen(port);

//Return the index for any other GET request
// app.get('/*', function (req, res) {
//     res.sendFile('build.js', {root: path.join(__dirname, '/dist')});
// });
console.log('server started '+ port);