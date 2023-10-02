const express= require('express');
const route = express.Router();

// route.get('/', (req, res)=>{
//    res.write('Hola mundo');
// });

route.get("/", function(req, res){
    res.render("index");
});

// route.get("/", function(req, res){
//     res.render("index", {TodasLasEntradas: entradas});
// });

module.exports = route;