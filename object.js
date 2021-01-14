// Les objets en js
class Personne {
    constructor (nom) {
        // l'attribut n'a pas besoin detre declare
        this.nom = nom
        this.age = 31
    }

    direBonjour() {
        // on rappelle son attribut avec this
        console.log(`salut, je me nomme ${this.nom}`)
    }
}
const personne1 = new Personne('Antoine')
const personne2 = new Personne(123)
personne1.direBonjour()
personne2.direBonjour()