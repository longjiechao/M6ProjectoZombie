/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var MultiPoints = function(ocupar, pos){
    Element.apply(this, arguments);
    this.estado = "d";
    this.img = "gfx/x2.png";
};

MultiPoints.prototype = Object.create(Loot.prototype);
MultiPoints.prototype.constructor = MultiPoints;