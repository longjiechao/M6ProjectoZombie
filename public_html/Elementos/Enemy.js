/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var Enemy = function(ocupar, pos, diff){
    Element.apply(this, arguments);
    this.estado = "z";
    this.daño = 1;
    this.puntos = -50 * (diff/100);
    this.img = "gfx/Enemy" + Math.floor((Math.random() * 4) + 1); + ".png";
    
    this.cantidad = function(){
        console.log(this.estado + "no funciona nada");
      if (this.estado == "z"){
          return 1;
      }else return 0;
    };
};

Enemy.prototype = Object.create(Element.prototype);
Enemy.prototype.constructor = Enemy;