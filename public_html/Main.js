/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

document.getElementById("level").addEventListener("click", botonSelect);



function botonSelect(test){
    size = prompt("Escoja el tamaño la tabla: 5<->20 ");
    while((size > 20 || size < 5) || size == null || isNaN(size)){
        size = prompt("Por favor, escoja del 5 a 20");
    }
    partida.start(size);
    
    console.log("TESTO" + test);
    
    //console.log(partida);
    
    //partida.test();
    
}

function botonRush(){
    size = 5;
}


    


