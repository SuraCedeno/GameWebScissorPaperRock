var piedra = "piedra";
var papel = "papel";
var tijera = "tijera";

var resultado = function(user, pc) {
    if (user != pc) {

        if (user === papel && pc === piedra) {
            console.log("Ganaste Papel le gana a piedra");
        }
        if (user === tijera && pc === papel) {
            console.log("Ganaste Tijera gana a papel");
        }
        if (user === piedra && pc === tijera) {
            console.log("Ganaste Piedra gana a tijera");
        } else {
            console.log(" Perdiste. Te ganó la PC");
        }
    } else if (user === pc)
        console.log("Ha sido empate");
};