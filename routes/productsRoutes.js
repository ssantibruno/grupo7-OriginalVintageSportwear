const express= require('express');
const router= express.Router();
const multer= require('multer');
const path = require('path');
const productsController = require('../controllers/productsController.js');

const storage=multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, "./public/img")  },
    filename: function (req, file, cb){
        cb(null, file.fieldname +"-"+ Date.now() + path.extname(file.originalname)) },
});

const uploadFileProducts = multer ({storage});

router.get('/', productsController.index);

router.get('/productCreateForm',productsController.productCreateForm);
// router.post('/',uploadFileProducts.any(), productsController.productStore);

router.get('/:id', productsController.productDetail);

// router.get('/:id/edith',productsController.productEdith);
// router.patch('/:id',uploadFileProducts.any(), productsController.productUpdate);

// router.delete('/',productsController.productDestroy);



module.exports = router;