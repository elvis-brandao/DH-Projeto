module.exports = (sequelize, DataType) => {
    const Jogo = sequelize.define('Jogo', {
        id:{
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nome_jogo:{
            type: DataType.STRING,
            allowNull: false
        },
        preco_jogo:{
            type: DataType.DECIMAL(5, 2),
            allowNull: false
        },
        novo_jogo:{
            type: DataType.TINYINT,
            allowNull: false
        },
        descricao_jogo:{
            type: DataType.TEXT,
            allowNull: false
        },
        qtde_jogo:{
            type: DataType.INTEGER,
            allowNull: false
        },
        vendedores_id:{
            type: DataType.INTEGER,
            allowNull: false
        },
        plataformas_jogo_id:{
            type: DataType.INTEGER,
            allowNull: false
        }
    },
    {
        tableName: 'jogos',
        timestamps: false
    });
    
    return Jogo;
};