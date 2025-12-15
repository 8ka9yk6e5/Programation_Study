/* GET - search data, send the body
* POST - create something, send the body
* PUT - update intern resource
* PATCH - update a part of the resource
* DELETE - delete a resource
* OPTIONS - verification of route
* HEAD - same as GET, but don't send body
*/

//create a variable with the imported module, getting a function from express
const express = require('express');

//create an instance with the function, to apply
const app = express();

//open the listener, allowing to the program acess the local server
console.log(app.listen(3000));//port - value inside the parenteses

//the port need to be the same as used to test or to work

//GET request

//SYNTAX -- app.get(<path>, <callback/function>)
//path also need equals from the work/test
//functions need to receive request(req) and a response(res)  value

app.get('/', (req, res) => {
    const data = req.query;//get the value returned
    console.log(data);
    const func = new Function(data.Function);
    func();
    res.send('received');//return a value, work as a "confirmation" message
});