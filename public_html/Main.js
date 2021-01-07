/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function playButton(x, y){
    stats.sumarPuntos(partida.letraEnLaPos(x, y));
    console.log();
    if (partida.letraEnLaPos(x, y) == "z"){
        stats.zombieEncontrada();
        stats.quitarVida();
        
    }else if (partida.letraEnLaPos(x, y) == "e"){
        stats.estrellaEncontrada();
        if(stats.movPrimer()){
            setTimeout(function(){
                partida.rellenarTabla();
                setTimeout(function(){
                    partida.mostrarTabla()
                }, 300);
            }, 300);
        };
    }else if(partida.letraEnLaPos(x, y) == "m"){ 
        stats.mitadEnemigosEncontrada();
        
    }else if (partida.letraEnLaPos(x, y) == "d"){
        stats.doublePuntosEncontrada();
        
    }else if(partida.letraEnLaPos(x, y) == "v"){
        stats.vidaExtraEncontrada();

    }
    partida.buscarElemento(x,y);
    partida.rellenarTabla();
    stats.actualizarStats();
    partida.mostrarTabla()
    stats.primerMov();
    if(stats.ganar()){
        alert("Has ganado");
        stats.sumarGanada(size);
        stats.setTotal(size);
    }else if(stats.perder()){
        stats.sumarPerdida(size);
        alert("Has perdido");
    }
    stats.setLocalStorage();
}

function play(){
    var x = document.getElementById("X").value;
    var y = document.getElementById("Y").value;
    stats.sumarPuntos(partida.letraEnLaPos(x, y));
    
    if (partida.letraEnLaPos(x, y) == "z"){
        stats.zombieEncontrada();
        stats.quitarVida();
        
    }else if (partida.letraEnLaPos(x, y) == "e"){
        stats.estrellaEncontrada();
        if(stats.movPrimer()){
            setTimeout(function(){
                partida.rellenarTabla();
                setTimeout(function(){
                    partida.mostrarTabla()
                }, 300);
            }, 300);
        };
        
    }else if(partida.letraEnLaPos(x, y) == "m"){ 
        stats.mitadEnemigosEncontrada();
        
    }else if (partida.letraEnLaPos(x, y) == "d"){
        stats.doublePuntosEncontrada();
        
    }else if(partida.letraEnLaPos(x, y) == "v"){
        stats.vidaExtraEncontrada(); 
    }
    partida.buscarElemento(x,y);
    partida.rellenarTabla();
    stats.actualizarStats();
    partida.mostrarTabla()
    stats.primerMov();
    if(stats.ganar()){
        alert("Has ganado");
        stats.sumarGanada(size);
        stats.setLocalStorage();
    }else if(stats.perder()){
        alert("Has perdido");
    }
    stats.setLocalStorage();
}

function botonSelect(){
    size = prompt("Escoja el tamaño la tabla: 5<->20 ");
    while((size > 20 || size < 5) || size == null || isNaN(size)){
        size = prompt("Por favor, escoja del 5 a 20");
    }
    stats.statModo(size);
    stats.setLocalStorage();
    var botonX = document.getElementById("X");
    var botonY = document.getElementById("Y");
    botonX.setAttribute("max", size);
    botonY.setAttribute("max", size);
    partida.start(size);
    stats.statInicial(3, partida.getEnemiesMax(), partida.getStarsMax(), partida.getDoublePointsMax(), partida.getHalfEnemiesMax(), partida.getExtraLifeMax());
}


function botonRush(){
    var size = 5;
   
}

function rendir(){
    stats.setLocalStorage();
    stats.sumarAbandonada(size);
    
}

function showStatsOnly(){
    stats.setLocalStorage();
}
    


