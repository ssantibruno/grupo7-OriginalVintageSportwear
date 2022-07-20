const express = require('express');
const path = require('path');
const app = express(); 
const mainRoutes=require("./routes/mainRoutes");

app.use( express.static('public'));
app.set('view engine','ejs');

app.use('/', mainRoutes);
app.use('/index', mainRoutes); 

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname + '/views/index.html')));
app.get('/product', (req, res) => res.sendFile(path.resolve(__dirname + '/views/productDetail.html')));
app.get('/car', (req, res) => res.sendFile(path.resolve(__dirname + '/views/productCar.html')));
app.get('/register', (req, res) => res.sendFile(path.resolve(__dirname + '/views/register.html')));
app.get('/login', (req, res) => res.sendFile(path.resolve(__dirname + '/views/login.html'))); 
app.get('/Selecciones', (req, res) => res.sendFile(path.resolve(__dirname + '/views/Selecciones.html')));
app.get('/Resto-del-mundo', (req, res) => res.sendFile(path.resolve(__dirname + '/views/Resto-del-mundo.html'))); 
app.get('/Equipos-Americanos', (req, res) => res.sendFile(path.resolve(__dirname + '/views/Equipos-Americanos.html'))); 
app.get('/Equipos-Europeos', (req, res) => res.sendFile(path.resolve(__dirname + '/views/Equipos-Europeos.html'))); 
app.get('/index', (req, res) => res.sendFile(path.resolve(__dirname + '/views/index.html'))); 
app.get('/productCar', (req, res) => res.sendFile(path.resolve(__dirname + '/views/productCar.html'))); 
app.get('/productDetail', (req, res) => res.sendFile(path.resolve(__dirname + '/views/productDetail.html'))); 

app.listen(3000, ()=>{   console.log('Servidor esta corriendo');
});