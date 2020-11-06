'use strict';

const express = require('express');

// Constants
const PORT = 80;
const HOST = '127.0.0.1';

// New comment 
// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello Node.js Sample!\n');
});

var port = process.env.PORT||PORT;
app.listen(port);
console.log(`Running on http://${HOST}:${PORT}`);
