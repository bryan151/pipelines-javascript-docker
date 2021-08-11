'use strict';

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.send('<h1>This is my first app in AKS</h1>\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);