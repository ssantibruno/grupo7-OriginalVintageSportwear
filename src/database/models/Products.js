module.exports = (sequelize, dataTypes) => {
    let alias = 'Product'; // esto debería estar en singular
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
<<<<<<< HEAD
            autoIncrement: true,
            unique: true
=======
            autoIncrement: true
>>>>>>> master
        },
        product_name: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        price: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        size: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
<<<<<<< HEAD
        status: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
=======
>>>>>>> master
        condition: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        type: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        category_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
<<<<<<< HEAD
        image:{
            type: dataTypes.STRING(100),
        },
=======
>>>>>>> master
    };

    let config = {
        tableName: 'products',
        timestamps: false,
    };

    const Product = sequelize.define(alias,cols,config);

    Product.associate = function (models) {
        Product.belongsTo(models.Category, { 
<<<<<<< HEAD
            as: "categories",
=======
            as: "Categories",
>>>>>>> master
            foreignKey: "category_id"
        })

    }

    return Product
};