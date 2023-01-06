class ninja{
    constructor (nombre, salud){
        this.nombre = nombre;
        this.salud = salud;
        this.fuerza = 3;
        this.velocidad = 5;        
        
    }
    sayNam(){
        console.log(`El nombres es: ${this.nombre}`);

    }
    showStats(){
        console.log(`El nombres es: ${this.nombre} la salud ${this.salud} la fuerza ${this.fuerza} la velocidad ${this.velocidad} `);
    }
    drinkSake(){
        this.salud +=10;
        console.log(` la suma mas 10 de salud es: ${this.salud}`);
    }


}
let nombreNinja = new ninja("Chali", );
nombreNinja.sayNam();
let listaComplta = new ninja("Chali",5 ,"" ,"");
listaComplta.showStats();
listaComplta.drinkSake();
