// ************ Require's ************
const express = require('express');
const path = require('path');
const cookies = require('cookie-parser');
const app = express(); 
const methodOverride=require("method-override");
const session=require('express-session');

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

// view engine setup
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, './public')));

app.use(cookies());

//Aquí estoy disponiendo la posibilidad para utilizar el seteo en los formularios para el usod e los metodos put ó delete
app.use(methodOverride('_method'));


app.use(session({
    secret:'Secreto!!',
    resave: false,
    saveUninitialized: false,}));

//****middleware usuario loqueado */    
const usuarioLogueadoMiddleware = require('./middlewares/usuarioLogueadoMiddleware');
app.use(usuarioLogueadoMiddleware);

// RUTAS
//Ejecuto el llamado a mis rutas
const mainRoutes=require("./routes/mainRoutes");
const productsRoutes=require("./routes/productsRoutes");
const usersRoutes=require("./routes/usersRoutes");

app.use('/', mainRoutes);
app.use('/products', productsRoutes);
app.use('/users', usersRoutes);

//error 404

app.use ( (req, res, next) => {
    res.status(404).render('not-found-error.ejs')
},)


app.listen(3000, ()=>{   console.log('Servidor esta corriendo');
});