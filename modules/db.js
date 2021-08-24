const Sequelize = require('sequelize')

//conexao com banco de dados
const sequelize = new Sequelize('postapp','root', 'ForeverAlone1', {
    host: "localhost",
    dialect: "mysql"
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}