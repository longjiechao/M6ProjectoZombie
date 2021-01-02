/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var Enemy = function(ocupar, pos){
    Element.apply(this, arguments);
    estado = "z";
    this.daño = 1;
    
};

Enemy.prototype = Object.create(Element.prototype);
Enemy.prototype.constructor = Enemy;

var enemigo = new Enemy(1, 15);
console.log(enemigo);