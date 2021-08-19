const express = require('express');
const router = express.Router();
const path = require('path');

router.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, '..', 'public', 'home.html'));
})

router.get("/upload", (req, res)=>{
    res.sendFile(path.join(__dirname, '..', 'public', 'upload.html'));
})

router.get("/uploads", (req, res)=>{
    res.sendFile(path.join(__dirname, '..', 'public', 'uploads.html'));
})

module.exports = router;