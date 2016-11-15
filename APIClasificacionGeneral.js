var express = require("express");
var bodyparser = require("body-parser");
var app = express();
var apiBaseURL = "/api/v1";
var encontrado = false;

//Inputing datas
var jugador1 = { ranking: 1, puntuacion: 9999, jugador: "jugador 1"};
var jugador2 = { ranking: 2, puntuacion: 8888, jugador: "jugador 2"};
var jugador3 = { ranking: 3, puntuacion: 7777, jugador: "jugador 3"};
var jugador4 = { ranking: 4, puntuacion: 6666, jugador: "jugador 4"};
var jugador5 = { ranking: 5, puntuacion: 5555, jugador: "jugador 5"};
var jugador6 = { ranking: 6, puntuacion: 4444, jugador: "jugador 6"};
var jugador7 = { ranking: 7, puntuacion: 3333, jugador: "jugador 7"};
var jugador8 = { ranking: 8, puntuacion: 2222, jugador: "jugador 8"};
var jugador9 = { ranking: 9, puntuacion: 1111, jugador: "jugador 9"};
var jugador10 = { ranking: 10, puntuacion: 0000, jugador: "jugador 10"};
//Inputing values in a list
var jugadores = [jugador1,jugador2,jugador3,jugador4,jugador5,jugador6,jugador7,jugador8,jugador9,jugador10];
app.set('port', (proccess.env.PORT || 5000));
app.use(bodyparser.json());

//Geting all players
/*app.get(apiBaseURL+'/jugadores', function (req,res)
{
	console.log("New GET");
	res.json(jugadores);
});*/

//Geting the ID of a single player
app.get(apiBaseURL+'/jugadores/:id', function (req,res)
{
	console.log("New ID GET");
	i = 0;
	encontrado = false;
	while (i < jugadores.length && !encontrado) {
		if(jugadores[i].name == req.params.id){
			res.json(jugadores[i]);
			encontrado = true;
		}
		i++;
	}
});

//Posting all players to be writen
app.post(apiBaseURL+'/jugadores', function (req,res){
	var jugador = req.body;

	console.log("New POST");
	console.log(" Data: " + jugador);
	jugadores.push(jugador);
	res.sendStatus(200);
});

//Putting the ID of a single player
app.put(apiBaseURL+'jugadores/:id',function(res,req){
	console.log("New ID PUT");
	i = 0;
	encontrado = false;
	while(i < jugadores.length && !encontrado){
		if(jugadores[i].name == req.params.id){
			friends[i].ranking = req.body.ranking;
			friends[i].jugador = req.body.jugador;
			encontrado = true;
		}
		i++;
	}

});

//Deleting all players
app.delete(apiBaseURL+'/jugadores', function (req,res){
	console.log(" new DELETE");
    for (i = 0; i < jugadores.length; i++) {

        if (jugadores[i].name == req.body.name) {
            jugadores.splice(i);
        }
    } 
    res.sendStatus(200); 
});

//Deleting the ID of a single player
app.delete(apiBaseURL+'/jugadores/:id',function(req,res){
	console.log(" new ID DELETE");
	encontrado = false;
	i = 0;
	while (i < jugadores.length && !encontrado) {
        if (jugadores[i].name == req.params.id) {
            jugadores.splice(i);
        }
        i++;
    } 
});

//app.listen(1000);
var port = app.get('port');
app.listen(port,function()){
	console.log('Node app is running on port', port);
}

console.log("Running...");