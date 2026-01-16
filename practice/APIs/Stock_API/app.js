const express = require('express');
const itemRouter = require('./router/items-routes');

const app = express();
app.use(express.json());

app.use('/item', itemRouter);

app.listen(3001);