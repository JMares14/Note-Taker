const express = require('express');
const PORT =  process.env.PORT||3001;
const tests = require('./db/db.json');
const uniqid = require('uniqid')
const path = require('path');
const fs = require('fs');
const { json } = require('express');
const app = express()
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));

app.use(express.static('public'));
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/api/notes', (req, res)=> {
    res.send(tests)
});

app.get('/notes', (req, res)=> {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.post('/api/notes', (req,res) =>{
    const newNote = {title:req.body.title, text:req.body.text, id:uniqid() }
    tests.push(newNote)
    fs.writeFile('./db/db.json', JSON.stringify(tests), (err) => {
        if (err) {console.log(err);}
          
        else {
          console.log("Note added!");
        }
    })
    res.send(tests)
});


app.listen (PORT, () =>{
    console.log(`Listening on  ${PORT}`);
});