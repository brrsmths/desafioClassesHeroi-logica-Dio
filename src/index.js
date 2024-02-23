class heroi {
    constructor (nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {
        let ataque
        switch (this.tipo){
            case 'guerreiro':
                ataque = "espada"
                break
            case 'mago':
                ataque = "magia"
                break
            case 'monge':
                ataque = "artes marciais"
                break
            case 'ninja':
                ataque = "shuriken"
                break
            default:
                ataque = "um ataque genérico"
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

let heroiUm = new heroi("Aldebran", 22, "guerreiro")

heroiUm.atacar()