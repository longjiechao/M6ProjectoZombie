/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//tabla
var matriz = [[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0]];

//variables contadores
var size = 5;
var enemies = (size*size)*0.25;
var stars = size;
var extraLife;
var halfEnemies;
var doublePoints;


for (i=0; i < size; i++){
    for (y=0; y < size; y++){
        matriz[i][y] = "g";
        console.log(matriz[i][y]);
    }
}


/*var vector = [0];

for (i = 0; i < 10; i++){
    vector[i] = i;
    console.log(vector[i]);
}*/