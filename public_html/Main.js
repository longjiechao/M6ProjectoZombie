/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

stats.noJugando();

function playButton(x, y){
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
        console.log(rush);
        if(stats.getRush()){
            if (size == 20){
                alert("¡¡¡Felicidades por pasarte el modo Rush!!!");
                stats.sumarGanada(stats.getSize());
                stats.setLocalStorage();
                stats.mostrarStats();
            }else{
                alert("Has ganado, pasas a la siguiente ronda");
                rushNext(stats.getSize());
                stats.jugando();
            }
        }else{
            alert("Has ganado");
            stats.sumarGanada(stats.getSize());
            console.log(stats.getSize());
            stats.setLocalStorage();
            stats.mostrarStats();
        }
        
    }else if(stats.perder()){
        alert("Has perdido");
        stats.sumarPerdida(stats.getSize());
        stats.setLocalStorage();
        stats.mostrarStats();
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
        if(stats.getRush()){
            if (size == 20){
                alert("¡¡¡Felicidades por pasarte el modo Rush!!!");
                stats.sumarGanada(stats.getSize());
                stats.setLocalStorage();
                stats.mostrarStats();
            }else{
                alert("Has ganado, pasas a la siguiente ronda");
                rushNext(stats.getSize());
                stats.jugando();
            }
        }else{
            alert("Has ganado");
            stats.sumarGanada(stats.getSize());
            stats.setLocalStorage();
            stats.mostrarStats();
        }
        
    }else if(stats.perder()){
        alert("Has perdido");
        stats.sumarPerdida(stats.getSize());
        stats.setLocalStorage();
        stats.mostrarStats();
    }
    stats.setLocalStorage();
}

function botonSelect(){
    stats.setRush(false);
    stats.getRush();
    stats.jugando();
    size = prompt("Escoja el tamaño la tabla: 5<->20 ");
    while((size > 20 || size < 5) || size == null || isNaN(size)){
        size = prompt("Por favor, escoja del 5 a 20");
    }
    ;
    stats.statModo(size);
    stats.setLocalStorage();
    var botonX = document.getElementById("X");
    var botonY = document.getElementById("Y");
    botonX.setAttribute("max", size);
    botonY.setAttribute("max", size);
    partida.start(size);
    stats.statInicial(3, partida.getEnemiesMax(), partida.getStarsMax(), partida.getDoublePointsMax(), partida.getHalfEnemiesMax(), partida.getExtraLifeMax());
    stats.setSize(size);
}


function botonRush(){
    stats.setRush(true);
    size = 5;
    
    stats.jugando();
    stats.statModo(size);
    stats.setLocalStorage();
    var botonX = document.getElementById("X");
    var botonY = document.getElementById("Y");
    botonX.setAttribute("max", size);
    botonY.setAttribute("max", size);
    partida.start(size);
    stats.statInicial(3, partida.getEnemiesMax(), partida.getStarsMax(), partida.getDoublePointsMax(), partida.getHalfEnemiesMax(), partida.getExtraLifeMax());
    console.log(partida.printTablaTest());
    stats.setSize(size);
}

function rushNext(newSize){
    newSize++;
    stats.jugando();
    stats.statModo(newSize);
    stats.setLocalStorage();
    var botonX = document.getElementById("X");
    var botonY = document.getElementById("Y");
    botonX.setAttribute("max", newSize);
    botonY.setAttribute("max", newSize);
    partida.start(newSize);
    stats.statInicial(3, partida.getEnemiesMax(), partida.getStarsMax(), partida.getDoublePointsMax(), partida.getHalfEnemiesMax(), partida.getExtraLifeMax());
    console.log(partida.printTablaTest());
    stats.setSize(newSize);
}

function rendir(){
    stats.setLocalStorage();
    stats.sumarAbandonada(stats.getSize());
    stats.noJugando();
    
}

function showStatsOnly(){
    stats.setLocalStorage();
    stats.mostrarStats();
}
    


