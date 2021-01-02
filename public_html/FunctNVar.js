/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var partida = {
    //tabla
    matriz : [[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0]],
    
    //variables contadores
    size : 0,
    enemiesMax : 0,
    starsMax : 0,
    loot : 0,
    
    doublePointsMax : 0,
    halfEnemiesMax : 0,
    extraLifeMax : 0,
    
    casillas : 0,
    casillasPos : [],
    
    //Vectores para guardar los objetos
    enemies : [],
    stars : [],
    doublePoints : [],
    halfEnemies : [],
    extraLife : [],
    
    test : function(){
        console.log("--Test--");
        
        console.log("Size: " + this.size);
        console.log("enemies: " + this.enemiesMax);
        console.log("stars: " + this.starsMax);
        console.log("loot: " + this.loot);
        console.log("double: " + this.doublePointsMax);
        console.log("halfene: " + this.halfEnemiesMax);
        console.log("extralife: " + this.extraLifeMax);
               
        console.log("--Test--");
    },
    
    start : function(size){
        this.size = size;
        this.enemiesMax = Math.round((size*size)*0.25);
        this.starsMax = size;
        this.loot = this.enemiesMax;
        this.casillas = size*size;
        this.calculoCantidadLoot();
        this.setLoot();
        this.mostrarTabla();
    },
    
    //Solo ejecuta 5 funciones y pone varaibles al array casiilasPos, que se utiliza en los sets
    setLoot : function(){
        for(i = 0; i < this.casillas; i++){
            this.casillasPos[i] = i+1;
        }
        console.log(this.casillasPos.length + "nums:  " + this.casillasPos);
        this.setExtraLife();
        this.setHalfEnemies();
        this.setDoublePoints();
        this.setStars();
        this.setEnemies();
        console.log(this.casillasPos.length + "nums:  " + this.casillasPos);

    },
    
    //Reparte las recompensas/loot en doublePoints, halfEnemies y extraLife
    calculoCantidadLoot : function(){
        while(this.loot > 0){
            if(this.loot >= 1){
                this.doublePointsMax++;
                this.loot--;
            }
            if (this.loot >= 2){
                this.halfEnemiesMax += 2;
                this.loot -= 2;
            }
            if (this.loot >= 3){
                this.extraLifeMax += 3;
                this.loot -= 3;
            }
        }
    },
    
    numToPos : function(num){
        num = num-1;
        var x;
        var y;
        x = Math.floor(num/size)+1;
        y = (num%size)+1;
        return x + "-" + y;
    },
    
    //pone los enemigos
    setEnemies : function(){
        for(i = 0; i < this.enemiesMax; i++){
            var num;
            num = Math.floor(Math.random() * (this.casillasPos.length-1));
            //console.log(num); 
            //console.log("Pos = " + this.numToPos(num));
            if (num > -1) {
                this.casillasPos.splice(num, 1);
            }            
        }
    },
    
    //pone las estrellas
    setStars : function(){
        for (i = 0 ; i < this.starsMax ; i++){
            var num;
            num = Math.floor(Math.random() * (this.casillasPos.length-1));
            //console.log(num); 
            //console.log("Pos = " + this.numToPos(num));
            if (num > -1) {
                this.casillasPos.splice(num, 1);
            }
        }
    }, 

    //pone la recompensa de puntos doble
    setDoublePoints : function(){
        for (i = 0 ; i < this.doublePointsMax ; i++){
            var num;
            num = Math.floor(Math.random() * (this.casillasPos.length-1));
            //console.log(num); 
            //console.log("Pos = " + this.numToPos(num));
            if (num > -1) {
                this.casillasPos.splice(num, 1);
            }
        }
    },

    //pone la recompensa de quitar mitad enemigos
    setHalfEnemies : function(){
        for (i = 0 ; i < this.halfEnemiesMax ; i++){
            var num;
            num = Math.floor(Math.random() * (this.casillasPos.length-1));
            //console.log(num); 
            //console.log("Pos = " + this.numToPos(num));
            if (num > -1) {
                this.casillasPos.splice(num, 1);
            }
        }
    },


    //pone la recompensa de vida extra
    setExtraLife : function(){
        for (i = 0 ; i < this.extraLifeMax ; i++){
            var num;
            num = Math.floor(Math.random() * (this.casillasPos.length-1));
            //console.log(num); 
            //console.log("Pos = " + this.numToPos(num));
            if (num > -1) {
                this.casillasPos.splice(num, 1);
            }
        }
    },
    
    //Muestra la tabla, cogela matriz y muestra el contenido
    mostrarTabla : function(){
        for (i=1; i <= 20; i++){
            for (y=1; y <= 20; y++){
                this.matriz[i-1][y-1] = "g";
                var pos = document.getElementById(i + "-" + y);
                if(this.size > i-1 && this.size > y-1){
                    pos.innerHTML = this.matriz[i-1][y-1];
                }else{
                    pos.innerHTML = "";
                }
            }
        }
    } 
};

console.log(partida.size);









