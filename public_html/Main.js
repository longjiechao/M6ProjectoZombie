/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

botonSelect();

calculoCantidadLoot();

setEnemies();

mostrarTabla();

console.log("pointN: " + doublePointsMax/1);
console.log("halfN: " + halfEnemiesMax/2);
console.log("laifuN: " + extraLifeMax/3);



function botonSelect(){
    size = prompt("Escoja el tamaño la tabla: 5<->20 ");
    while((size > 20 || size < 5) || size == null || isNaN(size)){
        size = prompt("Por favor, escoja del 5 a 20");
    }
    size = size;
    enemiesMax = Math.round((size*size)*0.25);
    starsMax = size;
    loot = enemiesMax;
}

function botonRush(){
    size = 5;
}


    


