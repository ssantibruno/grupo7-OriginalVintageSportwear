module.exports = (sequelize, dataTypes) => {
    let alias = 'Product'; // esto debería estar en singular
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
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
    };

    let config = {
        tableName: 'database_OVS',
        timestamps: false,
    };

    const Product = sequelize.define(alias,cols,config);

    Product.associate = function (models) {
        Product.belongsTo(models.Category, { 
            as: "Categories",
            foreignKey: "category_id"
        })

    }

    return Product
};