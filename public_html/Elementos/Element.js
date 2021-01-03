/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var  Element = function(ocupar, pos, diff){
    this.ocupar = ocupar;
    this.pos = pos;
    this.estado = "e";
    this.puntos = 0 * diff;
    
    this.getPuntos = function(){
        return this.puntos;
    }
    
    this.getOcupar = function(){
        return ocupar;
    };
    
    this.test = function(){
        return this.ocupar + " : " + estado;
    };
   
   this.getEstado = function(){
       return this.estado;
   };
    
    this.getPos = function(){
        return pos;
    };
};

