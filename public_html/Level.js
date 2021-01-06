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
    
    statInicial : function(enemigos, estrellas, doublePuntos, mitadEnemigos, vidaExtra){
        this.enemigos = enemigos;
        this.estrellas = estrellas;
        this.doublePuntos = doublePuntos;
        this.mitadEnemigos = mitadEnemigos;
        this.vidaExtra = vidaExtra;
        this.actualizarStats();
    },
    
    sumarPuntos : function(puntos){
        puntosTotal += puntos;
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
        
    }
}

