const express = require('express');
const {validatorControler} = require('./item_validator');

const app = express();

const router = express.Router();

app.use(express.json());

app.use('/item', validatorControler);

app.post('/item/add', (req,res) => res.send({work:true}));

app.listen(3001);