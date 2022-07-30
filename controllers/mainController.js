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
    productDetail: (req,res) => {
        res.render('./users/productDetail.ejs')},  
    productCreateForm: (req,res) => {
        res.render('./products/productCreateForm.ejs')},
    productEditForm: (req,res) => {
        res.render('./products/productEditForm.ejs')}, 
}

module.exports = mainController;
