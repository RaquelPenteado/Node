const express = require('express');
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const post = require('./modules/post')

// config
    // Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

    //body-parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

    
//rotas
app.get('/', function(req,res){
    post.findAll({order: [['id','DESC']]}).then(function(posts){
        res.render('home', {posts: posts})
    })
})

app.get('/cad', function(req,res){
    res.render('formulario')
})

app.post('/add', (req,res) => {
    post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send("houve um erro" + erro)
    })
})

app.get('/deletar/:id', function(req,res){
    post.destroy({where: {'id': req.params.id}}).then(() => {
        res.send('postagem deletada com sucesso')
    }).catch((erro)=>{
        res.send("nao existe")
    })
})

//exemplos de rotas

// app.get('/', function(req,res){  //criando rotas
//     res.sendFile(__dirname + "/html/index.html")
// });

// app.get("/sobre", function(req,res){
//     res.sendFile(__dirname + "/html/sobre.html")
// });


// app.get("/blog", function(req,res){
//     res.sendFile(__dirname + "/html/blog.html")
// });

// app.get('/ola/:nome/:cargo', function(req,res){
//     res.send(`Ola <h1>${req.params.nome}</h1> Seu cargo é de <h2>${req.params.cargo}</h2>`);
// });




app.listen(8081, function(){
    console.log("Servidor rodando")
}); //localhost:8081
