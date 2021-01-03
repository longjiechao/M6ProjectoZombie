/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var  QuitarMitadZombie = function(ocupar, pos, diff){
    Element.apply(this, arguments);
    this.estado = "m";
    this.puntos = 100*diff;
};

QuitarMitadZombie.prototype = Object.create(Loot.prototype);
QuitarMitadZombie.prototype.constructor = QuitarMitadZombie;

var mitad = new QuitarMitadZombie(2, 0.5);
console.log(mitad);