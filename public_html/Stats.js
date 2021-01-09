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
    
    primerMovimiento : 1,
    
    puntosRush : 0,
    
    size : 0,
    
    rush : false,
    
    getRush : function(){
        return this.rush;
    },
    
    setRush : function(rush){
        this.rush = rush;
    },
    
    getSize : function(){
        return this.size;
    },
    
    setSize : function(size){
        this.size = size;
    },
    
    statInicial : function(vida ,enemigos, estrellas, doublePuntos, mitadEnemigos, vidaExtra){
        this.vida = vida;
        this.enemigos = enemigos;
        this.estrellas = estrellas;
        this.doublePuntos = doublePuntos;
        this.mitadEnemigos = mitadEnemigos;
        this.vidaExtra = vidaExtra;
        this.primerMovimiento = 1;
        if (this.rush == true && this.getSize() == 5){
            this.puntosTotal = 0;
        }else if (this.rush == false){
            this.puntosTotal = 0;
        };
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
    
    statModo : function(size){
        var statMode = document.getElementById("modes");
        statMode.innerHTML = size;
    },
    
    actualizarStats : function(){
        var statHP = document.getElementById("statsHP");
        var statEnemigo = document.getElementById("statsEnemies");
        var statEstrella = document.getElementById("statsStars");
        var statDoubleP = document.getElementById("statsDoublePoints");
        var statMitadE = document.getElementById("statsHalfEnemies");
        var statExtraLife = document.getElementById("statsExtraLife");
        var statsPoints = document.getElementById("statsPoints");
        
        
        statHP.innerHTML = this.vida;
        statEnemigo.innerHTML = this.enemigos;
        statEstrella.innerHTML = this.estrellas;
        statDoubleP.innerHTML = this.doublePuntos;
        statMitadE.innerHTML = this.mitadEnemigos;
        statExtraLife.innerHTML = this.vidaExtra;
        statsPoints.innerHTML = this.puntosTotal;
    },
    masVida : function(){
        this.vida++;
    },
    
    enemigoActualMitad : function(n){
        this.enemigos = this.enemigos - n;
        console.log("restar enemigos  "  + n);
    },
    
    //--------------------------------------------
    //coge lo que hay en el localStorage, lo suma 1 y lo actualza.
    //Tambien si la puntuación que as conseguido es mayor a la anterior, lo actualiza
    sumarGanada : function(size){
        var ganada = document.getElementById("winStats");
        ganadas = localStorage.getItem("winStats");
        ganadas++;
        localStorage.setItem("winStats",ganadas);
        if(this.getRush()){
            if(this.puntosTotal > localStorage.getItem("rushStats")){
                localStorage.setItem("rushStats",this.puntosTotal);
            }
        }else{
            if(this.puntosTotal > localStorage.getItem(size)){
                localStorage.setItem(size,this.puntosTotal);
            }
        }
        
        ganada.innerHTML = ganadas;
    },
    
    sumarPerdida : function(size){
        var perdida = document.getElementById("loseStats");
        perdidas = localStorage.getItem("loseStats");
        perdidas++;
        localStorage.setItem("loseStats",perdidas);
        if(this.getRush()){
            if(this.puntosTotal > localStorage.getItem("rushStats")){
                localStorage.setItem("rushStats",this.puntosTotal);
            }
        }else{
            if(this.puntosTotal > localStorage.getItem(size)){
                localStorage.setItem(size,this.puntosTotal);
            }
        }
        perdida.innerHTML = perdidas;
    },
    
    sumarAbandonada : function(size){
        var abandonada = document.getElementById("abandonedStats");
        abandon = localStorage.getItem("abandonedStats");
        console.log(abandon);
        abandon++;
        localStorage.setItem("abandonedStats",abandon);
        if(this.getRush()){
            if(this.puntosTotal > localStorage.getItem("rushStats")){
                localStorage.setItem("rushStats",this.puntosTotal);
            }
        }else{
            if(this.puntosTotal > localStorage.getItem(size)){
                localStorage.setItem(size,this.puntosTotal);
            }
        }
        abandonada.innerHTML = abandon;
    },
    //--------------------------------------------
    
    //Pone las estadisticas locales
    setLocalStorage : function(){
        
        if (localStorage.getItem("winStats") != null) {
            var ganadas = localStorage.getItem("winStats");
            var statGanada = document.getElementById("winStats");
            statGanada.innerHTML = ganadas;
        }else{
            localStorage.setItem("winStats",0);
        }
        if (localStorage.getItem("loseStats") != null) {
            var perdidas = localStorage.getItem("loseStats");
            var statPerdidas = document.getElementById("loseStats");
            statPerdidas.innerHTML = perdidas;
        }else{
            localStorage.setItem("loseStats",0);
        }
        if (localStorage.getItem("abandonedStats") != null) {
            var abandonada = localStorage.getItem("abandonedStats");
            var statAbandon = document.getElementById("abandonedStats");
            statAbandon.innerHTML = abandonada;
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
    },
    
    primerMov : function(){
        this.primerMovimiento = 0; 
    },
    
    movPrimer : function(){
        if(this.primerMovimiento == 1){
            return true;
        }else return false;
    },

    //Esconder y mostrar divs
    
    mostrarStats : function(){
        var centered = document.getElementById("select").style.visibility = "visible";
        var stats = document.getElementById("stats").style.visibility = "visible";
        var game = document.getElementById("game").style.visibility = "hidden";
        var gameplay = document.getElementById("gameplay").style.visibility = "hidden";
        
        var botonX = document.getElementById("X").style.visibility = "hidden";
        var botonY = document.getElementById("Y").style.visibility = "hidden";
        var tableGameStats = document.getElementById("tableGameStats").style.visibility = "hidden";
        var tableScores = document.getElementById("tableScores").style.visibility = "visible";
        
    },
    
    jugando : function(){
        var centered = document.getElementById("select").style.visibility = "hidden";
        var stats = document.getElementById("stats").style.visibility = "visible";
        var game = document.getElementById("game").style.visibility = "visible";
        var gameplay = document.getElementById("gameplay").style.visibility = "visible";
        
        var botonX = document.getElementById("X").style.visibility = "visible";
        var botonY = document.getElementById("Y").style.visibility = "visible";
        var tableGameStats = document.getElementById("tableGameStats").style.visibility = "visible";
        var tableScores = document.getElementById("tableScores").style.visibility = "visible";
    },
    
    noJugando : function(){
        var centered = document.getElementById("select").style.visibility = "visible";
        var stats = document.getElementById("stats").style.visibility = "hidden";
        var game = document.getElementById("game").style.visibility = "hidden";
        var gameplay = document.getElementById("gameplay").style.visibility = "hidden";
        
        var botonX = document.getElementById("X").style.visibility = "hidden";
        var botonY = document.getElementById("Y").style.visibility = "hidden";
        var tableGameStats = document.getElementById("tableGameStats").style.visibility = "hidden";
        var tableScores = document.getElementById("tableScores").style.visibility = "hidden";
    }
    
}

