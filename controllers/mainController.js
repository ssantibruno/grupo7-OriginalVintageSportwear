const fs= require('fs');
const path= require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products=JSON.parse(fs.readFileSync(productsFilePath,'utf-8'));


const mainController={
    index: (req,res) => {
        res.render('index')},
    register: (req,res) =>{

        res.render('./users/register.ejs')},
    login: (req,res) => {
        res.render('./users/login.ejs')},
    selecciones: (req,res) => {
        res.render('./products/selecciones.ejs')}, 
    restoDelMundo: (req,res) => {
        res.render('./products/restoDelMundo.ejs')},     
    equiposAmericanos: (req,res) => {
        res.render('./products/equiposAmericanos.ejs')},  
    equiposEuropeos: (req,res) => {
        res.render('./products/equiposEuropeos.ejs')},
    productCar: (req,res) => {
        res.render('./users/productCar.ejs')},
    productsList: (req, res) => {
            res.render('./products/productList.ejs', {products} )},
}
 module.exports = mainController;
