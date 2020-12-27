/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//tabla
var matriz = [[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0]];

//variables contadores
var size;
var enemiesMax;
var starsMax;
var loot;

var doublePointsMax = 0;
var halfEnemiesMax = 0;
var extraLifeMax = 0;

//Vectores para guardar los objetos
var enemies = new Array();
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
    var num = [];
    for(i = 0; i < 5; i++){
        rand = Math.floor(Math.random() * 10) + 1;
        if (num.includes(rand) == false){
            while(num.includes(rand) == false){
                console.log(rand);
                num[i] = rand;
            }
        }else {
            console.log(rand);
            num[i] = rand;
        }
        
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

//Muestra la tabla, cogela matriz y muestra el contenido
function mostrarTabla() {
    for (i=1; i <= 20; i++){
        for (y=1; y <= 20; y++){
            matriz[i-1][y-1] = "g";
            var pos = document.getElementById(i + "-" + y);
            if(size > i-1 && size > y-1){
                pos.innerHTML = matriz[i-1][y-1];
            }else{
                pos.innerHTML = "";
            }
        }
    }
} 



console.log("inicial: " + loot);


console.log("final: " + loot);
console.log("point: " + doublePointsMax);
console.log("half: " + halfEnemiesMax);
console.log("laifu: " + extraLifeMax);

