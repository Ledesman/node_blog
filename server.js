const express = require('express');
const path = require('path');
const morgan = require('morgan');
const ejs = require('ejs');


const app = express();

app.set('port', process.env.PORT || 4000);
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');

app.use(express.static('public'))

//configuracion de fecha
let date = new Date();
let dia = date.getDate() ;
let mes = date.getMonth() +1;
let anio = date.getFullYear();
let fechaCompleta = dia + "/"+ mes +"/" + anio;

console.log(fechaCompleta);

//crear entradas
//Arreglos que contiene un objeto
var entradas = [
    {
        fecha: "3/6/2022",
        titulo: "Primera entrada",
        contenido: "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. Wikipedia",
    },
    {
        fecha: "7/4/2022",
        titulo: "Segunda entrada",
        contenido: "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. Wikipedia",
    },
    {
        fecha: "12/9/2022",
        titulo: "Tercera entrada",
        contenido: "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. Wikipedia",
    }
];


app.route('/')
  .get((req, res) => {
    res.render('index', { TodasLasEntradas: entradas})
  })

//app.use(require('./router/index'));


//crear
app.route("/crear").get(function(req,res){
    res.render("crear",{fecha: fechaCompleta});

})
.post(function(req, res){
    var fechaEntrada =req.body.fechaEntrada ;
    var tituloEntrada = req.body.titulo;
    var contenidoEntrada = req.body.contenido;

    var nuevaEntrada = {
        fecha: fechaEntrada,
        titulo: tituloEntrada,
        contenido: contenidoEntrada
    }
    //ingresamos nueva netrada
    entradas.push(nuevaEntrada);


    res.redirect("/gracias");
});
 //sobre nosotros
 app.get("/gracias", function(req, res){
    res.render("gracias");
});
// app.use(express.static(path.join(__dirname + 'public')));


app.listen(app.get('port'), ()=>{
    console.log(`servidor funcionando en el puerto ${app.get('port')}`);
});





