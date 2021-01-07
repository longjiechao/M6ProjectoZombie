/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var stats = {
    puntosTotal : 0,
    vida : 3,
    enemigos : 0,
    estrellas : 0,
    doublePuntos : 0,
    mitadEnemigos : 0,
    vidaExtra : 0,
    
    statInicial : function(vida ,enemigos, estrellas, doublePuntos, mitadEnemigos, vidaExtra){
        this.vida = vida;
        this.enemigos = enemigos;
        this.estrellas = estrellas;
        this.doublePuntos = doublePuntos;
        this.mitadEnemigos = mitadEnemigos;
        this.vidaExtra = vidaExtra;
        this.actualizarStats();
    },
    
    getEnemigos: function(){
      return this.enemigos;  
    },
    
    sumarVida : function(){
        this.vida++;
    },
    
    quitarVida : function(){
        this.vida--;
    },
    
    estrellaEncontrada : function(){
        this.estrellas--;
    },
    
    zombieEncontrada : function(){
        this.enemigos--;
    },
    
    doublePuntosEncontrada : function(){
        this.doublePuntos--;
    },
    mitadEnemigosEncontrada : function(){
        this.mitadEnemigos--;
    },
    vidaExtraEncontrada : function(){
        this.vidaExtra--;
    },
    
    perder : function(){
        if(this.vida == 0){
            return true;
        }else return false;
    },
    
    ganar : function(){
        if (this.estrellas == 0 ){
            return true;
        }else return false;
    },
    
    sumarPuntos : function(puntos){
        switch(puntos){
            case "g":
            case "v":
            case "m":
                this.puntosTotal += 50;
                break;
            case "d":
                this.puntosTotal *= 2;
                break;
            case "e":
                this.puntosTotal += 200;
                break;
            case "z":
                this.puntosTotal -= 100;
                if(this.puntosTotal < 0){
                    this.puntosTotal = 0;
                }
                break;
        };
        var statsPoints = document.getElementById("statsPoints");
        statsPoints.innerHTML = this.puntosTotal;
    },
    
    setTotal : function(id){
        var statFinal = document.getElementById(id);
        localStorage.setItem(id, this.puntosTotal);
        statFinal.innerHTML = this.puntosTotal;
    },
    
    getTotal : function(){
        return this.puntosTotal;
    },
    
    actualizarStats : function(){
        var statHP = document.getElementById("statsHP");
        var statEnemigo = document.getElementById("statsEnemies");
        var statEstrella = document.getElementById("statsStars");
        var statDoubleP = document.getElementById("statsDoublePoints");
        var statMitadE = document.getElementById("statsHalfEnemies");
        var statExtraLife = document.getElementById("statsExtraLife");
        
        statHP.innerHTML = this.vida;
        statEnemigo.innerHTML = this.enemigos;
        statEstrella.innerHTML = this.estrellas;
        statDoubleP.innerHTML = this.doublePuntos;
        statMitadE.innerHTML = this.mitadEnemigos;
        statExtraLife.innerHTML = this.vidaExtra;
        
    },
    
    sumarGanada : function(){
        var ganada = document.getElementById("winStats");
    },
    
    sumarPerdida : function(){
        var perdida = document.getElementById("loseStats");
    },
    
    sumarAbandonada : function(){
        var abandonada = document.getElementById("abandonedStats");
    },
    
    //
    setLocalStorage : function(){
        
        if (localStorage.getItem("guanyades") != null) {
            guanyades = localStorage.getItem("guanyades");
        }
        if (localStorage.getItem("perdudes") != null) {
            perdudes = localStorage.getItem("perdudes");
        }
        if (localStorage.getItem("abandonades") != null) {
            abandonades = localStorage.getItem("abandonades");
        }
        for (i = 5; i <= 20; i++){
            if (localStorage.getItem(i) != null) {
                abandonades = localStorage.getItem(i);
            }
        }
        if (localStorage.getItem("rush") != null) {
            rush = localStorage.getItem("rush");
        }
    }
    
}

