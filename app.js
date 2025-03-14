// Basic Javascript

console.log("Week-1")

var async = function () {
    setTimeout(function () { log("I am coming out later although I have been called before the next one")}, 2000)
}

var adder=function(first,second){
    var sum=first+second
    return sum
}

var log=function(msg) {
    console.log("[Log]: ",msg)
}

log("Hello World")
log("Welcome to SIT323/737")
log("The sum is "+adder(5,6))
async();
log("This is going to come out before the previous one")

// After installing express
const express = require("express");
const res = require("express/lib/response");
const app = express();
const addTwoNumber = (n1,n2) => {
    return n1+n2;
}
const port = 3000;

// Basic route
app.get('/addTwoNumber', (req,res) => {
    res.send("Hello World!");
    const n1= parseInt(req.query.n1);
    const n2= parseInt(req.query.n2);
    const result = addTwoNumber(n1,n2);
    res.json({statuscocde:200, data:result});
});
console.log(addTwoNumber(19,12));

// Start the server
app.listen(port, () => {
    console.log(`Example app listening
        at https://localhost:${port}`);
})