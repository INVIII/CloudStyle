const exp = require('constants');
const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "/public")))

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "/public/index.html"));
})

app.listen(3000, ()=>{
    console.log("Server Started at port 3000");
})

