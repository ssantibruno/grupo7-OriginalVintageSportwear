//***************TRABAJAMOS CON MODELS******** */

const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const { promiseImpl } = require('ejs');

//Aqui tienen otra forma de llamar a cada uno de los modelos
const Products = db.Product;

const mainController = {
//dos funciones pasadas con promesa ***************************//
    index: (req,res) => {
        let destacados = db.Product.findAll({
            where: { type: "Destacado"},
            limit:8});
        let ofertas = db.Product.findAll({
            where: { type: "Oferta"},
            limit:8});

        Promise.all([destacados, ofertas])
            .then(([allDestacados, allOfertas]) => {
                res.render('index',{allDestacados, allOfertas})})
        },

    nosotros: (req, res) => {
			res.render('nosotros' )},	
	

    
    
}
 

module.exports = mainController;

 
