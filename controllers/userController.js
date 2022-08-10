const fs= require('fs');
const path= require('path');

const userFilePath = path.join(__dirname, '../data/users.json');
const usuarios=JSON.parse(fs.readFileSync(userFilePath,'utf-8'));

const userController= {
    register: (req,res) =>{
        res.render('./users/register.ejs')},

    createUser: (req, res, next) => {
        let image
        if (req.file != undefined){
            image=req.files.filename
        }else{
            image='fotodefault.png'}
        let newUser = {
            id: usuarios[usuarios.length-1].id+1,
            ...req.body,
            image:image}
        usuarios.push(newUser)
        fs.writeFileSync(userFilePath, JSON.stringify(usuarios, null, ' ')),
        res.redirect ("/")},
              
    
    login: (req,res) => {
        res.render('./users/login.ejs')},
    
    usersList: (req,res) => {
        res.render('./users/usersList.ejs', {usuarios})
    }
    
};


module.exports = userController;


