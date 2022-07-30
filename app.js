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



app.listen(3000, ()=>{   console.log('Servidor esta corriendo');
});