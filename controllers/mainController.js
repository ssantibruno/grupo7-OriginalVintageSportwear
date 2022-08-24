const fs= require('fs');
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
 module.exports = mainController;
