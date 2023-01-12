const express = require('express')
const app = express()
const fs = require('fs')
const port = 3000

app.get('/sector.json', (req, res) => {
    fs.readFile('./sector.json', (err, json) => {
        let obj = JSON.parse(json);
        res.json(obj);
    });
})

app.get('/credit.json', (req, res) => {
    fs.readFile('./credit.json', (err, json) => {
        let obj = JSON.parse(json);
        res.json(obj);
    });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})