const express = require('express');
const {keyValidator, valueValidator} = require('./item_validator');

const app = express();

app.use(express.json());

app.post('/item/add', keyValidator, valueValidator);

app.listen(3001);