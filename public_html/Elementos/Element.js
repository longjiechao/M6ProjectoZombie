/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var  Element = function(ocupar){
    this.ocupar = ocupar;
    estado = "g";
    
    getOcupar = function(){
        return ocupar;
    }
    
    this.test = function(){
        return this.ocupar + " : " + estado;
    }
}




var casilla = new Element(1);
console.log(casilla.test());

