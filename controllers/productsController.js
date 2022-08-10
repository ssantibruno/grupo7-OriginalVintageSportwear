const fs= require('fs');
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
    
    productStore: (req, res) => {
        let image
        if (req.files[0] != undefined) {
            image = req.files[0].filename
        }else{
            image="default-product-image.jpg"
        }
        let newproduct = {
            id:products[products.lenght-1].id+1,
            ...req.body,
            image:image
        }
        products.push(newproduct)
        fs.writeFileSync(productsFilePath,JSON.stringify(products,null," "));
        res.redirect ('/products/productList');    },
    
    productEditForm: (req,res) => {
        let id= req.params.id
        let productToEdit=products.find(products=>products.id==id)
        res.render('./products/productEditForm.ejs',{productToEdit})}, 

    productUpdate: (req,res) => {
        let id = req.params.id
        let productToEdit=products.find(products=>products.id==id)
        let image
            if(req.file[0] != undefined) {
                image = req.file[0].filename
            }else{ image=productToEdit.image}
            productToEdith={
                id: productToEdit.id,
                ...req.body,
                image:image,}
            let newproduct = products.map (product => {
                if (product.id == productToEdit.id){
                    return product = {...productToEdit};
                    return product }           })
            fs.writeFileSync(productsFilePath,JSON.stringify(newproduct,null," "));
            res.redirect("/");
    },
    productDestroy: (req, res) => {
        let id= req.params.id;
        let finalproducts =  products.filter(products=>products.id != id)
        fs.writeFileSync(productsFilePath, JSON.stringify(finalproducts,null," "));
        res.redirect("/");
    }

}
 module.exports = productsController;
