/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var MultiPoints = function(ocupar, posX, posY, diff){
    Element.apply(this, arguments);
    estado = "d";
    this.puntos = 100*diff;
};

MultiPoints.prototype = Object.create(Loot.prototype);
MultiPoints.prototype.constructor = MultiPoints;

var point = new MultiPoints(1, 55, 0.5);
console.log(point);