module.exports = (sequelize, DataType) => {
    const Usuario = sequelize.define('Usuario', {
        id:{
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nome_usuario:{
            type: DataType.STRING,
            allowNull:false
        },
        cpf_usuario:{
            type: DataType.STRING,
            allowNull:false,
            unique: true
        },
        email_usuario:{
            type: DataType.STRING,
            allowNull:false,
            unique: true
        },
        senha_usuario:{
            type: DataType.STRING,
            allowNull:false
        },
        telefone_usuario:{
            type: DataType.STRING,
            defaultValue: 'null'
        },
        data_nasc_usuario:{
            type: DataType.DATEONLY,
            allowNull:false
        }
    },
    {
        tableName: 'usuarios',
        timestamps: false
    });
    
    return Usuario;
};