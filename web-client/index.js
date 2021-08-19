const exp = require('constants');
const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "/public")))

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "/public/index.html"));
})

app.get("/upload", (req, res)=>{
    res.sendFile(path.join(__dirname, "/public/upload.html"));
})

app.get("/uploads", (req, res)=>{
    res.sendFile(path.join(__dirname, "/public/uploads.html"));
})

app.listen(3000, ()=>{
    console.log("Server Started at port 3000");
})

