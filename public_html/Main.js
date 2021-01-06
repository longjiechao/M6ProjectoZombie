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
    partida.buscarElemento(x, y);
    partida.rellenarTabla();
    //partida.mostrarTabla()
}

function botonSelect(){
    size = prompt("Escoja el tamaño la tabla: 5<->20 ");
    while((size > 20 || size < 5) || size == null || isNaN(size)){
        size = prompt("Por favor, escoja del 5 a 20");
    }
    partida.start(size);
    
    console.log("TESTO");
    //console.log(partida);
    //partida.test();
    stats.statInicial(partida.getEnemiesMax(), partida.getStarsMax(), partida.getDoublePointsMax(), partida.getHalfEnemiesMax(), partida.getExtraLifeMax());
}


function botonRush(){
    size = 5;
}


    


