const fs= require('fs');
const path= require('path');
const {validationResult} = require('express-validator');
let session= require ('express-session');
let bcryptjs = require ('bcryptjs');

const userFilePath = path.join(__dirname, '../data/users.json');
const usuarios=JSON.parse(fs.readFileSync(userFilePath,'utf-8'));

const userController= {
    register: (req,res) =>{
        res.render('./users/register.ejs')},

    createUser: (req, res, next) => {
        let errors =validationResult(req);
        if (errors.length>0) {
            return res.render('/register',{errors:errors.errors}) }
        let image
        if (req.files[0] != undefined){
            image=req.files[0].filename
        }else{
            image='fotodefault.png'}
        let newUser = {
            id: usuarios[usuarios.length-1].id+1,
            ...req.body,
            password:bcryptjs.hashSync(req.body.password,10),
            image:image}
        usuarios.push(newUser)
        fs.writeFileSync(userFilePath, JSON.stringify(usuarios, null, ' ')),
        res.redirect ("/")},
    
    usersList: (req,res) => {
            res.render('./users/usersList.ejs', {usuarios})
        },
    
    login: (req,res) => {
        res.render('./users/login.ejs')},
    
    processLogin: function (req,res) {
        let errors = validationResult(req);
        if (errors.isEmpty()){
            let usuarios;
            for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].email == req.body.email){
                if (bcryptjs.compareSync(req.body.password, usuarios[i].password)){
                    let usuarioaLoguearse = usuarios[i];
                    break;
                    }
                }
            }
            if (usuarioaLoguearse == undefined) {
                return res.render('./users/login.ejs', {errors: [{msg: 'Credenciales inválidas'}]
                });
            }
            req.session.usuarioLogueado = usuarioaLoguearse;

        } else {
            return res.render('./users/login.ejs', {errors:errors.errors})
        }
    }

    
};


module.exports = userController;


