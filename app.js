/*------------------------------------------*/
/*CONFIGURACION DE PROYECTO A NIVEL GLOBAL*/
/*-------------------------------------- */ 
let express = require('express')
let app = express();
let LeagueAPI = require('leagueapiwrapper');
let path = require('path')
//Si te tira el error 'forbidden' actualiza el apiKey en https://developer.riotgames.com, 
//cambiala por la nueva en globalApiKey.js para no tener que cambiarla en cada archivo
let apiKey = require('./globalApiKey')
leagueAPIKey = apiKey();
//la (poca) documentación que hay de la LeagueAPI la encontrás en https://github.com/LionelBergen/MundoScript
LeagueAPI = new LeagueAPI(leagueAPIKey, Region.LAS);

/*--------------PERMISOS DE DIRECTORIO-----------------------------*/
app.use("/img", express.static(path.join(__dirname, 'img')));
app.use("/views", express.static(path.join(__dirname, 'views')));
/*----------------------------------------------------------------*/

app.set('view engine', 'pug')
app.listen(3000, function () {
    console.log('Running at port 3000!');
})

//esta funcion se ejecuta cuando se entra al index o raíz de la página
app.get('/', (req, res) =>{
    //esto renderiza el index en /views/index.pug
    res.render('index')
    
})