/* 
* GET - search data, send query params(URL) - Read
* POST - create something, send the body - Creation/Action
* PUT - replace the entire resource - Substitute all
* PATCH - update a part of the resource - Partial update
* DELETE - delete a resource - Remove
* OPTIONS - discover allowed methods - Capabilities
* HEAD - same as GET, no response body - Metadata
*/

/*
*REQ - request - query or JSON which come(to exterior) to use
*RES - response - value to return to exterior(application to make it)
*/

//create a variable with the imported module, getting a function from express
const express = require('express');

//create an instance with the function, to apply
const app = express();

//open the listener, allowing to the program acess the local server
console.log(app.listen(3000));//port - value inside the parenteses

//the port need to be the same as used to test or to work
//all paths needs to be equals from the work/test
//functions need to receive request(req) and a response(res) value parameters


//GET request

//SYNTAX -- app.get(<path>, <callback/function>)

const valueNeed = 'STROK';

app.get('/get', (req, res) => {
    if(Object.values(req.query).find((value) => (value == valueNeed) ? true : false)) {
        console.log('work');
        res.send('str - true');
    }
    else res.send('str - false');
});

//res.send(<value>);
//return a value, work as a "confirmation" message

//POST request

//SYNTAX -- app.post(<path>, <callback/function>);

app.use(express.json());//allow to use JSON values from requests

app.post('/post', (req, res) => {
    console.log(req.body);
    res.send(true);
});

//PUT request

//SYNTAX -- app.put(<path>, <callback/function>);


app.put('/put', (req, res) => {
    console.log("change call(PUT)");
    console.log(JSON.stringify(req.body));
    res.send('working');
});

//DELETE request

//SYNTAX -- app.delete(<path>, <callback/function>);

app.delete('/delete/:value', (req, res) => {//the colon transfom it in a variable
    console.log('delete request - to delete : ' + req.params.value);//to access the params inside the url, in case, the value param
    console.log(req.url);//to access the whole url
    res.send(`deleted : ${req.params.value}`);
});

//PATHs

const paths = [
    '/abc',//hits only the specific path
    ['/abc', '/def'],//hits all match path inside the array
    '/abc/:abcvalue',//create a variable with the param(value after colon)
    '/abc/:abcvalue?',//with a optional second value
    '/abc/*',//match with any subpath, if the path match
]