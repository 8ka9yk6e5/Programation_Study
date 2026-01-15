const express = require('express');
const validatorControler = require('./validators/item-validator');
const router = require('./routes');

const app = express();

app.use(express.json());

app.use('/item' ,router);//use a router to call the validator of items

app.post('/item/add', (req,res) => res.send({work:true}));

app.listen(3001);