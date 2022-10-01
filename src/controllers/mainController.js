/* const fs= require('fs');
const path= require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products=JSON.parse(fs.readFileSync(productsFilePath,'utf-8'));


const ofertas = products.filter(function(product){
	return product.type == 'Oferta'
})
const destacados = products.filter(function(product){
	return product.type == 'Destacado'
})
const selecciones = products.filter(function(product){
    return product.category == 'Selecciones'
})
const equipoAmer = products.filter(function(product){
    return product.category == 'Equipos Americanos'
})
const equipoEur = products.filter(function(product){
    return product.category == 'Equipos Europeos'
})
const restoDelMundo = products.filter(function(product){
    return product.category == 'Resto del Mundo'
})


const mainController={
    index: (req,res) => {
        res.render('index',{ofertas,destacados})},

    register: (req,res) =>{
        res.render('./users/register.ejs')},

    login: (req,res) => {
        res.render('./users/login.ejs')},

    selecciones: (req,res) => {
        res.render('./products/selecciones.ejs',{selecciones})}, 
    restoDelMundo: (req,res) => {
        res.render('./products/restoDelMundo.ejs',{restoDelMundo})},     
    equiposAmericanos: (req,res) => {
        res.render('./products/equiposAmericanos.ejs',{equipoAmer})},  
    equiposEuropeos: (req,res) => {
        res.render('./products/equiposEuropeos.ejs',{equipoEur})},
    productCar: (req,res) => {
        res.render('./users/productCar.ejs')},
    productsList: (req, res) => {
            res.render('./products/productList.ejs', {products} )},
}
 module.exports = mainController; */

//////////////////////////////////////////////////////////////////////////////////////////
//***************TRABAJAMOS CON MODELS******** */

const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

//Aqui tienen otra forma de llamar a cada uno de los modelos
const Categories = db.Category;
const Products = db.Product;
const Users = db.User;
const Role =  db.Role;


const mainController = {

    index: (req,res) => {
        db.Product.findAll()
            .then(products => {
                res.render('index',{products})},
            )},
    
    productsList: (req, res) => {
        db.Product.findAll()
            .then(products => {
                res.render('./products/productList.ejs', {products} )},
                )},
    
    

    

/* 
    'list': (req, res) => {
        db.Movie.findAll({
            include: ['genre']
        })
            .then(movies => {
                res.render('moviesList.ejs', {movies})
            })
    },
    'detail': (req, res) => {
        db.Movie.findByPk(req.params.id,
            {
                include : ['genre']
            })
            .then(movie => {
                res.render('moviesDetail.ejs', {movie});
            });
    },
    'new': (req, res) => {
        db.Movie.findAll({
            order : [
                ['release_date', 'DESC']
            ],
            limit: 5
        })
            .then(movies => {
                res.render('newestMovies', {movies});
            });
    },
    'recomended': (req, res) => {
        db.Movie.findAll({
            include: ['genre'],
            where: {
                rating: {[db.Sequelize.Op.gte] : 8}
            },
            order: [
                ['rating', 'DESC']
            ]
        })
            .then(movies => {
                res.render('recommendedMovies.ejs', {movies});
            });
    },
 */
}

module.exports = mainController;

 
