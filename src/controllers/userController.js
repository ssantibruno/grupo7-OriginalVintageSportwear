const fs= require('fs');
const path= require('path');
const { validationResult } = require('express-validator');
let session = require ('express-session');
let bcrypt = require ('bcryptjs');


const userFilePath = path.join(__dirname, '../data/users.json');
const usuarios=JSON.parse(fs.readFileSync(userFilePath,'utf-8'));

//****funciones ayuda******* */
function getAllUsers() {
	let usersFileContent = fs.readFileSync(userFilePath, 'utf-8');
	let finalUsers = usersFileContent == '' ? [] : JSON.parse(usersFileContent);
	return finalUsers;
}

function storeUser(newUserData) {
	// Traer a todos los usuarios
	let allUsers = getAllUsers();
	// Generar el ID y asignarlo al nuevo usuario
	newUserData = {
		id: generateUserId(),
		...newUserData
	};
	// Insertar el nuevo usuario en el array de TODOS los usuarios
	allUsers.push(newUserData);
	// Volver a reescribir el users.json
	fs.writeFileSync(userFilePath, JSON.stringify(allUsers, null, ' '));
	// Finalmente, retornar la información del usuario nuevo
	return newUserData;
}

function generateUserId() {
	let allUsers = getAllUsers();
	if (allUsers.length == 0) {
		return 1;
	}
	let lastUser = allUsers.pop();
	return lastUser.id + 1;
}

function getUserByEmail(email) {
	let allUsers = getAllUsers();
	let userByEmail = allUsers.find(oneUser => oneUser.email == email);
	return userByEmail;
}

function getUserById(id) {
	let allUsers = getAllUsers();
	let userById = allUsers.find(oneUser => oneUser.id == id);
	return userById;
}


//******Metodos del controlador******* */
const userController= {
    usersList: (req,res) => {
        res.render('./users/usersList', {usuarios})
    },

    register: (req,res) =>{
        res.render('./users/register.ejs')},

    createUser: (req, res) => {
        let errors = validationResult(req);

        if (errors.errors.length <= 0) {        
            let image
            if (req.files[0] != undefined){
            image=req.files[0].filename
        }else{
            image='fotodefault.png'}
        let user = {
            id: usuarios[usuarios.length-1].id+1,
            ...req.body,
            password:bcrypt.hashSync(req.body.password,10),
            image:image}

        usuarios.push(user)
        fs.writeFileSync(userFilePath, JSON.stringify(usuarios, null, ' ')),
        
        // Setear en session el ID del usuario nuevo para auto loguearlo
		req.session.userId = user.id;

		// Setear la cookie para mantener al usuario logueado
		res.cookie('userCookie', user.id, { maxAge: 60000 * 60 });

		// Redirección al profile
		return res.redirect('/users/profile');
        //res.redirect ("/")

    }else{
        return res.render('./users/register.ejs',{
            errors:errors.mapped(),
            oldData: req.body
        }) }
    },
    
   
    login: (req,res) => {
        res.render('./users/login.ejs')},
    
    processLogin:  (req,res) => {
            // Buscar usuario por email
		let user = getUserByEmail(req.body.email);		

		// Si encontramos al usuario
		if (user != undefined) {
			// Al ya tener al usuario, comparamos las contraseñas
			if (bcrypt.compareSync(req.body.password, user.password)) {
				// Setear en session el ID del usuario
				req.session.userId = user.id;

				// Setear la cookie
				if (req.body.remember_user) {
					res.cookie('userCookie', user.id, { maxAge: 60000 * 60 });
				}

				// Redireccionamos al visitante a su perfil
                
				return res.redirect('./users/profile', );
			} else {
				res.render('./users/login.ejs', {
                    errors: {
                        password: {msg: 'Las credenciales son inválidas - Password Incorrecto'}
                    },
                    oldData: req.body
                })
            }
			} else {
			res.render('./users/login.ejs', {
                errors: {
                    email: { msg: 'No se encuentra este email en nuestra base de datos'
                    },
                    oldData: req.body
                }
            });
		}
	},

        profile: (req, res) => {
            let userLogged = getUserById(req.session.userId);
        	return res.render('./users/profile', {userLogged});
	},
    
    logout: (req, res) => {
		// Destruir la session
		req.session.destroy();
		// Destruir la cookie
		res.cookie('userCookie', null, { maxAge: 1 });
		
		return res.redirect('../index');
	}
};


module.exports = userController;


