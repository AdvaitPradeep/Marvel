const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
});

app.get("/comic1", function(req, res){
    res.sendFile(__dirname+"/comic1.html");
});

app.get("/comic2", function(req, res){
    res.sendFile(__dirname+"/comic2.html");
});

app.get("/comic3", function(req, res){
    res.sendFile(__dirname+"/comic3.html");
});

app.get("/comic4", function(req, res){
    res.sendFile(__dirname+"/comic4.html");
});

app.get("/comic5", function(req, res){
    res.sendFile(__dirname+"/comic5.html");
});

app.listen(3000, function(){
    console.log("Server running on port 3000");
});