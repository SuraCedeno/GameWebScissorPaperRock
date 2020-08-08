var piedra = "x";// valor de piedra
var papel = "p";
var tijera = "t";
var p1Puntaje=0;
var pcPuntaje=0;
var pcJugada="";
//
function jugarPiedra(){
    document.getElementById('j1').src="img/Rock.png"
    jugar(piedra)
}
function jugarPapel(){
    document.getElementById('j1').src="img/paper.png"
    jugar(papel)
}
function jugarTijera(){
    document.getElementById('j1').src="img/scissors.png"
    jugar(tijera)
}

function jugar(jugada){
    var pcJugada=jugadaDelComputador() 
    if ( pcJugada==piedra){
        document.getElementById('pc').src="img/Rock.png"
    }
    if ( pcJugada==papel){
        document.getElementById('pc').src="img/paper.png"
    }
    if ( pcJugada==tijera){
        document.getElementById('pc').src="img/scissors.png"
    }

    resultado=comparar(jugada,pcJugada);
    imprimirResultados()
    console.log(resultado)
    alert(resultado)
   
}

 function comparar(user, pc) {
    console.log (user,pc)
    if (user != pc) {

        if (user === papel && pc === piedra) {
            jugadorGano()
            return "Ganaste (Papel le gana a piedra)";
            
        }else  if (user === tijera && pc === papel) {
            jugadorGano()
            return "Ganaste (Tijera gana a papel)";
           
        }else  if (user === piedra && pc === tijera) {
            jugadorGano()
            return "Ganaste (Piedra gana a tijera)";
            
        } else {
            pcGano()
            return "Perdiste. Te ganó la PC";
          
        }
    } else if (user === pc)
        return"Ha sido empate";
};

function jugadaDelComputador() {
    var characters       = piedra+papel+tijera;
    var charactersLength = characters.length;
 return characters.charAt(Math.floor(Math.random() * charactersLength));
 }
function jugadorGano(){
   p1Puntaje++;  
}
function pcGano(){
   pcPuntaje++; 
}

 ///////////////////////////////////////// cosas que interactuan con el html
 function imprimirResultados(){
    imprimirJugadorPuntaje();
    imprimirPcPuntaje();
 }
 function imprimirJugadorPuntaje(){
    document.getElementById("p1puntaje").innerHTML=p1Puntaje;  
}
function imprimirPcPuntaje(){
    document.getElementById("pcpuntaje").innerHTML=pcPuntaje; 
}
