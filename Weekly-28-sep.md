Weekly 28 sep Hector Damian

Que hice...
*Sprint 6
- Utilice la pagina DynoBird para crear el diagrama de Entidades Relacionales
Diagrama-Relacional-OVS-001.pdf
Con 4 tablas ( products, users, categories, sale_detail)
con las relaciones, PK, y FK.
- Creacion de Script de estructura
con la creacion de la base de datos, tablas, campos y restricciones.
ademas de las relaciones.
Estructura-database-OVS-001.sql
- Script de datos	
Data-database-OVS-001.sql
se cargaron los datos de usuarios, previos que teniamos en users.JSON
se cargaron los datos de productos, previos en products.JSON
- Creacion de carpeta Sequelize y archivos modelos
primero cree una rama, rama-dami-5
instale -g sequelize sequelñize-cli
instale sequelize@5.21
instale --save mysql2
creacion de archivo .sequelizerc
ejecute el sequelize init
acomode los archivos y carpetas, continua funcionando
tambien modifique la direccion para la carpeta public
app.use(express.static(path.join(__dirname, '../public')));
Creacion de archivos modelos
Products.js
Users.js
Categories.js

Inconvenientes... 
sirvio mucho la pagina dynobird.
tengo dudas aun el uso de la base de datos con las imagenes, tal vez al avanzar con el CRUD
me quede mas claro.

Que voy a Hacer...
proximamente hacer el crud para ver si funciona
