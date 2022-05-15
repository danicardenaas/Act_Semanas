class Campeones{ //superclase

    constructor(nombre, vida, ataque, mana, tipo, habilidades){
        this.nombre = nombre; //se da valor como tmb se crea
        this.vida = vida; 
        this.ataque = ataque; 
        this.mana = mana; 
        this.tipo = tipo; 
        this.habilidades = habilidades; 
    }; //no olvidar ; 

    presentarse ()
    {
        console.log("Mi nombre es: " +  this.nombre + " y soy un campeón de LoL" ); 
        console.log("Estadísticas: vida: " + this.vida + ", maná: " + this.mana + ", ataque: " + this.ataque)
        console.log("Mis habilidades son: " + this.habilidades); 
    }; 
    comparar(enemigo)
    {
        if(enemigo.tipo == this.fuerte1 || enemigo.tipo == this.fuerte2)
            console.log("Le puedes ganar a, " + enemigo.nombre + ".---Tiene desventaja."); 
        else if (enemigo.fuerte1 == this.tipo || enemigo.fuerte2 == this.tipo)
            console.log("Puedes perder contra, " + enemigo.nombre + ".+++Tú tienes desventaja"); 
        else if (enemigo.tipo == this.tipo)
        {
            console.log(this.nombre +  " = " + this.puntos); //despliega puntajes 
            console.log(enemigo.nombre + " = " + enemigo.puntos); 
            if( this.puntos > enemigo.puntos)
                console.log("Puedes ganarle a: " + enemigo.nombre); 
            else if( this.puntos < enemigo.puntos)
                console.log("Puedes perder contra: " + enemigo.nombre); 
            else if (this.nombre == enemigo.nombre)
                console.log("Estás enfrentando a los mismos campeones")
            else 
                console.log ("Tienen las mismas estadísticas y los mismos puntajes, equilibrio perfecto.")
        }
        else 
            console.log("Están equilibrados, diviértanse!"); 
    }
}

class Tanque extends Campeones{
    constructor(nombre, vida, ataque, mana, tipo, habilidades, armadura)
    {
        super(nombre, vida, ataque, mana, tipo, habilidades)
        this.vida *= 1.24;  
        this.armadura=armadura; 
        this.tipo= "tanque"; 
        this.fuerte1="mago"; 
        this.fuerte2="asesino"; 
        this.puntos= this.vida + this.armadura + this.ataque + this.mana; //no todos tienen la misma suma porque algunos tienen otra propiedad
    };
}

class Luchador extends Campeones{
    constructor(nombre, vida, ataque, mana, tipo, habilidades)
    {
        super(nombre, vida, ataque, mana, tipo, habilidades)
        this.vida *= 1.15;  
        this.ataque *= 1.15;  
        this.tipo= "luchador"; 
        this.fuerte1="asesino"; 
        this.fuerte2="tanque"; 
        this.puntos= this.vida + this.ataque + this.mana; 
    };
}

class Tirador extends Campeones{
    constructor(nombre, vida, ataque, mana, tipo, habilidades, distancia)
    {
        super(nombre, vida, ataque, mana, tipo, habilidades)
        this.ataque *= 1.24;  
        this.distancia = distancia; 
        this.tipo= "tirador"; 
        this.fuerte1="tanque"; 
        this.fuerte2="luchador"; 
        this.puntos= this.vida + this.distancia + this.ataque + this.mana; 
    };
}

class Mago extends Campeones{
    constructor(nombre, vida, ataque, mana, tipo, habilidades, distancia)
    {
        super(nombre, vida, ataque, mana, tipo, habilidades)
        this.mana *= 1.24;  
        this.distancia = distancia; 
        this.tipo= "mago"; 
        this.fuerte1="luchador"; 
        this.fuerte2="tirador"; 
        this.puntos= this.vida + this.distancia + this.ataque + this.mana; 
    };
}

class Asesino extends Campeones{
    constructor(nombre, vida, ataque, mana, tipo, habilidades, movilidad)
    {
        super(nombre, vida, ataque, mana, tipo, habilidades)
        this.ataque *= 1.30;  
        this.vida *= .95; 
        this.movilidad = movilidad; 
        this.tipo= "asesino"; 
        this.fuerte1="luchador"; 
        this.fuerte2="tirador"; 
        this.puntos= this.vida + this.movilidad + this.ataque + this.mana; 
    };
}

const tank = new Tanque ( 'tank', 50, 250, 80, "tanque", ["disparo místico", "doble bala"], 90); 
const luch = new Luchador("luch", 75, 42, 150, "luchador", "salto doble"); 
const tira = new Tirador ("tira", 50, 245, 89, "tirador", ["opresión infinita", "depredador"], 70); 
const maguito = new Mago ( "maguito", 300, 50, 31, "mago", ["tempestad de acero", "vals de espadas", "mordida gemela"], 100); 
const ases = new Asesino("ases", 78, 67, 45, "mago", ["golpe travierizo", "doble bala"], 180)

console.log("Bienvenidx, utilízame para ganar :) ")
console.log(tank, luch, tira, maguito, ases); 