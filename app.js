const express = require('express');
const path = require('path');
const app = express(); 
const mainRoutes=require("./routes/mainRoutes");

app.use( express.static('public'));
app.set('view engine','ejs');

// RUTAS
app.use('/', mainRoutes);
app.use('/index', mainRoutes); 
app.use('/register', mainRoutes);
app.use('/product', mainRoutes);
app.use('/car', mainRoutes);
app.use('/login', mainRoutes);
app.use('/Selecciones', mainRoutes);
app.use('/Resto-del-mundo', mainRoutes);
app.use('/Equipos-Americanos', mainRoutes);
app.use('/Equipos-Europeos', mainRoutes);
app.use('/productCar', mainRoutes);
app.use('/productDetail', mainRoutes);

app.get('/product', (req, res) => res.sendFile(path.resolve(__dirname + '/views/productDetail.ejs')));
app.get('/car', (req, res) => res.sendFile(path.resolve(__dirname + '/views/productCar.ejs')));
app.get('/register', (req, res) => res.sendFile(path.resolve(__dirname + '/views/register.ejs')));
app.get('/login', (req, res) => res.sendFile(path.resolve(__dirname + '/views/login.ejs'))); 
app.get('/selecciones', (req, res) => res.sendFile(path.resolve(__dirname + '/views/selecciones.ejs')));
app.get('/resto-del-mundo', (req, res) => res.sendFile(path.resolve(__dirname + '/views/resto-del-mundo.ejs'))); 
app.get('/equipos-Americanos', (req, res) => res.sendFile(path.resolve(__dirname + '/views/equipos-Americanos.ejs'))); 
app.get('/equipos-Europeos', (req, res) => res.sendFile(path.resolve(__dirname + '/views/equipos-Europeos.ejs'))); 
app.get('/index', (req, res) => res.sendFile(path.resolve(__dirname + '/views/index.html'))); 
app.get('/productCar', (req, res) => res.sendFile(path.resolve(__dirname + '/views/productCar.html'))); 
app.get('/productDetail', (req, res) => res.sendFile(path.resolve(__dirname + '/views/productDetail.html'))); 

app.listen(3000, ()=>{   console.log('Servidor esta corriendo');
});