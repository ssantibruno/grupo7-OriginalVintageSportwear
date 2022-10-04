/* const fs= require('fs');
const path= require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products=JSON.parse(fs.readFileSync(productsFilePath,'utf-8'));


const productsController={
    index: (req, res) =>{
        res.render('./products/productList.ejs', {products} )},

    productDetail: (req,res) => {
        let id=req.params.id
        let product=products.find(products=>products.id==id)
        res.render('./products/productDetail.ejs', {product})
    }, 
        
    productCreateForm: (req,res) => {
        res.render('./products/productCreateForm.ejs')},
    
    productStore: (req, res, next) => {
        let image
        if (req.files[0] != undefined) {
            image = req.files[0].filename
        }else{
            image="default-product-image.jpg"
        }
        let newproduct = {
            id:products[products.length-1].id+1,
            ...req.body,
            image:image
        }
        products.push(newproduct)
        fs.writeFileSync(productsFilePath,JSON.stringify(products,null," "));
        res.redirect ('/products')    },
    
    productEditForm: (req,res) => {
        let id= req.params.id
        let productToEdit=products.find(products=>products.id==id)
        res.render('./products/productEditForm.ejs', {productToEdit})}, 

    productUpdate: (req,res) => {
        let id = req.params.id
        let productToEdit=products.find(products=>products.id==id)
        let image

            if(req.file != undefined) {
                image = req.file.filename
            }else{ 
                image=productToEdit.image
            }
            productToEdit = {
                id: productToEdit.id,
                ...req.body,
                image:image,};

            let newproduct = products.map (product => {
                if (product.id == productToEdit.id){
                    return product = {...productToEdit};
                       }
                       return product;
                    })

            fs.writeFileSync(productsFilePath,JSON.stringify(newproduct,null," "));
            res.redirect("/products");
    },


    productDestroy: (req, res) => {
        let id= req.params.id;
        let finalproducts =  products.filter(products=>products.id != id)
        fs.writeFileSync(productsFilePath, JSON.stringify(finalproducts,null," "));
        res.redirect("/products");
    }

}
 module.exports = productsController; */


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
                    where: { category_id: 1}})
                    .then(selecciones => { 
                        res.render('./products/selecciones.ejs',{selecciones}) });
        },

    restoDelMundo: (req,res) => {
            db.Product.findAll({
                    where: { category_id: 4}})
                    .then(restoDelMundo => { 
                        res.render('./products/restoDelMundo.ejs',{restoDelMundo}) });
        },  
    
        equiposAmericanos: (req,res) => {
            db.Product.findAll({
                    where: { category_id: 2}})
                    .then(equiposAmericanos => { 
                        res.render('./products/equiposAmericanos.ejs',{equiposAmericanos}) });
        },  

        equiposEuropeos: (req,res) => {
            db.Product.findAll({
                    where: { category_id: 3}})
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





    }

        module.exports = productsController;
        
         

