
// sequelize.authenticate().then(function(){
//     console.log("conectado com sucesso")
// }).catch(function(erro){
//     console.log("falha ao se conectar"+erro)
// })

//criando models

// const Postagem = sequelize.define('postagens', {
//     titulo: {
//         type: Sequelize.STRING
//     },
//     conteudo: {
//         type: Sequelize.TEXT
//     }
// })

// // Postagem.sync({force: true})
// Postagem.create({
//     titulo: "um titulo qualquer",
//     conteudo: "um conteudo qualquer"
// })

// const Usuario = sequelize.define('usuarios',{
//     nome: {
//         type: Sequelize.STRING
//     },
//     sobrenome: {
//         type: Sequelize.STRING
//     },
//     idade :{
//         type: Sequelize.INTEGER
//     },
//     email: {
//         type: Sequelize.STRING
//     }
// })

// // Usuario.sync({force:true})
// Usuario.create({
//     nome: "Raquel",
//     sobrenome: "Penteado",
//     idade: 18,
//     email: "email@email.com"
// })

