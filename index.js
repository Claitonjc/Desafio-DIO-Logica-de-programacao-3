class hero{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(tipo, ataque){

        if(this.tipo === "mago"){
            ataque = "magia"
        } else if(this.tipo === "guerreiro"){
            ataque = "espada"
        } else if(this.tipo === "monge"){
            ataque = "artes marciais"
        } else if(this.tipo === "ninja"){
            ataque = "shuriken"
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }

    
}
                        //Exemplos de parâmetros
let guerreiro = new hero("Goku", 35, "guerreiro")
let mago = new hero("Harry", 3, "mago")
let monge = new hero("DR.Strange", 38, "monge")
let ninja = new hero("Naruto", 25, "ninja")

         //Saídas
guerreiro.atacar()
mago.atacar()
monge.atacar()
ninja.atacar()