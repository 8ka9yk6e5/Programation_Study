const express = require('express');
const {keyValidator} = require('./item_validator');

const app = express();

app.use(express.json());

app.post('/item/add', keyValidator);

app.listen(3001);