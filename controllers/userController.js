const fs= require('fs');
const path= require('path');

const userFilePath = path.join(__dirname, '../Data/users.json');
const usuarios=JSON.parse(fs.readFileSync(userFilePath,'utf-8'));

const userController= {
    register: (req,res) =>{
        res.render('./users/register.ejs')},

    createUser: (req, res, next) => {
        let foto
        if (req.file != undefined){
            foto=req.files.filename
        }else{
            foto='default-image.jpg' }
        let newUser = {
            id: usuarios[usuarios.length-1].id+1,
            ...req.body,
            foto:foto}
        usuarios.push(newUser)
        fs.appendFileSync(userFilePath, JSON.stringify(usuarios, null, ' ')),
        res.redirect ("/")},
              
    
    login: (req,res) => {
        res.render('./users/login.ejs')},
};


module.exports = userController;


