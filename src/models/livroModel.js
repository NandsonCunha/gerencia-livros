import { DataTypes } from 'sequelize';
import sequelize from '../config/bd.js';
export const Livro = sequelize.define("Livro", {

    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
   autor: {
        type:DataTypes.STRING,
        allowNull: false,
    },
    genero: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    preco: { 
        type:DataTypes.FLOAT,
        allowNull: false,
    },
    quantidadeestoque: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
},
{
    tableName: "Livro",
    timestamps: false,
    }
)