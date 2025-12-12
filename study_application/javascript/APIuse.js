/*
* Explication of each type:
* GET - search data, send the body
* POST - create something, send the body
* PUT - update intern resource
* PATCH - update a part of the resource
* DELETE - delete a resource
* OPTIONS - verification of route
* HEAD - same as GET, but don't send body
*/

const express = require('express');
const app = express();

console.log(app.listen(3000));

app.post("/users", (req, res) =>{
    const dados = req.body;
    console.log(dados)
    res.send('geted');
});
