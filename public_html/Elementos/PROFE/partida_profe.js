/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


let partida = {
    mida_tauler: 5,
    mida_caselles_tauler = 25,
    tauler: [],
    zombies: [],
    estrelles = [],
    
    inicialitzar_tauler : function(){
        for(let i = 0; i < mida_tauler; i++) {
            tauler[i] = [];
            for(let j = 0; j < array.length; j++){
                
            }
        }
    },
    
    iniciar : function(mida){
        this.mida_tauler = mida;
        this.mida_caselles_tauler = mida * mida;
        this.inicialitzar_tauler();
        this.crear_estrelles();
    },
    
    pintar_tauler : function(){
        
    },
    
    crear_estrelles : function(){
        let estrelles_creades = 0;
        while(estrelles_creades < 5){
            let estrella = new Estrella();
            this.estrelles.push(estrella);
            estrelles_creades++;
            this.setPosicio(i, j);
        }
    },
    
    getPosicio: function (x,y){
        return tauler[x][y];
    },
    setPosicio: function(valor, x, y){
        tauler[x][y] = valor;
    }
}
