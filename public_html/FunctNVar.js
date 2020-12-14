/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//tabla
var matriz = [[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0]];

//variables contadores
var size = 5;
var enemiesMax = Math.round((size*size)*0.25);
var starsMax = size;
var loot = enemiesMax;

var doublePointsMax = 0;
var halfEnemiesMax = 0;
var extraLifeMax = 0;

//Vectores para guardar los objetos
var enemies;
var stars;
var doublePoints;
var halfEnemies;
var extraLife;


//Reparte las recompensas/loot en doublePoints, halfEnemies y extraLife
function calculoCantidadLoot(){
    while(loot > 0){
        if(loot >= 1){
            doublePointsMax++;
            loot--;
        }
        if (loot >= 2){
            halfEnemiesMax += 2;
            loot -= 2;
        }
        if (loot >= 3){
            extraLifeMax += 3;
            loot -= 3;
        }
    }
}

//Funcion para crear la tabla entera
function setTable(){
    setExtraLife();
    setHalfEnemies();
    setDoublePoints();
    setStars();
    setEnemies();
}

//pone los enemigos
function setEnemies(){
    for (i = 0 ; i < enemies ; i++){
        enemies.push(new Enemy(1,15,1));
    }
}

//pone las estrellas
function setStars(){
    for (i = 0 ; i < stars ; i++){
        
    }
}

//pone la recompensa de puntos doble
function setDoublePoints(){
    for (i = 0 ; i < doublePointsMax ; i++){
        
    }
}

//pone la recompensa de quitar mitad enemigos
function setHalfEnemies(){
    for (i = 0 ; i < halfEnemiesMax ; i++){
        
    }
}


//pone la recompensa de vida extra
function setExtraLife(){
    for (i = 0 ; i < extraLifeMax ; i++){
        
    }
}



console.log("inicial: " + loot);


console.log("final: " + loot);
console.log("point: " + doublePointsMax);
console.log("half: " + halfEnemiesMax);
console.log("laifu: " + extraLifeMax);

console.log("pointN: " + doublePointsMax/1);
console.log("halfN: " + halfEnemiesMax/2);
console.log("laifuN: " + extraLifeMax/3);