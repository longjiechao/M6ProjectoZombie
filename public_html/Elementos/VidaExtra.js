/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var VidaExtra = function(ocupar, pos, pos2, pos3, diff){
    Element.apply(this, arguments);
    this.estado = "v";
    this.estado2 = "v";
    this.estado3 = "v";
    this.pos2 = pos2;
    this.pos3 = pos3;
    this.puntos = 100*(diff/100);
    this.img = "gfx/1up.png";
    
    this.restante = 3;
   
    this.encontrado = function(){
        this.restante--;
        console.log(this.restante);
    }
    
    this.activar = function(){
        if(this.restante == 0){
            return true;
        }else return false;
    }
    
    this.descubrir = function(n){
        if (n == 3){
            this.estado3 = this.estado3.toUpperCase();
        }else if(n == 2){
            this.estado2 = this.estado2.toUpperCase();
        }else{
            this.estado = this.estado.toUpperCase();
        }
    };
    
    this.getPos = function(n){
        if (n == 3){
            return this.pos3;
        }else if(n == 2){
            return this.pos2;
        }else{
            return this.pos;
        }
    };
    
    this.getEstado = function(n){
        if (n == 3){
            return this.estado3;
        }else if(n == 2){
            return this.estado2;
        }else{
            return this.estado;
        }
       
   };
};

VidaExtra.prototype = Object.create(Loot.prototype);
VidaExtra.prototype.constructor = VidaExtra;