/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var  Element = function(ocupar, posX, posY){
    this.ocupar = ocupar;
    this.posX = posX;
    this.posY = posY;
    estado = "g";
    
    getOcupar = function(){
        return ocupar;
    }
    
    this.test = function(){
        return this.ocupar + " : " + estado;
    }
    
    this.getPos = function(){
        return posX + "/" + posY;
    }
}




var casilla = new Element(1,11);
console.log(casilla.test());
console.log(casilla.getPos());


