var express = require('express');
var backend = express();
backend.use(express.static(__dirname));

var port = process.env.PORT || 8081;
backend.listen(port);
console.log('Use port ' + port + ' to connect to this backend');

exports = module.exports = backend;
