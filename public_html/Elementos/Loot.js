/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var Loot = function(ocupar, pos, diff){
    Element.apply(this, arguments)
    this.puntos = 100 * diff;
};

Loot.prototype = Object.create(Element.prototype);
Loot.prototype.constructor = Loot;

var loot = new Loot(1, 0.5);
console.log(loot);