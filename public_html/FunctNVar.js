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
        console.log("--Test Variables--");
        
        console.log("Size: " + this.size);
        console.log("enemies: " + this.enemiesMax);
        console.log("stars: " + this.starsMax);
        console.log("loot: " + this.loot);
        console.log("double: " + this.doublePointsMax);
        console.log("halfene: " + this.halfEnemiesMax);
        console.log("extralife: " + this.extraLifeMax);
               
        console.log("--Test Variables--");
        
        console.log(this.matriz);
    },

    start : function(size){
        this.restart();
        this.rellenarTablaG();
        this.size = size;
        this.enemiesMax = Math.round((size*size)*0.25);
        this.starsMax = size;
        this.loot = this.enemiesMax;
        this.casillas = size*size;
        this.calculoCantidadLoot();
        this.setLoot();
        this.rellenarTabla();
        this.mostrarTabla();
    },
    
    restart : function(){
        this.matriz = [[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0]];
        this.size = 0;
        this.enemiesMax = 0;
        this.starsMax = 0;
        this.loot = 0;
        this.doublePointsMax = 0;
        this.halfEnemiesMax = 0;
        this.extraLifeMax = 0;
        this.casillas = 0;
        this.casillasPos = [];
        this.enemies = [];
        this.stars = [];
        this.doublePoints = [];
        this.halfEnemies = [];
        this.extraLife = [];
    },
    
    //Solo ejecuta 5 funciones y pone varaibles al array casiilasPos, que se utiliza en los sets
    setLoot : function(){
        for(i = 0; i < this.casillas; i++){
            this.casillasPos[i] = i+1;
        }
        console.log(this.casillasPos.length + " nums:  " + this.casillasPos);
        this.setExtraLife();
        this.setHalfEnemies();
        this.setDoublePoints();
        this.setStars();
        this.setEnemies();
        console.log(this.casillasPos.length + " nums:  " + this.casillasPos);

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
    
    //Poner un numero para saber la posicion en X e Y
    numToPos : function(num){
        num -= 1;
        var x;
        var y;
        x = Math.floor(num/this.size)+1;
        y = (num%this.size)+1;
        return x + "-" + y;
    },
    
    numToPosX : function(num){
        num -= 1;
        return Math.floor(num/this.size);
    },
    
    numToPosY : function(num){
        num -= 1;
        return (num%this.size);
    },
    
    posToNum : function (x, y){
        return (x*this.size + y)+1;
    },
    
    indexOfCasillasPos: function(num){
        for (i = 0; i < this.casillaPos.length; i++){
            if (this.casillasPos[i] == num){
                return i;
            }
        };
        return -1;
        
    },
    
    //pone los enemigos
    setEnemies : function(){
        for(i = 0; i < this.enemiesMax; i++){
            var rand = Math.floor(Math.random() * (this.casillasPos.length-1));
            var num = this.casillasPos[rand];
            
            if (rand > -1) {
                this.casillasPos.splice(rand, 1);
            }
            
            console.log("rand: "  + num);
            console.log(this.casillasPos.length + " ENEMYnums:  " + this.casillasPos);
            
            this.enemies[i] = new Enemy(1,this.numToPos(num));
            
            var pos  = document.getElementById(this.enemies[i].getPos());
            pos.innerHTML = this.enemies[i].getEstado();
            
            this.matriz[this.numToPosX(num)][this.numToPosY(num)] = this.enemies[i].getEstado();
        }
    },
    
    //pone las estrellas
    setStars : function(){
        for (i = 0 ; i < this.starsMax ; i++){
            var rand = Math.floor(Math.random() * (this.casillasPos.length-1));
            var num = this.casillasPos[rand];
            
            if (rand > -1) {
                this.casillasPos.splice(rand, 1);
            }
            
            console.log("rand: "  + num);
            console.log(this.casillasPos.length + " STARSnums:  " + this.casillasPos);
            
            this.stars[i] = new Estrella(1,this.numToPos(num));
            
            var pos  = document.getElementById(this.stars[i].getPos());
            pos.innerHTML = this.stars[i].getEstado();
            
            this.matriz[this.numToPosX(num)][this.numToPosY(num)] = this.stars[i].getEstado();
        }
    }, 

    //pone la recompensa de puntos doble
    setDoublePoints : function(){
        for (i = 0 ; i < this.doublePointsMax ; i++){
           var rand = Math.floor(Math.random() * (this.casillasPos.length-1));
            var num = this.casillasPos[rand];
            
            if (rand > -1) {
                this.casillasPos.splice(rand, 1);
            }
            
            console.log("rand: "  + num);
            console.log(this.casillasPos.length + " DOUBLEPenums:  " + this.casillasPos);
            
            this.doublePoints[i] = new MultiPoints(1,this.numToPos(num));
            
            var pos  = document.getElementById(this.doublePoints[i].getPos());
            pos.innerHTML = this.doublePoints[i].getEstado();
            
            this.matriz[this.numToPosX(num)][this.numToPosY(num)] = this.doublePoints[i].getEstado();
        }
    },

    //pone la recompensa de quitar mitad enemigos
    setHalfEnemies : function(){
        for (i = 0 ; i < this.halfEnemiesMax/2 ; i++){
            var loopCheck = true;
            while(loopCheck){
                var rand = Math.floor(Math.random() * (this.casillasPos.length-1));
                var num = this.casillasPos[rand];

                console.log("rand: "  + num);
                console.log(this.casillasPos.length + " HALFENEMIESnums:  " + this.casillasPos);
                
                var dir = Math.floor(Math.random() * 4);
                var x = this.numToPosX(num);
                var y = this.numToPosY(num);
                console.log("MATRIX " + this.matriz[x][y] + "X: " + x + " || Y " + y);
                if(dir == 1){
                    x += 1;
                    y += 1;
                    console.log("QUERER BAJAR");
                    if (x+1 < 5 && this.matriz[x][y-1] == "g"){
                        console.log("Ha llegado BAJAR X =  " + x);
                        
                        this.halfEnemies[i] = new QuitarMitadZombie(2,this.numToPos(num), parseInt(x)+1 + "-" + y, parseInt(x)+2 + "-" + y);
                        console.log(this.halfEnemies[i]);
                        
                        for(ii = 0; ii < this.halfEnemies[i].getOcupar(); ii++){
                            var pos  = document.getElementById(this.halfEnemies[i].getPos(ii));
                            pos.innerHTML = this.halfEnemies[i].getEstado(ii);
                            this.matriz[this.numToPosX(num)+ii][this.numToPosY(num)] = this.halfEnemies[i].getEstado();
                            console.log("--TEST PLACING--");
                            console.log("Posición: " + this.halfEnemies[i].getPos(ii+1));
                            console.log("X " + this.numToPosX(num)+ii);
                            console.log("Y " + this.numToPosY(num));
                            
                            this.casillasPos.splice(this.casillasPos.indexOf(this.posToNum(x+ii-1,y-1)), 1);
                        }
                        console.log("--TEST PLACING--");
                        
                        loopCheck = false;
                    }
                }
                else if(dir == 2){
                    x += 1;
                    y += 1;
                    console.log("QUERER SUBIR");
                    if (x-1 > 0 && this.matriz[x-2][y-1] == "g"){
                        console.log("Ha llegado SUBIR X =  " + x);
                        
                        this.halfEnemies[i] = new QuitarMitadZombie(2,this.numToPos(num), (parseInt(x)-1) + "-" + y, (parseInt(x)-2) + "-" + y);
                        console.log(this.halfEnemies[i]);
                        
                        for(ii = 0; ii < this.halfEnemies[i].getOcupar(); ii++){
                            var pos  = document.getElementById(this.halfEnemies[i].getPos(ii));
                            pos.innerHTML = this.halfEnemies[i].getEstado(ii);
                            this.matriz[this.numToPosX(num)-ii][this.numToPosY(num)] = this.halfEnemies[i].getEstado();
                            console.log("--TEST PLACING--");
                            console.log("Posición: " + this.halfEnemies[i].getPos(ii+1));
                            console.log("X " + this.numToPosX(num)-ii);
                            console.log("Y " + this.numToPosY(num));
                            
                            this.casillasPos.splice(this.casillasPos.indexOf(this.posToNum(x-ii-1,y-1)), 1);


                        }
                        console.log("--TEST PLACING--");
                        
                        loopCheck = false;
                    }
                }else if (dir == 3){
                    y += 1;
                    x += 1;
                    console.log("QUERER DERECHA");
                    if (y+1 < 5 && this.matriz[x-1][y] == "g"){
                        console.log("Ha llegado DERECHA Y =  " + y);
                        
                        this.halfEnemies[i] = new QuitarMitadZombie(2,this.numToPos(num), x + "-" + (parseInt(y)+1), x + "-" + (parseInt(y)+2));
                        console.log(this.halfEnemies[i]);
                        
                        for(ii = 0; ii < this.halfEnemies[i].getOcupar(); ii++){
                            var pos  = document.getElementById(this.halfEnemies[i].getPos(ii));
                            pos.innerHTML = this.halfEnemies[i].getEstado(ii);
                            this.matriz[this.numToPosX(num)][this.numToPosY(num)+ii] = this.halfEnemies[i].getEstado();
                            console.log("--TEST PLACING--");
                            console.log("Posición: " + this.halfEnemies[i].getPos(ii+1));
                            console.log("X " + this.numToPosX(num));
                            console.log("Y " + this.numToPosY(num)+ii);
                            
                            this.casillasPos.splice(this.casillasPos.indexOf(this.posToNum(x-1,y+ii-1)), 1);

                        }
                        console.log("--TEST PLACING--");
                        
                        loopCheck = false;
                    }
                }else {
                    y += 1;
                    x += 1;
                    console.log("QUERER IZQUIERDA");
                    if (y-1 > 0 && this.matriz[x-1][y-2] == "g"){
                        console.log("Ha llegado IZQUIERDA Y =  " + y);
                        
                        this.halfEnemies[i] = new QuitarMitadZombie(2,this.numToPos(num), x + "-" + (parseInt(y)-1), x + "-" + (parseInt(y)-2));
                        console.log(this.halfEnemies[i]);
                        
                        for(ii = 0; ii < this.halfEnemies[i].getOcupar(); ii++){
                            var pos  = document.getElementById(this.halfEnemies[i].getPos(ii));
                            pos.innerHTML = this.halfEnemies[i].getEstado(ii);
                            this.matriz[this.numToPosX(num)][this.numToPosY(num)-ii] = this.halfEnemies[i].getEstado();
                            console.log("--TEST PLACING--");
                            console.log("Posición: " + this.halfEnemies[i].getPos(ii+1));
                            
                            this.casillasPos.splice(this.casillasPos.indexOf(this.posToNum(x-1,y-ii-1)), 1);

                        }
                                               
                        loopCheck = false;
                    }
                }
            }
            
            this.halfEnemies[i] = new QuitarMitadZombie(1,this.numToPos(num));
            
            var pos  = document.getElementById(this.halfEnemies[i].getPos());
            pos.innerHTML = this.halfEnemies[i].getEstado();
            
            this.matriz[this.numToPosX(num)][this.numToPosY(num)] = this.halfEnemies[i].getEstado();
        }
    },


    //pone la recompensa de vida extra
    setExtraLife : function(){
        for (i = 0 ; i < this.extraLifeMax/3 ; i++){
            var loopCheck = true;
            while(loopCheck){
                var rand = Math.floor(Math.random() * (this.casillasPos.length-1));
                var num = this.casillasPos[rand];

                console.log("rand: "  + num);
                console.log(this.casillasPos.length + " EXTRALIFEnums:  " + this.casillasPos);
                
                var dir = Math.floor(Math.random() * 4);
                var x = this.numToPosX(num);
                var y = this.numToPosY(num);
                if(dir == 1){
                    x += 1;
                    y += 1;
                    console.log("QUERER BAJAR");
                    if (x+2 < 5 && this.matriz[x][y-1] == "g" && this.matriz[x+1][y-1] == "g"){
                        console.log("Ha llegado BAJAR X =  " + x);
                        
                        this.extraLife[i] = new VidaExtra(3,this.numToPos(num), parseInt(x)+1 + "-" + y, parseInt(x)+2 + "-" + y);
                        console.log(this.extraLife[i]);
                        
                        for(ii = 0; ii < this.extraLife[i].getOcupar(); ii++){
                            var pos  = document.getElementById(this.extraLife[i].getPos(ii));
                            pos.innerHTML = this.extraLife[i].getEstado(ii);
                            this.matriz[this.numToPosX(num)+ii][this.numToPosY(num)] = this.extraLife[i].getEstado();
                            console.log("--TEST PLACING--");
                            console.log("Posición: " + this.extraLife[i].getPos(ii+1));
                            
                            this.casillasPos.splice(this.casillasPos.indexOf(this.posToNum(x+ii-1,y-1)), 1);
                        }
                        console.log("--TEST PLACING--");
                        
                        loopCheck = false;
                    }
                }
                else if(dir == 2){
                    x += 1;
                    y += 1;
                    console.log("QUERER SUBIR");
                    if (x-2 > 0 && this.matriz[x-2][y-1] == "g" && this.matriz[x-3][y-1] == "g"){
                        console.log("Ha llegado SUBIR X =  " + x);
                        
                        this.extraLife[i] = new VidaExtra(3,this.numToPos(num), (parseInt(x)-1) + "-" + y, (parseInt(x)-2) + "-" + y);
                        console.log(this.extraLife[i]);
                        
                        for(ii = 0; ii < this.extraLife[i].getOcupar(); ii++){
                            var pos  = document.getElementById(this.extraLife[i].getPos(ii));
                            pos.innerHTML = this.extraLife[i].getEstado(ii);
                            this.matriz[this.numToPosX(num)-ii][this.numToPosY(num)] = this.extraLife[i].getEstado();
                            console.log("--TEST PLACING--");
                            console.log("Posición: " + this.extraLife[i].getPos(ii+1));
                            
                            this.casillasPos.splice(this.casillasPos.indexOf(this.posToNum(x-ii-1,y-1)), 1);


                        }
                        console.log("--TEST PLACING--");
                        
                        loopCheck = false;
                    }
                }else if (dir == 3){
                    y += 1;
                    x += 1;
                    console.log("QUERER DERECHA");
                    if (y+2 < 5 && this.matriz[x-1][y] == "g" && this.matriz[x-1][y+1] == "g"){
                        console.log("Ha llegado DERECHA Y =  " + y);
                        
                        this.extraLife[i] = new VidaExtra(3,this.numToPos(num), x + "-" + (parseInt(y)+1), x + "-" + (parseInt(y)+2));
                        console.log(this.extraLife[i]);
                        
                        for(ii = 0; ii < this.extraLife[i].getOcupar(); ii++){
                            var pos  = document.getElementById(this.extraLife[i].getPos(ii));
                            pos.innerHTML = this.extraLife[i].getEstado(ii);
                            this.matriz[this.numToPosX(num)][this.numToPosY(num)+ii] = this.extraLife[i].getEstado();
                            console.log("--TEST PLACING--");
                            console.log("Posición: " + this.extraLife[i].getPos(ii+1));
                            
                            this.casillasPos.splice(this.casillasPos.indexOf(this.posToNum(x-1,y+ii-1)), 1);

                        }
                        console.log("--TEST PLACING--");
                        
                        loopCheck = false;
                    }
                }else {
                    y += 1;
                    x += 1;
                    console.log("QUERER IZQUIERDA");
                    if (y-2 > 0 && this.matriz[x-1][y-2] == "g" && this.matriz[x-1][y-3] == "g"){
                        console.log("Ha llegado IZQUIERDA Y =  " + y);
                        
                        this.extraLife[i] = new VidaExtra(3,this.numToPos(num), x + "-" + (parseInt(y)-1), x + "-" + (parseInt(y)-2));
                        console.log(this.extraLife[i]);
                        
                        for(ii = 0; ii < this.extraLife[i].getOcupar(); ii++){
                            var pos  = document.getElementById(this.extraLife[i].getPos(ii));
                            pos.innerHTML = this.extraLife[i].getEstado(ii);
                            this.matriz[this.numToPosX(num)][this.numToPosY(num)-ii] = this.extraLife[i].getEstado();
                            console.log("--TEST PLACING--");
                            console.log("Posición: " + this.extraLife[i].getPos(ii+1));
                            console.log("X " + this.numToPosX(num));
                            console.log("Y " + this.numToPosY(num)-ii);
                            
                            this.casillasPos.splice(this.casillasPos.indexOf(this.posToNum(x-1,y-ii-1)), 1);

                        }
                        console.log("--TEST PLACING--");
                                               
                        loopCheck = false;
                    }
                }
            }
            
        }
    },
    
    rellenarTablaG : function(){
        for (i=0; i < 20; i++){
            for (y=0; y < 20; y++){
                this.matriz[i][y] = "g";
            }
        }
    },
    
    //Muestra la tabla, cogela matriz y muestra el contenido
    rellenarTabla : function(){
        for (i=1; i <= 20; i++){
            for (y=1; y <= 20; y++){
                var pos = document.getElementById(i + "-" + y);
                if(this.size > i-1 && this.size > y-1){
                    //pos.innerHTML = "<button id='" + files + "-" + columnes + "' class='btcaselles'><img src='" + imatge + "></button>";
                    pos.innerHTML = this.matriz[i-1][y-1];
                }else{
                    pos.innerHTML = "<img src='gfx/lock.png'>";
                }
            }
        }
        //this.mostrarElementos();     
    },
    
    checkMinus : function(x,y){
        console.log("X1; " + x + " Y1: " + y);
        if(this.matriz[i][y] === "g" || this.matriz[i][y] === "v" || this.matriz[i][y] === "m" || this.matriz[i][y] === "d" || this.matriz[i][y] === "e" || this.matriz[i][y] === "z"){
            return true;
        }else{
            return false;
        }
    },
    
    mostrarTabla : function(){
        console.log();
        for (i=1; i <= 20; i++){
            for (y=1; y <= 20; y++){
                if(this.size > i-1 && this.size > y-1){
                    var pos = document.getElementById(i + "-" + y);
                    var X = i-1;
                    var Y = y-1;
                    if(this.matriz[X][Y] === "g" || this.matriz[X][Y] === "v" || this.matriz[X][Y] === "m" || this.matriz[X][Y] === "d" || this.matriz[X][Y] === "e" || this.matriz[X][Y] === "z"){
                        pos.innerHTML = "<button id='" + i + "-" + y + "'><img src='gfx/unrev.png'></button>"
                    }
                }
            }
        }
    },
    
    //muestra los variables en la tabla
    mostrarElementos : function() {
//        enemies : [],
//        stars : [],
//        doublePoints : [],
//        halfEnemies : [],
//        extraLife : [],
        var pos;
        for (i = 0; i < this.enemies.length; i++){
            pos  = document.getElementById(this.enemies[i].getPos());
            pos.innerHTML = this.enemies[i].getEstado();
        }
        
        for (i = 0; i < this.stars.length; i++){
            pos  = document.getElementById(this.stars[i].getPos());
            pos.innerHTML = this.stars[i].getEstado();
        }
        
        for (i = 0; i < this.doublePoints.length; i++){
            pos  = document.getElementById(this.doublePoints[i].getPos());
            pos.innerHTML = this.doublePoints[i].getEstado();
        }
        
        for (i = 0; i < this.halfEnemies.length; i++){
            pos  = document.getElementById(this.halfEnemies[i].getPos());
            pos.innerHTML = this.halfEnemies[i].getEstado();
        }
        
        for (i = 0; i < this.extraLife.length; i++){
            pos  = document.getElementById(this.extraLife[i].getPos());
            pos.innerHTML = this.extraLife[i].getEstado();
        }
    }
};

console.log(partida.size);









