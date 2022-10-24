 ///********************Productos***********/


 const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

//Aqui tienen otra forma de llamar a cada uno de los modelos
const Categories = db.Category;
const Products = db.Product;
const Users = db.User;
const Role =  db.Role;


const productsController = {

    productsList: (req, res) => {
        db.Product.findAll({include: ['categories']})
        .then(products => {
            res.render('./products/productList.ejs', {products} )},
            )},

    selecciones: (req,res) => {
        db.Product.findAll({
                    where: { category_id: 1},
                    limit:8})
                    .then(selecciones => { 
                        res.render('./products/selecciones.ejs',{selecciones}) });
        },

    restoDelMundo: (req,res) => {
        db.Product.findAll({
                    where: { category_id: 4},
                    limit:8})
                    .then(restoDelMundo => { 
                        res.render('./products/restoDelMundo.ejs',{restoDelMundo}) });
        },  
    
    equiposAmericanos: (req,res) => {
            db.Product.findAll({
                    where: { category_id: 2},
                    limit:8})
                    .then(equiposAmericanos => { 
                        res.render('./products/equiposAmericanos.ejs',{equiposAmericanos}) });
        },  

    equiposEuropeos: (req,res) => {
        db.Product.findAll({
                    where: { category_id: 3},
                    limit:8})
                    .then(equiposEuropeos => { 
                        res.render('./products/equiposEuropeos.ejs',{equiposEuropeos}) });
        },  

    detail: (req, res) => {
        db.Product.findByPk(req.params.id,{
                include: ['categories']})
                .then(product => {
                    res.render('./products/productDetail.ejs', {product});
                });
        },

    createForm: (req, res) => {
        db.Category.findAll()
            .then(categorias => {
            res.render('./products/productCreateForm.ejs', {categorias})
        })
        },

    createNewProduct: (req, res) => {
        db.Product.create(
            {
                product_name: req.body.product_name,
                description: req.body.description,
                price: req.body.price,
                size: req.body.size,
                status: req.body.status,
                category_id: req.body.category_id,
                condition: req.body.condition,
                type: req.body.type,
                image: req.file ? req.file.filename : 'default-product-image.jpg',
            }
        )
        .then(()=> {
            return res.redirect('./list')})            
        .catch(error => res.send(error))
    },

    productEditForm: (req,res) => {
        let productId= req.params.id
        let productToEdit= db.Product.findByPk(productId, {
            include: ['categories']});
        let allCategories = db.Category.findAll();

        Promise.all([productToEdit, allCategories])
            .then(([product, categorias]) => {
                res.render('./products/productEditForm.ejs', {product, categorias})})
            .catch(error => res.send(error))
        },
    
    productUpdate: (req,res) => {
        let productId= req.params.id
        db.Product.update(
            {
                product_name: req.body.product_name,
                description: req.body.description,
                price: req.body.price,
                size: req.body.size,
                status: req.body.status,
                category_id: req.body.category_id,
                condition: req.body.condition,
                type: req.body.type,
                image: req.file ? req.file.filename : 'default-product-image.jpg',
            },
            {
                where: {id: productId}
            })
        .then(()=> {
            return res.redirect('../list')})       // son dos puntos por que retrocede un slash product/edit/1      
        .catch(error => res.send(error))
        },
    
        

        productDestroy: (req, res) => {
            let productId= req.params.id;
            db.Product.destroy(
                {where: { id : productId }, force: true}) // force: true es para asegurar que se ejecute la acción
            .then(()=>{
                return res.redirect('../list')})             
        .catch(error => res.send(error))
        },


    }

        module.exports = productsController;
        
         

