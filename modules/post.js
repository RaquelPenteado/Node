const db = require('./db')

const post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})

// post.sync({force: true}) sempre retirar esta linha depois de ver se esta funcionando

module.exports = post