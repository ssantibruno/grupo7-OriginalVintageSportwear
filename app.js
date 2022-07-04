const express = require('express');
const path = require('path')

const app = express(); 

app.use( express.static('public'));

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname + '/views/index.html')));
app.get('/product', (req, res) => res.sendFile(path.resolve(__dirname + '/views/productDetail.html')));
app.get('/car', (req, res) => res.sendFile(path.resolve(__dirname + '/views/productCar.html')));
app.get('/register', (req, res) => res.sendFile(path.resolve(__dirname + '/views/register.html')));
app.get('/login', (req, res) => res.sendFile(path.resolve(__dirname + '/views/login.html'))); 

app.listen(3000, ()=>{   console.log('Servidor esta corriendo');
});