const express = require('express');
const path = require('path');
const app = express(); 
const mainRoutes=require("./routes/mainRoutes");
const productsRoutes=require("./routes/productsRoutes");
const methodOverride=require("method-override");

app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, './public')));

app.use(methodOverride('_method'));

// RUTAS
app.use('/', mainRoutes);
app.use('/index', mainRoutes); 
app.use('/register', mainRoutes);


app.use('/products', productsRoutes);

//error 404

app.use ( (req, res, next) => {
    res.status(404).render('not-found-error.ejs')
},)

app.listen(3000, ()=>{   console.log('Servidor esta corriendo');
});