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

var Enemy = function(ocupar, ataque){
    Element.apply(this, arguments);
    estado = "z";
    this.ataque = ataque;
    
    this.testa = function(){
        return getOcupar() + " : " + estado + " : " + this.ataque;
    }
    
}

Enemy.prototype = Object.create(Element.prototype);
Enemy.prototype.constructor = Enemy;

var Estrella = function(ocupar){
    Element.apply(this, arguments);
    estado = "e";
    this.punts;
}

Estrella.prototype = Object.create(Element.prototype);
Estrella.prototype.constructor = Estrella;

var Loot = function(ocupar, puntos){
    Element.apply(this, arguments)
}

Loot.prototype = Object.create(Element.prototype);
Loot.prototype.constructor = Loot;

var MultPuntuación = function(ocupar, puntos){
    estado = "d";
    Element.apply(this, arguments);
}

MultPuntuación.prototype = Object.create(Loot.prototype);
MultPuntuación.prototype.constructor = MultPuntuación;

var  QuitarMitadZombies = function(ocupar, puntos){
    estado = "m";
    Element.apply(this, arguments);
}

QuitarMitadZombies.prototype = Object.create(Loot.prototype);
QuitarMitadZombies.prototype.constructor = QuitarMitadZombies;

var VidaExtra = function(ocupar, puntos){
    estado = "v";
    Element.apply(this, arguments);
}

VidaExtra.prototype = Object.create(Loot.prototype);
VidaExtra.prototype.constructor = VidaExtra;


var casilla = new Element(1);
console.log(casilla.test());

var enemigo = new Enemy(1, 1);
console.log(casilla.test1());

var enemigo = new Enemy(1);
console.log(casilla.test());