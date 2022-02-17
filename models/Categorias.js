module.exports = (sequelize, DataType) => {
    const Plataforma = sequelize.define('Plataforma', {
        id:{
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        plataforma_jogo:{
            type: DataType.STRING,
            allowNull:false
        }
    },
    {
        tableName: 'plataformas_jogo',
        timestamps: false
    });
    
    return Plataforma;
};