/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var VidaExtra = function(ocupar, posX, posY, diff){
    Element.apply(this, arguments);
    estado = "v";
    this.puntos = 100*diff;
};

VidaExtra.prototype = Object.create(Loot.prototype);
VidaExtra.prototype.constructor = VidaExtra;

var vida = new VidaExtra(3, 0.5);
console.log(vida);