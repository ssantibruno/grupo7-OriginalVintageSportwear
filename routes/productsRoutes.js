const express= require('express');
const router= express.Router();
const multer= require('multer');
const path = require('path');
const productsController = require('../controllers/productsController.js');

const storage=multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, "./public/img/products")  },
    filename: function (req, file, cb){
        cb(null, file.fieldname +"-"+ Date.now() + path.extname(file.originalname)) },
});

const uploadFileProducts = multer ({storage});

router.get('/', productsController.index);

router.get('/create',productsController.productCreateForm);
router.post('/',uploadFileProducts.any(), productsController.productStore);

router.get('/detail/:id', productsController.productDetail);

router.get('/edit/:id',productsController.productEditForm);
router.patch('/edit/:id',uploadFileProducts.any(), productsController.productUpdate);

router.delete('/delete/:id',productsController.productDestroy);



module.exports = router;