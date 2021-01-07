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
    
    puntosRush : 0,
    
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
    
    quitarMitadEnemigos : function(cantidad){
        this.enemigos = cantidad;
        console.log("oh wow cantidad " + cantidad);
    },
    
    //--------------------------------------------
    //coge lo que hay en el localStorage, lo suma 1 y lo actualza.
    //Tambien si la puntuación que as conseguido es mayor a la anterior, lo actualiza
    sumarGanada : function(size){
        var ganada = document.getElementById("winStats");
        ganadas = localStorage.getItem("winStats");
        ganadas++;
        localStorage.setItem("winStats",ganadas);
        
        if(this.puntosTotal > localStorage.getItem(size)){
            localStorage.setItem(size,this.puntosTotal);
        }
        console.log(ganadas);
    },
    
    sumarPerdida : function(size){
        var perdida = document.getElementById("loseStats");
        perdidas = localStorage.getItem("loseStats");
        perdidas++;
        localStorage.setItem("loseStats",perdidas);
        if(this.puntosTotal > localStorage.getItem(size)){
            localStorage.setItem(size,this.puntosTotal);
        }
    },
    
    sumarAbandonada : function(size){
        var abandonada = document.getElementById("abandonedStats");
        abandon = localStorage.getItem("abandonedStats");
        abandon++;
        localStorage.setItem("abandonedStats",abandon);
        if(this.puntosTotal > localStorage.getItem(size)){
            localStorage.setItem(size,this.puntosTotal);
        }
    },
    //--------------------------------------------
    
    //Pone las estadisticas locales
    setLocalStorage : function(){
        
        if (localStorage.getItem("guanyades") != null) {
            ganadas = localStorage.getItem("winStats");
            var statGanada = document.getElementById("winStats");
            statGanada.innerHTML = ganadas;
        }else{
            localStorage.setItem("winStats",0);
        }
        if (localStorage.getItem("perdudes") != null) {
            perdidas = localStorage.getItem("loseStats");
            var statPerdidas = document.getElementById("loseStats");
            statPErdidas.innerHTML = perdidas;
        }else{
            localStorage.setItem("loseStats",0);
        }
        if (localStorage.getItem("abandonades") != null) {
            abandon = localStorage.getItem("abandonedStats");
            var statAbandon = document.getElementById("abandonedStats");
            statAbandon.innerHTML = abandon;
        }else{
            localStorage.setItem("abandonedStats",0);
        }
        for (i = 5; i <= 20; i++){
            if (localStorage.getItem(i) != null) {
                nivel = localStorage.getItem(i);
                var statsNivel = document.getElementById(i);
                statsNivel.innerHTML = nivel;
                
            }else{
                localStorage.setItem(i,0);
            }
        }
        if (localStorage.getItem("rushStats") != null) {
            rush = localStorage.getItem("rushStats");
            var statRush = document.getElementById("rushStats");
            statRush.innerHTML = rush;
        }else{
            localStorage.setItem("rushStats",0);
        }
    }
    
}

