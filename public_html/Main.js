/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

document.getElementById("level").addEventListener("click", botonSelect);
document.getElementById("submit").addEventListener("click", play);



function play(){
    var x = document.getElementById("X").value;
    var y = document.getElementById("Y").value;
    console.log(x + "-" + y);
    stats.sumarPuntos(partida.letraEnLaPos(x, y));
    
    if (partida.letraEnLaPos(x, y) == "z"){
        stats.zombieEncontrada();
        stats.quitarVida();
    }else if (partida.letraEnLaPos(x, y) == "e"){
        stats.estrellaEncontrada();
    }else if(partida.letraEnLaPos(x, y) == "d"){
        stats.doublePuntosEncontrada();
    }else if (partida.letraEnLaPos(x, y) == "d"){
        stats.mitadEnemigosEncontrada();
    }else if(partida.letraEnLaPos(x, y) == "v"){
        stats.vidaExtraEncontrada();
    }
    //partida.mostrarTabla()
    partida.buscarElemento(x,y);
    partida.rellenarTabla();
    stats.actualizarStats();
    if(stats.ganar()){
        alert("Has ganado");
    }else if(stats.perder()){
        alert("Has perdido");
    }
}

function botonSelect(){
    size = prompt("Escoja el tamaño la tabla: 5<->20 ");
    while((size > 20 || size < 5) || size == null || isNaN(size)){
        size = prompt("Por favor, escoja del 5 a 20");
    }
    partida.start(size);
    stats.statInicial(partida.getEnemiesMax(), partida.getStarsMax(), partida.getDoublePointsMax(), partida.getHalfEnemiesMax(), partida.getExtraLifeMax());
}


function botonRush(){
    size = 5;
}


    


