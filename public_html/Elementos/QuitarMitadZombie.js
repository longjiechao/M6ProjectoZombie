/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var  QuitarMitadZombie = function(ocupar, pos, pos2, diff){
    Element.apply(this, arguments);
    this.estado = "m";
    this.estado2 = "m";
    
    this.pos2 = pos2;
    this.puntos = 100*(diff/100);
    this.img = "gfx/halfEnemy.png";
    this.restante = 2;
   
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
        if(n == 2){
            this.estado2 = this.estado2.toUpperCase();
        }else{
            this.estado = this.estado.toUpperCase();
        }
    };
    
    this.getPos = function(n){
        if (n == 2){
            return this.pos2;
        }else{
            return this.pos;
        }
    };
    
    this.getEstado = function(n){
        if (n == 2){
            return this.estado2;
        }else{
            return this.estado;
        }
   };
};

QuitarMitadZombie.prototype = Object.create(Loot.prototype);
QuitarMitadZombie.prototype.constructor = QuitarMitadZombie;