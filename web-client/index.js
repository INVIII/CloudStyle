const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require('./routes/mainRoute');

app.set('views', path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "/public")))

app.use("/", mainRouter);

app.listen(3000, ()=>{
    console.log("Server Started at port 3000");
})