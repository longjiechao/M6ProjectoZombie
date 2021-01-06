 /* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var Estrella = function(ocupar, pos, diff){
    Element.apply(this, arguments);
    this.estado = "e";
    this.puntos = 100 * (diff/100);
    this.img = "gfx/star.png";
};

Estrella.prototype = Object.create(Element.prototype);
Estrella.prototype.constructor = Estrella;
